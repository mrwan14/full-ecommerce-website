import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { ProductContext } from "./Context/ProductContext";
import { API_BASE_URL } from "../config/api";
import { PAYMENT_METHODS, VALIDATION } from "../constants";

export default function CreateCashOrder() {
  const [Loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS.CASH);

  const notify = (paramter) => toast(paramter);
  let navigate = useNavigate();

  let { CartDetails } = useContext(ProductContext);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    if (CartDetails?.data?.products) {
      setCartProducts(CartDetails.data.products);
    }
  }, [CartDetails]);

  const validationSchema = Yup.object({
    details: Yup.string()
      .min(10, "Shipping details must be at least 10 characters")
      .required("Shipping details are required"),
    phone: Yup.string()
      .min(VALIDATION.PHONE_MIN_LENGTH, `Phone must be at least ${VALIDATION.PHONE_MIN_LENGTH} digits`)
      .max(VALIDATION.PHONE_MAX_LENGTH, `Phone must be at most ${VALIDATION.PHONE_MAX_LENGTH} digits`)
      .matches(/^[0-9]+$/, "Phone must contain only numbers")
      .required("Phone number is required"),
    city: Yup.string()
      .min(2, "City name must be at least 2 characters")
      .required("City is required"),
  });

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        details: "",
        phone: "",
        city: "",
      },
      validationSchema,
      onSubmit: async (values, action) => {
        if (!CartDetails?.data?._id) {
          notify("Cart is empty");
          return;
        }
        
        setLoading(true);
        try {
          let { data } = await axios.post(
            `${API_BASE_URL}/api/v1/orders/${CartDetails.data._id}`,
            { 
              shippingAddress: values,
              paymentMethod: paymentMethod,
            },
            { headers: { token: localStorage.getItem("userToken") } }
          );
          if (data.status === "success") {
            notify("Order placed successfully");
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        } catch (error) {
          console.error("Error creating order:", error);
          notify(error.response?.data?.message || "Failed to create order");
          setLoading(false);
        }
      },
    });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <form onSubmit={handleSubmit} action="">
            <div className="form mt-5">
              <h5 className="text-danger ms-1">Shipping Address</h5>
              <input
                type="text"
                placeholder="Shipping Details"
                className={`form-control ${touched.details && errors.details ? "is-invalid" : ""}`}
                name="details"
                onChange={handleChange}
                value={values.details}
                onBlur={handleBlur}
                aria-label="Shipping Details"
                aria-required="true"
              />
              {touched.details && errors.details && (
                <div className="invalid-feedback d-block">{errors.details}</div>
              )}

              <input
                type="tel"
                placeholder="Phone"
                className={`form-control mt-3 ${touched.phone && errors.phone ? "is-invalid" : ""}`}
                name="phone"
                onChange={handleChange}
                value={values.phone}
                onBlur={handleBlur}
                aria-label="Phone Number"
                aria-required="true"
              />
              {touched.phone && errors.phone && (
                <div className="invalid-feedback d-block">{errors.phone}</div>
              )}

              <input
                type="text"
                placeholder="City"
                className={`form-control mt-3 ${touched.city && errors.city ? "is-invalid" : ""}`}
                name="city"
                onChange={handleChange}
                value={values.city}
                onBlur={handleBlur}
                aria-label="City"
                aria-required="true"
              />
              {touched.city && errors.city && (
                <div className="invalid-feedback d-block">{errors.city}</div>
              )}

              <div className=" my-5   ">
                <button 
                  type="submit" 
                  className=" btn btn-danger  ms-1"
                  disabled={Loading}
                  aria-label="Place Order"
                >
                  {Loading ? "Placing Order..." : "Place Order"}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6 offset-md-2 mt-5 mt-md-0">
          <div>
            {cartProducts && cartProducts.length > 0 ? cartProducts.map((product) => (
              <div key={product.product._id || product.product.id || product._id} className="mb-3 p-3 border rounded">
                <div className="row align-items-center">
                  <div className="col-4 col-md-3">
                    <img src={product.product.imageCover} alt={product.product.title} className="img-fluid w-100" />
                  </div>
                  <div className="col-5 col-md-7">
                    <h6 className="mb-0 small">{product.product.title}</h6>
                  </div>
                  <div className="col-3 col-md-2 text-end">
                    <strong>${product.price}</strong>
                  </div>
                </div>
              </div>
            )) : (
              <div className="text-center my-5">
                <p>No items in cart</p>
              </div>
            )}
            {CartDetails?.data && (
              <div className="mt-5 p-3 border rounded">
                <div className="d-flex justify-content-between mb-2">
                  <h6 className="mb-0">SubTotal:</h6>
                  <h6 className="mb-0">${CartDetails.data.totalCartPrice || 0}</h6>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <h6 className="mb-0">Shipping:</h6>
                  <h6 className="mb-0">$0</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0 fw-bold">Total:</h6>
                  <h6 className="mb-0 fw-bold">${CartDetails.data.totalCartPrice || 0}</h6>
                </div>
              </div>
            )}
            <div className="mt-4">
              <h6 className="mb-3">Payment Method</h6>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="cash"
                  value={PAYMENT_METHODS.CASH}
                  checked={paymentMethod === PAYMENT_METHODS.CASH}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  aria-label="Cash on delivery"
                />
                <label className="form-check-label" htmlFor="cash">
                  Cash on delivery
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="bank"
                  value={PAYMENT_METHODS.BANK}
                  checked={paymentMethod === PAYMENT_METHODS.BANK}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  aria-label="Bank transfer"
                />
                <label className="form-check-label" htmlFor="bank">
                  Bank Transfer
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
