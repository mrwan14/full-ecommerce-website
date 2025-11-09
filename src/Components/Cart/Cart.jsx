import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import "./Cart.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductContext } from "../Context/ProductContext";
import CouponForm from "./CouponForm";
function Cart() {
  let location = useLocation();
  let finalLocation = location.pathname.split(" /")[0];

  let { Cart, updateCartProductQuantity, clearUserCart, CartDetails } =
    useContext(ProductContext);
  return (
    <>
      {" "}
      <div>
        {" "}
        <ToastContainer />
      </div>{" "}
      <div className="container  ">
        <div className="title d-flex align-items-end  my-5">
          <h6 className=" text-muted">Home </h6>
          <h6 className="ms-2  ">{finalLocation}</h6>
        </div>

        {Cart.length === 0 ? (
          <div>
            <h2 className=" fw-bold">Your Cart Is Empty</h2>
          </div>
        ) : (
          <div>
            <div className="product-titles d-none d-md-block">
              <div className="row">
                <div className="col-md-3">
                  <h5>Product</h5>
                </div>
                <div className="col-md-3 text-center">
                  <h5>Price</h5>
                </div>
                <div className="col-md-3 text-center">
                  <h5>Quantity</h5>
                </div>
                <div className="col-md-3 text-end">
                  <h5>Subtotal</h5>
                </div>
              </div>
            </div>
            {Cart.map((product) => (
              <div key={product.product._id || product.product.id || product._id} className="product-info">
                <div className="row align-items-center">
                  <div className="col-12 col-md-3 d-flex align-items-center mb-3 mb-md-0">
                    <div className="img me-3">
                      <img src={product.product.imageCover} alt={product.product.title} className="img-fluid" />
                    </div>
                    <h6 className="mb-0">{product.product.title}</h6>
                  </div>
                  <div className="col-6 col-md-3 text-center mb-3 mb-md-0">
                    <div className="d-md-none fw-bold text-muted small">Price:</div>
                    <h5 className="mb-0">${product.price}</h5>
                  </div>
                  <div className="col-6 col-md-3 text-center mb-3 mb-md-0">
                    <div className="d-md-none fw-bold text-muted small mb-2">Quantity:</div>
                    <div className="quantity d-flex justify-content-center align-items-center">
                      <p className="mb-0 me-2">{product.count}</p>
                      <div className="crement">
                        <button
                          className="fs-6 border-0 bg-transparent"
                          onClick={() => {
                            updateCartProductQuantity(product, "increament");
                          }}
                          aria-label="Increase quantity"
                        >
                          <AiOutlineUp />
                        </button>
                        <button
                          className="fs-6 border-0 bg-transparent"
                          onClick={() => {
                            updateCartProductQuantity(product, "decreament");
                          }}
                          aria-label="Decrease quantity"
                        >
                          <AiOutlineDown />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 text-center text-md-end">
                    <div className="d-md-none fw-bold text-muted small mb-2">Subtotal:</div>
                    <h5 className="mb-0">${product.price * product.count}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2 cart-btn my-5">
          <Link to={"/"} className="w-100 w-md-auto">
            <button className="btn btn-white w-100">
              <p className="mb-0">Return To Shop</p>
            </button>
          </Link>
          {Cart.length > 0 ? (
            <button className="btn btn-white w-100 w-md-auto" onClick={clearUserCart}>
              <p className="mb-0">Clear Cart</p>
            </button>
          ) : null}
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <CouponForm CartDetails={CartDetails} />
          </div>
          <div className="col-12 col-md-6">
            <div className="cart-total p-4">
              <h4 className="fw-bolder">Cart Total</h4>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fw-bold my-4">SubTotal:</h6>
                {Cart.length === 0 ? (
                  <h6 className="mb-0">$0</h6>
                ) : (
                  <h6 className="mb-0">${CartDetails.data.totalCartPrice}</h6>
                )}
              </div>
              <div className="line my-3"></div>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fw-bold my-4">Shipping:</h6>
                <h6 className="mb-0">$0</h6>
              </div>
              <div className="line my-3"></div>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold my-4 fs-4">Total:</h4>
                {Cart.length === 0 ? (
                  <h6 className="mb-0">$0</h6>
                ) : (
                  <h6 className="mb-0">${CartDetails.data.totalCartPrice}</h6>
                )}
              </div>
              <Link to="/createCashOrder" className="d-block mt-3">
                <button className="btn checkout-btn w-100">
                  <p className="mt-0 mb-0">Proceed to checkout</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Cart;
