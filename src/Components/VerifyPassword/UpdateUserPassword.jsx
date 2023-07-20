import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function UpdateUserPassword() {
  const notify = (paramter) => toast(paramter);
  let navigate = useNavigate();
  const [loading, serLoading] = useState(false);

  const { handleBlur, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },

    onSubmit: async (values, action) => {
      serLoading(true);
      let { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
        values,
        {
          headers: { token: localStorage.getItem("userToken") },
        }
      );

      if (data.message === "success") {
        serLoading(false);
        localStorage.setItem("userToken", data.token);
        notify(data.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        serLoading(false);

        notify(data.message);
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
        <form>
          <h6 className="text-danger">Change Your Password</h6>
          <input
            type="password"
            placeholder="Enter Current Password"
            name="currentPassword"
            className="form-control mt-3"
            onChange={handleChange}
            value={values.currentPassword}
            onBlur={handleBlur}
          />{" "}
          <input
            type="password"
            placeholder="Enter New Password"
            name="password"
            className="form-control my-3"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />{" "}
          <input
            type="password"
            placeholder="Enter Repassword"
            name="rePassword"
            className="form-control  mb-3"
            onChange={handleChange}
            value={values.rePassword}
            onBlur={handleBlur}
          />{" "}
          <button
            type="submit"
            className=" btn  btn-danger  d-block mt-3 ms-1"
            onClick={handleSubmit}
          >
            {loading === true ? (
              <div className="fa fa-spin fa-spinner me-3"></div>
            ) : (
              <div>Change</div>
            )}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
