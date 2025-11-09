import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function VerifyResetPassword() {
  const notify = (paramter) => toast(paramter);
  let navigate = useNavigate();
  const { handleBlur, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      resetCode: "",
    },

    onSubmit: async (values, action) => {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
        values
      );
      if (data.status === "Success") {
        notify(data.status);
        setTimeout(() => {
          navigate("/resetPassword");
        }, 2000);
      } else {
        notify("Invalid Token");
      }
    },
  });
  return (
    <div className="row">
      <div className="col-md-6 mt-5">
        <div className="login-img">
          <img src={require("../../images/signUp.png")} alt="" />
        </div>
      </div>
      <div className="col-md-6     d-flex  align-items-center flex-column justify-content-center">
        <form onSubmit={handleSubmit}>
          <h6 className="text-danger">Check Your Email Box</h6>
          <input
            type="text"
            placeholder="Enter Verification Code"
            name="resetCode"
            className="form-control"
            onChange={handleChange}
            value={values.resetCode}
            onBlur={handleBlur}
          />{" "}
          <button
            type="submit"
            className=" btn  btn-danger  d-block mt-3 ms-1"
          >
            Verify
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
