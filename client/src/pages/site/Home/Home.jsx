import React, { useEffect } from "react";
import services1 from "../../../assets/services1.svg";
import services2 from "../../../assets/services2.svg";
import services3 from "../../../assets/services3.svg";
import services4 from "../../../assets/services4.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import insta from '../../../assets/insta.png';
import insta1 from '../../../assets/instra1.png';
import insta2 from '../../../assets/instra2.png';
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <main style={{ paddingTop: "100px" }}>
        <div className="slider-area ">
          <div className="slider-active">
            <div className="single-slider hero-overly1 slider-height d-flex align-items-center slider-bg1">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-8">
                    <div
                      className="hero__caption"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      <span>70% Sale off</span>
                      <h1 data-animation="fadeInUp" data-delay=".4s">
                        Furniture at Cost
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla.
                      </p>
                      <div
                        className="hero__btn"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                        <a href="industries.html" className="btn hero-btn">
                          Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="properties new-arrival fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <div
                  className="section-tittle mb-60 text-center wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <h2>Popular products</h2>
                  <p>
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="properties__button text-center">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-item nav-link active"
                        id="nav-Sofa-tab"
                        data-toggle="tab"
                        href="#nav-Sofa"
                        role="tab"
                        aria-controls="nav-Sofa"
                        aria-selected="true"
                      >
                        Sofa
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-Table-tab"
                        data-toggle="tab"
                        href="#nav-Table"
                        role="tab"
                        aria-controls="nav-Table"
                        aria-selected="false"
                      >
                        Table
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-Chair-tab"
                        data-toggle="tab"
                        href="#nav-Chair"
                        role="tab"
                        aria-controls="nav-Chair"
                        aria-selected="false"
                      >
                        Chair
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-Bed-tab"
                        data-toggle="tab"
                        href="#nav-Bed"
                        role="tab"
                        aria-controls="nav-Bed"
                        aria-selected="false"
                      >
                        Bed
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-Lightning-tab"
                        data-toggle="tab"
                        href="#nav-Lightning"
                        role="tab"
                        aria-controls="nav-Lightning"
                        aria-selected="false"
                      >
                        Lightning
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-Decore-tab"
                        data-toggle="tab"
                        href="#nav-Decore"
                        role="tab"
                        aria-controls="nav-Decore"
                        aria-selected="false"
                      >
                        Decore
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="visit-tailor-area fix">
          <div className="tailor-offers"></div>

          <div className="tailor-details">
            <h2>
              Best Furniture
              <br /> manufacturer
            </h2>
            <p>
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <p className="pera-bottom">
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <a href="#" className="btn">
              Discover More
            </a>
          </div>
        </div>

        <div className="new-arrival new-arrival2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div
                  className="section-tittle mb-60 text-center wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".2s"
                >
                  <h2>Products you may like</h2>
                  <p>
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="room-btn">
                <a href="product.html" className="border-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="instagram-area">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="instra-tittle mb-40">
                  <div className="section-tittle">
                    <img src={insta} alt="" />
                    <h2>Get Inspired with Instagram</h2>
                    <p className="mb-35">
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                    <a href="product.html" className="border-btn">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="row no-gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="single-instagram">
                      {/* <img alt className="w-100" data-cfsrc="assets/img//gallery/instra1.png" style="display:none;visibility:hidden;"><noscript><img src="assets/img/gallery/instra1.png" alt="" className="w-100"></noscript> */}
                      <img className="w-100" src={insta1} alt="" />
                      <a href="#">
                        <i className="ti-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="single-instagram">
                    <img className="w-100" src={insta2} alt="" />
                      <a href="#">
                        <i className="ti-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="new-arrival new-arrival2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <div
                  className="section-tittle mb-60 text-center wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".2s"
                >
                  <h2>Top Pick</h2>
                  <p>
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="room-btn">
                <a href="product.html" className="border-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="categories-area section-padding40 gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="single-cat mb-50"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
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
                <div
                  className="single-cat mb-50"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
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
                <div
                  className="single-cat mb-50"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
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
                <div
                  className="single-cat mb-50"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
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
  );
};

export default Home;
