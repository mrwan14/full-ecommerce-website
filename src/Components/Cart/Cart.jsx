import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import "./Cart.css";
function Cart() {
  let location = useLocation();
  let finalLocation = location.pathname.split(" /")[0];
  let secondLocation = "jj";

  let {
    cartItems,
    removeFromCartItems,
    updateQuantity,
    incrementProduct,
    decrementProduct,
  } = useContext(DataContext);

  return (
    <div className="container  ">
      <div className="title d-flex align-items-end  my-5">
        <h6 className=" text-muted">Home </h6>
        <h6 className="ms-2  ">{finalLocation}</h6>
      </div>
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
      {cartItems.map((product) => (
        <div className="product-info">
          <div className="row">
            <div className="col-md-3 d-flex ">
              <div className="img">
                <img src={product.ImgSrc} alt="" />
              </div>
              <h6>{product.Product_Name}</h6>
            </div>
            <div className="col-md-3 text-center ">
              <h5>{product.Price}</h5>
            </div>
            <div className="col-md-3 text-center ">
              <div className="quantity d-flex justify-content-around">
                <p className="  "> 0{product.Quantity}</p>{" "}
                <div className=" crement ">
                  <button
                    className="fs-6 d-block  "
                    onClick={() => {
                      incrementProduct(product.id);
                    }}
                  >
                    {" "}
                    <AiOutlineUp />
                  </button>
                  <button
                    className="fs-6 d-block mb-5 "
                    onClick={() => {
                      decrementProduct(product.id);
                    }}
                  >
                    {" "}
                    <AiOutlineDown />
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-3 text-end ">
              <h5>{product.Price * product.Quantity} </h5>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-between cart-btn my-5">
        <button className="btn  btn-white">
          <p>Return To Shop</p>
        </button>
        <button className="btn btn-white">
          <p>Update Cart</p>
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
              <h6>15315</h6>
            </div>
            <div className="line my-3"></div>
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="fw-bold my-4">Shipping:</h6>
              <h6>15315</h6>
            </div>
            <div className="line my-3"></div>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="fw-bold my-4 fs-4">Total:</h4>
              <h6>15315</h6>
            </div>
            <button className="btn checkout-btn ">
              <p className=" mt-0">Procees to checkout</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
