import React from "react";
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="sign-up ">
      <div className="row my-5">
        <div className="col-md-6">
          <img src={require("../../images/signUp.png")} alt="" />
        </div>
        <div className="col-md-6  text-center">
          {" "}
          <div className="text mt-5">
            <h2>Create an account</h2>
            <p>Enter your details below</p>
            <div className="form mt-5 ">
              <input
                type="text"
                placeholder="Name"
                className=" form-control "
              />
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
              <button  className="btn-danger btn">Create Account</button>
              <button className="btn btn2 text-black d-flex justify-content-center align-items-center ">
                <h3 className="me-2">
                  <FcGoogle />
                </h3>{" "}
                Sign up with Google
              </button>
            </div>
            <div className="ms-5 my-4"><p className="ms-1">Already have account? <Link to={'/login'} className=" border-bottom ms-2 text-black">Log in</Link></p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
