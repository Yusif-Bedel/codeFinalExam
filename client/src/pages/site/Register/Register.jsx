import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom'; // Updated import
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/users', {
        username: values.username,
        email: values.email,
        password: values.password
      });
      console.log('Response:', response.data);

      if (response.status === 201) {
        alert('Registration successful!');
        navigate('/login'); // Navigate to login page
        resetForm();
      } 
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <main className="login-bg">
        <div className="register-form-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="register-form text-center">
                  <div className="register-heading">
                    <span>Sign Up</span>
                    <p>Create your account to get full access</p>
                  </div>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form className="input-box">
                        <div className="single-input-fields">
                          <label htmlFor="username">Username</label>
                          <Field type="text" id="username" name="username" placeholder="Enter username" />
                          <ErrorMessage name="username" component="div" className="error-message" />
                        </div>
                        <div className="single-input-fields">
                          <label htmlFor="email">Email Address</label>
                          <Field type="email" id="email" name="email" placeholder="Enter email address" />
                          <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <div className="single-input-fields">
                          <label htmlFor="password">Password</label>
                          <Field type="password" id="password" name="password" placeholder="Enter Password" />
                          <ErrorMessage name="password" component="div" className="error-message" />
                        </div>

                        <div className="register-footer">
                          <p>
                            Already have an account? <Link to="/login">Login here</Link>
                          </p>
                          <button type="submit" className="submit-btn3" disabled={isSubmitting}>
                            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
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
