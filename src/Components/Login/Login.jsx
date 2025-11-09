import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [Loading, setLoading] = useState(false);
  const notify = (paramter) => toast(paramter);
  let navigate = useNavigate();

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .max(20, "Must be valid password")
          .required("Required"),
      }),
      onSubmit: async (values, action) => {
        setLoading(true);
        try {
          const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          const data = await response.json();

          if (data.message === "success") {
            notify(data.message);
            localStorage.setItem("userToken", data.token);
            navigate("/");
          } else {
            notify(data.message || "Invalid credentials");
            setLoading(false);
          }
        } catch (err) {
          console.error("Login error:", err);
          notify("Network error. Please try again.");
          setLoading(false);
        }
      },
    });

  return (
    <div>
      <div className="login ">
        <div className="row my-5">
          <div className="col-md-6">
            <div className="login-img">
              <img src={require("../../images/signUp.png")} alt="" />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center  ">
            {" "}
            <div>
              <div className="title ">
                <h2>Login to Exclusive</h2>
                <p>Enter your details below</p>
              </div>
              <form
                onSubmit={handleSubmit}
                action=""
                className=" d-flex justify-content-center align-items-center mt-5"
              >
                <div>
                  {" "}
                  <input
                    type="text"
                    placeholder="Email or Phone Number"
                    className=" form-control   "
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email ? (
                    <div>
                      <p>{errors.email}</p>
                    </div>
                  ) : null}
                  <input
                    type="password"
                    placeholder="Password"
                    className=" form-control "
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password ? (
                    <div>
                      <p>{errors.password}</p>
                    </div>
                  ) : null}
                  <div className="d-flex my-5 justify-content-start  ">
                    <button type="submit" className="btn login-btn   ">
                      <p className="">
                        {Loading == true ? (
                          <div className="fa fa-spin fa-spinner me-3"></div>
                        ) : (
                          "log in"
                        )}
                      </p>
                    </button>
                    <Link className="  link" to="/forgetPassword">
                      Forget Password{" "}
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
