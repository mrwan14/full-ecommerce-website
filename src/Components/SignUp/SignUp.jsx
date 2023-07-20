import React from "react";
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
export default function SignUp() {
  const notify = (paramter) => toast(paramter);
  let navigate = useNavigate();
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        phone: "",
        rePassword: "",
      },
      validationSchema: Yup.object({
        name: Yup.string().max(20).required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .max(20, "Must be valid password")
          .required("Required"),
        rePassword: Yup.string()
          .max(20)
          .required("Required")
          .oneOf([Yup.ref("password"), "the password does not match"]),
        phone: Yup.string().max(11).required("Required"),
      }),
      onSubmit: async (values, action) => {
        await fetch("https://route-ecommerce.onrender.com/api/v1/auth/signup", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            // Handle data

            if (data.message === "success") {
              notify(data.message);
              localStorage.setItem("userToken", data.token);
              setTimeout(() => {
                navigate("/");
              }, 2000);
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      },
    });

  return (
    <div className="sign-up ">
      <div className="row my-5">
        <div className="col-md-6">
          <div className="sign-up-img">
            <img src={require("../../images/signUp.png")} alt="" />
          </div>{" "}
        </div>
        <div className="col-md-6  text-center">
          {" "}
          <div className="text mt-5">
            <div className="title">
              <h2>Create an account</h2>
              <p>Enter your details below</p>
            </div>

            <form action="" onSubmit={handleSubmit}>
              <div className="form mt-5  ">
                <div className="d-flex justify-content-between">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      onBlur={handleBlur}
                      className={`form-control ${
                        errors.name ? "input-error" : ""
                      }`}
                    />
                    {touched.name && errors.name ? (
                      <div>
                        <p>{errors.name}</p>
                      </div>
                    ) : null}
                    <input
                      type="Email"
                      name="email"
                      placeholder="Email or Phone Number"
                      className={`form-control ${
                        errors.email ? "input-error" : ""
                      }`}
                      onChange={handleChange}
                      value={values.email}
                      onBlur={handleBlur}
                    />{" "}
                    {touched.email && errors.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                    <input
                      type="phone"
                      name="phone"
                      placeholder=" Phone Number"
                      className={`form-control ${
                        errors.phone ? "input-error" : ""
                      }`}
                      onChange={handleChange}
                      value={values.phone}
                      onBlur={handleBlur}
                    />
                    {touched.phone && errors.phone ? (
                      <div>{errors.phone}</div>
                    ) : null}
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className={`form-control ${
                        errors.password ? "input-error" : ""
                      }`}
                      onChange={handleChange}
                      value={values.password}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password ? (
                      <div>{errors.password}</div>
                    ) : null}
                    <input
                      type="password"
                      placeholder="RePassword"
                      name="rePassword"
                      className={`form-control ${
                        errors.rePassword ? "input-error" : ""
                      }`}
                      onChange={handleChange}
                      value={values.rePassword}
                      onBlur={handleBlur}
                    />
                    {touched.rePassword && errors.rePassword ? (
                      <div>
                        {" "}
                        <p> the password does not match</p>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className=" Flex-between-buttons-login d-flex  justify-content-between ">
                  <div className="btns">
                    <button className="btn-danger btn mb-3" type="submit">
                      Create Account
                    </button>
                    <button className="btn btn2 text-black d-flex justify-content-center align-items-center ">
                      <h3 className="me-2">
                        <FcGoogle />
                      </h3>{" "}
                      Sign up with Google
                    </button>
                  </div>
                  <div className="ms-4 my-4 log-in">
                    <p className="ms-2 ">
                      Already have account?{" "}
                      <Link
                        to={"/login"}
                        className=" border-bottom ms-2 text-black"
                      >
                        Log in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
