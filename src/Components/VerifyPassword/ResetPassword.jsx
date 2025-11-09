import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function ResetPassword() {
  const notify = (paramter) => toast(paramter);
  let navigate = useNavigate();

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        newPassword: "",
      },

      onSubmit: async (values, action) => {
        try {
          let { data } = await axios.put(
            `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
            values
          );
          if (data.token) {
            notify("The Password Changed Successfully");
            localStorage.setItem("userToken", data.token);
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        } catch (error) {
          console.error("Error resetting password:", error);
          notify(error.response?.data?.message || "Failed to reset password");
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
            <h6 className="text-danger">Update Password</h6>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />{" "}
            {touched.email && errors.email ? (
              <div>
                <p>{errors.email}</p>
              </div>
            ) : null}
            <input
              type="password"
              placeholder="New Password"
              name="newPassword"
              className="form-control my-3"
              onChange={handleChange}
              value={values.newPassword}
              onBlur={handleBlur}
            />{" "}
            {touched.newPassword && errors.newPassword ? (
              <div>
                <p>{errors.newPassword}</p>
              </div>
            ) : null}
            <button
              type="submit"
              className=" btn  btn-danger  d-block mt-3 ms-1"
            >
              Update{" "}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
