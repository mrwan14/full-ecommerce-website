import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import "./Cart.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductContext } from "../Context/ProductContext";
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
          <div><h2 className=" fw-bold">Your Cart Is Empty</h2></div>
        ) : (
          <div>
            <div className="product-titles">
              <div className="row">
                <div className="col-md-3  ">
                  <h5>Product</h5>
                </div>
                <div className="col-md-3 text-center ">
                  <h5>Price</h5>
                </div>
                <div className="col-md-3 text-center ">
                  <h5>Quantity</h5>
                </div>
                <div className="col-md-3 text-end ">
                  <h5>Subtotal</h5>
                </div>
              </div>
            </div>
            {Cart.map((product) => (
              <div className="product-info">
                <div className="row">
                  <div className="col-md-3 d-flex ">
                    <div className="img">
                      <img src={product.product.imageCover} alt="" />
                    </div>
                    <h6>{product.product.title}</h6>
                  </div>
                  <div className="col-md-3 text-center ">
                    <h5>${product.price}</h5>
                  </div>
                  <div className="col-md-3 text-center ">
                    <div className="quantity d-flex justify-content-around">
                      <p className="  "> {product.count}</p>{" "}
                      <div className=" crement ">
                        <button
                          className="fs-6   "
                          onClick={() => {
                            updateCartProductQuantity(product, "increament");
                          }}
                        >
                          {" "}
                          <AiOutlineUp />
                        </button>
                        <button
                          className="fs-6  mb-5 "
                          onClick={() => {
                            updateCartProductQuantity(product, "decreament");
                          }}
                        >
                          {" "}
                          <AiOutlineDown />
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-end ">
                    <h5>${product.price * product.count} </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="d-flex justify-content-between cart-btn my-5">
          <Link to={"/"}>
            {" "}
            <button className="btn  btn-white">
              <p>Return To Shop</p>
            </button>
          </Link>
          <button className="btn btn-white" onClick={clearUserCart}>
            <p>Clear Cart</p>
          </button>
        </div>
        <div className="row my-5">
          <div className="col-md-6 coupon d-flex  justify-content-between">
            <form class=" email-input">
              <input
                class="form-control bg-white fontAwesome "
                type="search"
                placeholder=" Coupon Code             "
                aria-label="Search"
              />
            </form>
            <button className="btn Apply-Coupon">
              <p>Apply Coupon</p>
            </button>
          </div>
          <div className="col-md-6 ">
            <div className="cart-total p-4">
              <h4 className="fw-bolder">Cart Total</h4>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fw-bold my-4">SubTotal:</h6>
                {Cart.length === 0 ? (
                  0
                ) : (
                  <h6>${CartDetails.data.totalCartPrice}</h6>
                )}
              </div>
              <div className="line my-3"></div>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fw-bold my-4">Shipping:</h6>
                <h6>0</h6>
              </div>
              <div className="line my-3"></div>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold my-4 fs-4">Total:</h4>
                {Cart.length === 0 ? (
                  0
                ) : (
                  <h6>${CartDetails.data.totalCartPrice}</h6>
                )}
              </div>
              <Link to="/createCashOrder">
                {" "}
                <button className="btn checkout-btn ">
                  <p className=" mt-0">Procees to checkout</p>
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
