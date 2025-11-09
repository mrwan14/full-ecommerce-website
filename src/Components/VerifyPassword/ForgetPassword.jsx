import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function ForgetPassword() {
  const notify = (paramter) => toast(paramter);
  let navigate = useNavigate();

  const { handleBlur, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: async (values, action) => {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
        values
      );
      if (data.statusMsg === "success") {
        notify(data.message);
        setTimeout(() => {
          navigate("/verifyResetPassword");
        }, 2000);
      } else {
        notify("Invalid Token");
      }
    },
  });
  return (
    <div>
      <div className="row">
        <div className="col-md-6 mt-5">
          <div className="login-img">
            <img src={require("../../images/signUp.png")} alt="" />
          </div>
        </div>
        <div className="col-md-6     d-flex  align-items-center flex-column justify-content-center">
          <form onSubmit={handleSubmit}>
            <h5 className="text-danger">Reset Password</h5>
            <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />{" "}
            <button
              type="submit"
              className=" btn  btn-danger  d-block mt-3 ms-1"
            >
              reset{" "}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
