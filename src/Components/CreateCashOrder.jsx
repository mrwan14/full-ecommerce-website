import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { ProductContext } from "./Context/ProductContext";
export default function CreateCashOrder() {
  const [Loading, setLoading] = useState(false);

  const notify = (paramter) => toast(paramter);
  let navigate = useNavigate();

  let { CartDetails } = useContext(ProductContext);
  const [cartProducts, serCartProducts] = useState([]);
  useEffect(() => {
    serCartProducts(CartDetails.data.products);
  }, []);

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        details: "",
        phone: "",
        city: "",
      },

      onSubmit: async (values, action) => {
        setLoading(true);
        let { data } = await axios.post(
          `https://route-ecommerce.onrender.com/api/v1/orders/${CartDetails.data._id}`,
          { shippingAddress: values },
          { headers: { token: localStorage.getItem("userToken") } }
        );
        if (data.status === "success") {
          notify(data.status);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      },
    });

  return (
    <div className=" container">
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={handleSubmit} action="">
            <div className="form mt-5 ">
              <h5 className="text-danger ms-1">Shipping Address </h5>
              <input
                type="text"
                placeholder="Shipping Details"
                className=" form-control "
                name="details"
                onChange={handleChange}
                value={values.details}
                onBlur={handleBlur}
              />

              <input
                type="text"
                placeholder="Phone"
                className=" form-control "
                name="phone"
                onChange={handleChange}
                value={values.phone}
                onBlur={handleBlur}
              />

              <input
                type="text"
                placeholder="City"
                className="form-control"
                name="city"
                onChange={handleChange}
                value={values.city}
                onBlur={handleBlur}
              />

              <div className=" my-5   ">
                <button type="submit" className=" btn btn-danger  ms-1  ">
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6   offset-2  mt-5">
          <div>
            {cartProducts.map((product) => (
              <div>
                {" "}
                <div className="row mt-2">
                  <div className=" col-md-3 img">
                    <img src={product.product.imageCover} alt="" />
                  </div>
                  <div className="col-md-7">{product.product.title}</div>
                  <div className="col-md-1">${product.price}</div>
                </div>
              </div>
            ))}
            <div className="mt-5">
              <div className="d-flex justify-content-between">
                <h6>SubTotal :</h6>
                <h6>${CartDetails.data.totalCartPrice}</h6>
              </div>
              <div className="d-flex justify-content-between my-3">
                <h6>Shipping :</h6>
                <h6>0</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Total :</h6>
                <h6>${CartDetails.data.totalCartPrice}</h6>
              </div>
            </div>
            <div className="mt-3">
              {" "}
              <div class="form-check">
                <input
                  class="form-check-input    "
                  type="radio"
                  name="exampleRadios"
                  id="Bank"
                  value="Bank"
                />
                <label class="form-check-label" for="Bank">
                  Bank
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="Cash-on-delivery"
                  value="Cash-on-delivery"
                />
                <label class="form-check-label" for="Cash-on-delivery">
                  Cash on delivery{" "}
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
