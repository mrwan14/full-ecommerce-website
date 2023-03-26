import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
export default function Login() {
  return (
    <div>
      <div className="sign-up ">
        <div className="row my-5">
          <div className="col-md-6">
            <img src={require("../../images/signUp.png")} alt="" />
          </div>
          <div className="col-md-6  text-center">
            {" "}
            <div className="text ">
              <h2 className="me-3">Log in to Exclusive</h2>
              <p className="me-3">Enter your details below</p>
              <div className="form mt-5 ">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className=" form-control "
                />
                <input
                  type="password"
                  placeholder="Password"
                  className=" form-control "
                />
              </div>
              <div className="d-flex my-5 justify-content-center ms-5 ">
                <button className="btn login-btn btn-danger me-5 d-flex justify-content-end align-items-start ">
                  <p className="me-1 mt-0 fs-6">Log In</p>
                </button>
                <Link className="text-danger mt-3">Forget Password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  );
}
