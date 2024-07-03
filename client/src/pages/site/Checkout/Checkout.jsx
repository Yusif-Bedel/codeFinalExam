import React, { useState, useContext, useEffect } from "react";
import AOS from "aos";
import services1 from "../../../assets/services1.svg";
import services2 from "../../../assets/services2.svg";
import services3 from "../../../assets/services3.svg";
import services4 from "../../../assets/services4.svg";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { subtotal, setSubtotal } = useContext(MainContext);
  const { loading, setLoading } = useContext(MainContext);
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    cardNumber: "",
    scode: "",
    expdate: "",
    termsAccepted: false,
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formState.cardNumber) errors.cardNumber = "Card Number is required";
    if (!formState.scode) errors.scode = "Security Code is required";
    if (!formState.expdate) errors.expdate = "Expiration Date is required";
    if (!formState.termsAccepted) errors.termsAccepted = "You must accept the terms and conditions";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      setTimeout(() => {
        alert("Payment done!");
        navigate("/");
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Payment failed", error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Checkout</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <main style={{ paddingTop: "50px" }}>
            <div className="slider-area">
              <div className="slider-active">
                <div className="single-slider hero-overly2 slider-height2 d-flex align-items-center slider-bg2">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-8 col-md-8">
                        <div className="hero__caption hero__caption2">
                          <h1 data-animation="fadeInUp" data-delay=".4s">
                            Checkout
                          </h1>
                          <p style={{ fontSize: "15px", fontWeight: "500", color: "white" }}>
                            Home &gt; Checkout
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="checkout_area section-padding40">
              <div className="container">
                <div className="billing_details">
                  <div className="row">
                    <div className="col-lg-8">
                      <h3>Card Details</h3>
                      <form className="row contact_form" onSubmit={handleSubmit} noValidate>
                        <div className="col-md-6 form-group p_star">
                          <input
                            type="text"
                            className="form-control"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={formState.cardNumber}
                            onChange={handleChange}
                          />
                          {formErrors.cardNumber && <p className="text-danger">{formErrors.cardNumber}</p>}
                        </div>
                        <div className="col-md-6 form-group p_star">
                          <input
                            type="password"
                            className="form-control"
                            name="scode"
                            placeholder="Security Code"
                            value={formState.scode}
                            onChange={handleChange}
                          />
                          {formErrors.scode && <p className="text-danger">{formErrors.scode}</p>}
                        </div>
                        <div className="col-md-6 form-group p_star">
                          <input
                            type="month"
                            className="form-control"
                            name="expdate"
                            placeholder="Expiration Date"
                            value={formState.expdate}
                            onChange={handleChange}
                          />
                          {formErrors.expdate && <p className="text-danger">{formErrors.expdate}</p>}
                        </div>
                        <div className="creat_account checkout-cap">
                          <input
                            type="checkbox"
                            id="f-option8"
                            name="termsAccepted"
                            checked={formState.termsAccepted}
                            onChange={handleChange}
                          />
                          <label htmlFor="f-option8">
                            I’ve read and accept the <a href="#">terms & conditions*</a>
                          </label>
                          {formErrors.termsAccepted && <p className="text-danger">{formErrors.termsAccepted}</p>}
                        </div>
                        <button type="submit" className="btn w-100">
                          Proceed to Paypal
                        </button>
                      </form>
                    </div>
                    <div className="col-lg-4">
                      <div className="order_box">
                        <h2>Your Order</h2>
                        <ul className="list list_2">
                          <li>
                            <a href="#">
                              Subtotal <span>${parseInt(subtotal)}</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Shipping <span>Flat rate: $50.00</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Total <span>${parseInt(subtotal) + 50}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="categories-area section-padding40 gray-bg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-cat mb-50" data-aos="fade-up" data-aos-delay="200">
                      <div className="cat-icon">
                        <img src={services1} alt="" />
                      </div>
                      <div className="cat-cap">
                        <h5>Fast & Free Delivery</h5>
                        <p>Free delivery on all orders</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-cat mb-50" data-aos="fade-up" data-aos-delay="400">
                      <div className="cat-icon">
                        <img src={services2} alt="" />
                      </div>
                      <div className="cat-cap">
                        <h5>Secure Payment</h5>
                        <p>Free delivery on all orders</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-cat mb-50" data-aos="fade-up" data-aos-delay="600">
                      <div className="cat-icon">
                        <img src={services3} alt="" />
                      </div>
                      <div className="cat-cap">
                        <h5>Money Back Guarantee</h5>
                        <p>Free delivery on all orders</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-cat mb-50" data-aos="fade-up" data-aos-delay="800">
                      <div className="cat-icon">
                        <img src={services4} alt="" />
                      </div>
                      <div className="cat-cap">
                        <h5>Online Support</h5>
                        <p>Free delivery on all orders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Checkout;
