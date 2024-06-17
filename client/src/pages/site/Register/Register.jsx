import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <main class="login-bg">
        <div class="register-form-area">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-8">
                <div class="register-form text-center">
                  <div class="register-heading">
                    <span>Sign Up</span>
                    <p>Create your account to get full access</p>
                  </div>

                  <div class="input-box">
                    <div class="single-input-fields">
                      <label>Full name</label>
                      <input type="text" placeholder="Enter full name" />
                    </div>
                    <div class="single-input-fields">
                      <label>Email Address</label>
                      <input type="email" placeholder="Enter email address" />
                    </div>
                    <div class="single-input-fields">
                      <label>Password</label>
                      <input type="password" placeholder="Enter Password" />
                    </div>
                    <div class="single-input-fields">
                      <label>Confirm Password</label>
                      <input type="password" placeholder="Confirm Password" />
                    </div>
                  </div>

                  <div class="register-footer">
                    <p>
                      {" "}
                      Already have an account? <Link to={"/login"}>
                        {" "}
                        Login
                      </Link>{" "}
                      here
                    </p>
                    <button class="submit-btn3">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
