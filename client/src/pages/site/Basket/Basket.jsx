import React, { useContext, useEffect } from "react";
import MainContext from "../../../context/context";
import Loading from "../Loading/Loading";
import AOS from "aos";
import services1 from '../../../assets/services1.svg';
import services2 from '../../../assets/services2.svg';
import services3 from '../../../assets/services3.svg';
import services4 from '../../../assets/services4.svg';
import { Link } from "react-router-dom";
const Basket = () => {
  const { loading, setLoading } = useContext(MainContext);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <main style={{paddingTop:"100px"}}>
          <div className="slider-area ">
          <div className="slider-active">
            <div className="single-slider hero-overly2 slider-height2 d-flex align-items-center slider-bg2">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-8">
                    <div className="hero__caption hero__caption2">
                      <h1 data-animation="fadeInUp" data-delay=".4s">Cart</h1>
                      <p style={{ fontSize: "15px", fontWeight: "500", color: "white" }}>Home > Cart</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            <section class="cart_area section-padding40">
              <div class="container">
                <div class="cart_inner">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="media">
                              <div class="d-flex">
                                <img
                                  alt
                                  data-cfsrc="assets/img/gallery/card1.png"
                                  style={{display:"none",visibility:"hidden;"}}
                                />
                                <noscript>
                                  <img
                                    src="assets/img/gallery/card1.png"
                                    alt=""
                                  />
                                </noscript>
                              </div>
                              <div class="media-body">
                                <p>Minimalistic shop for multipurpose use</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5>$360.00</h5>
                          </td>
                          <td>
                            <div class="product_count">
                              <span class="input-number-decrement">
                                {" "}
                                <i class="ti-minus"></i>
                              </span>
                              <input
                                class="input-number"
                                type="text"
                                value="1"
                                min="0"
                                max="10"
                              />
                              <span class="input-number-increment">
                                {" "}
                                <i class="ti-plus"></i>
                              </span>
                            </div>
                          </td>
                          <td>
                            <h5>$720.00</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="media">
                              <div class="d-flex">
                                <img
                                  alt
                                  data-cfsrc="assets/img/gallery/card2.png"
                                  style={{display:"none",visibility:"hidden;"}}
                                />
                                <noscript>
                                  <img
                                    src="assets/img/gallery/card2.png"
                                    alt=""
                                  />
                                </noscript>
                              </div>
                              <div class="media-body">
                                <p>Minimalistic shop for multipurpose use</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5>$360.00</h5>
                          </td>
                          <td>
                            <div class="product_count">
                              <span class="input-number-decrement">
                                {" "}
                                <i class="ti-minus"></i>
                              </span>
                              <input
                                class="input-number"
                                type="text"
                                value="1"
                                min="0"
                                max="10"
                              />
                              <span class="input-number-increment">
                                {" "}
                                <i class="ti-plus"></i>
                              </span>
                            </div>
                          </td>
                          <td>
                            <h5>$720.00</h5>
                          </td>
                        </tr>
                        <tr class="bottom_button">

                          <td></td>
                          <td></td>
                    
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            <h5>Subtotal</h5>
                          </td>
                          <td>
                            <h5>$2160.00</h5>
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
                    <div class="checkout_btn_inner float-right">
                      <Link class="btn" to={'/product'}>
                        Continue Shopping
                      </Link>
                      <Link class="btn checkout_btn" to={'#'}>
                        Proceed to checkout
                      </Link>
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
        </React.Fragment>
      )}
    </>
  );
};

export default Basket;
