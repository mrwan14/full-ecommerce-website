import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function UpdateUserData() {
  const notify = (paramter) => toast(paramter);
  let navigate = useNavigate();
  const [loading, serLoading] = useState(false);

  const { handleBlur, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    onSubmit: async (values, action) => {
      console.log(values);
      serLoading(true);
      let { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/users/updateMe/`,
        values,
        {
          headers: { token: localStorage.getItem("userToken") },
        }
      );
      console.log(data);

      if (data.message === "success") {
        serLoading(false);
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
        <form onSubmit={handleSubmit}>
          <h6 className="text-danger">Update User Data</h6>
          <input
            type="text"
            placeholder="Update Your Name"
            name="name"
            className="form-control mt-3"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
          />{" "}
          <input
            type="text"
            placeholder="Update Your email"
            name="email"
            className="form-control my-3"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />{" "}
          <input
            type="text"
            placeholder="Update Your phone"
            name="phone"
            className="form-control  mb-3"
            onChange={handleChange}
            value={values.phone}
            onBlur={handleBlur}
          />{" "}
          <button
            type="submit"
            className=" btn  btn-danger  d-block mt-3 ms-1"
          >
            {loading === true ? (
              <div className="fa fa-spin fa-spinner me-3"></div>
            ) : (
              <div>Update</div>
            )}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
