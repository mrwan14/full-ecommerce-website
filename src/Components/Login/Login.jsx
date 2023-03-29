import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
export default function Login() {
  return (
    <div>
      <div className="login ">
        <div className="row my-5">
          <div className="col-md-6">
            <div className="login-img">
            <img src={require("../../images/signUp.png")} alt="" />

            </div>
          </div>
          <div className="col-md-6  text-center">
            {" "}
            <div className="text  ">
              <div className="title">
              <h2 className="me-3">Log in to Exclusive</h2>
              <p className="me-3">Enter your details below</p>
              </div>

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
                <button className="btn login-btn   ">
                  <p className="">Log In</p>
                </button>
                <Link className="  link">Forget Password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
