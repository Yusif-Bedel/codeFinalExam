import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import loginValidation from "../../../validations/login.validation";
import MainContext from "../../../context/context";

const Login = () => {
  const {loginned,setLoginned}=useContext(MainContext)
  const navigate = useNavigate();
  const [notification, setNotification] = useState({ message: "", type: "" });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async (values, actions) => {
      try {
        const response = await axios.post("http://localhost:8080/api/login", {
          email: values.email,
          password: values.password,
        });

        if (response.data.auth) {
          actions.resetForm();

          const token = response.data.token;
          Cookies.set("token", token, { expires: 1 });

          setNotification({
            message: response.data.message,
            type: "success",
          });
          setLoginned(!loginned)
          navigate("/");
        } else {
          setNotification({
            message: response.data.message,
            type: "error",
          });
        }
      } catch (error) {
        console.log(error);
        setNotification({
          message: "Something went wrong!",
          type: "error",
        });
      }
    },
  });

  const handleNotificationClose = () => {
    setNotification({ message: "", type: "" });
  };

  return (
    <main style={{ marginTop: "100px", padding: "50px" }} className="login-bg">
      <div className="login-form-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="login-form">
                <div className="login-heading">
                  <span>Login</span>
                  <p>Enter Login details to get access</p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="input-box">
                    <div className="single-input-fields">
                      <label>Email</label>
                      <input
                        type="text"
                        placeholder="Email address"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <small style={{ color: "red" }}>
                          {formik.errors.email}
                        </small>
                      )}
                    </div>
                    <div className="single-input-fields">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.password && formik.errors.password && (
                        <small style={{ color: "red" }}>
                          {formik.errors.password}
                        </small>
                      )}
                    </div>
                  </div>

                  {notification.message && (
                    <div
                      className={`notification ${
                        notification.type === "error"
                          ? "notification-error"
                          : "notification-success"
                      }`}
                    >
                      <p>{notification.message}</p>
                      <button
                        className="notification-close"
                        onClick={handleNotificationClose}
                      >
                        &times;
                      </button>
                    </div>
                  )}

                  <div className="login-footer">
                    <p>
                      Don’t have an account?{" "}
                      <Link to="/register">Sign Up</Link> here
                    </p>
                    <button className="submit-btn3" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

