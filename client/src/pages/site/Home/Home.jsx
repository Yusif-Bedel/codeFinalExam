import React, { useContext, useEffect, useState } from "react";
import services1 from "../../../assets/services1.svg";
import services2 from "../../../assets/services2.svg";
import services3 from "../../../assets/services3.svg";
import services4 from "../../../assets/services4.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import insta from "../../../assets/insta.png";
import insta1 from "../../../assets/instra1.png";
import insta2 from "../../../assets/instra2.png";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import Card from "../../../components/Card/Card";
import axios from 'axios';
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const Home = () => {

  const { products, setProducts,loading,setLoading } = useContext(MainContext);
  const [activeTab, setActiveTab] = useState("Sofa");
  const [category, setCategory] = useState("sofa");
  const [data, setData] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products")
      .then(res => {
        const fetchedProducts = res.data.data;
        setProducts(fetchedProducts);
        const popularProducts = fetchedProducts.filter(product => product.rating === 5);
        setPopular([...popularProducts]);
        console.log(popularProducts);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [setProducts]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setData([...products.filter(x => x.brand.toLowerCase() === category)]);
  }, [category, products]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCategory(tab.toLowerCase());
  };


  return (
    <>
      <ScrollToTop/>
      {
        loading ? (<Loading/>):(<React.Fragment>
          <Helmet>
        <title>Home</title>
      </Helmet>
      <main style={{ paddingTop: "100px" }}>
        <div className="slider-area">
          <div className="slider-active">
            <div className="single-slider hero-overly1 slider-height d-flex align-items-center slider-bg1">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-8">
                    <div className="hero__caption" data-aos="fade-right" data-aos-duration="1000">
                      <span>70% Sale off</span>
                      <h1 data-animation="fadeInUp" data-delay=".4s">Furniture at Cost</h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                      </p>
                      <div className="hero__btn" data-animation="fadeInUp" data-delay=".7s" data-aos="fade-up" data-aos-duration="1200">
                        <a href="#" className="btn hero-btn">Discover More</a>
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
                <div className="section-tittle mb-60 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                  <h2>Popular products</h2>
                  <p>
                    Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="properties__button text-center">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      {["Sofa", "Table", "Chair", "Bed"].map((category) => (
                        <a
                          key={category}
                          className={`nav-item nav-link ${activeTab === category ? "active" : ""}`}
                          id={`nav-${category}-tab`}
                          data-toggle="tab"
                          href={`#nav-${category}`}
                          role="tab"
                          aria-controls={`nav-${category}`}
                          aria-selected={activeTab === category}
                          onClick={() => handleTabClick(category)}
                        >
                          {category}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 mb-4" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
                {data.map((item, index) => (
                  <Card item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="visit-tailor-area fix mb-5">
          <div className="tailor-offers"></div>
          <div className="tailor-details">
            <h2>
              Best Furniture
              <br /> manufacturer
            </h2>
            <p>
              Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <p className="pera-bottom">
              Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <a href="#" className="btn">Discover More</a>
          </div>
        </div>
        <div className="instagram-area mt-5">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="instra-tittle mb-40">
                  <div className="section-tittle">
                    <img src={insta} alt="" />
                    <h2>Get Inspired with Instagram</h2>
                    <p className="mb-35">
                      Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                    <a href="product.html" className="border-btn">Discover More</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="row no-gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="single-instagram">
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
                <div className="section-tittle mb-60 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                  <h2>Top Pick</h2>
                  <p>
                    Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-12 mb-4" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
              {popular.map((item, index) => (
                <Card item={item} key={index} />
              ))}
            </div>
            <div className="row justify-content-center" style={{ marginLeft: "37%" }}>
              <div className="room-btn">
                <Link to={"/product"} className="border-btn">Discover More</Link>
              </div>
            </div>
          </div>
        </div>
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
        </React.Fragment>)
      }
    </>
  );
};

export default Home;
