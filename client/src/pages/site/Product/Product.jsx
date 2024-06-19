import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import services1 from "../../../assets/services1.svg";
import services2 from "../../../assets/services2.svg";
import services3 from "../../../assets/services3.svg";
import services4 from "../../../assets/services4.svg";
import MainContext from "../../../context/context";
import Card from "../../../components/Card/Card";
import Loading from "../Loading/Loading";

const Product = () => {
  const [sort, setSort] = useState(null);
  const { products } = useContext(MainContext);
  const {loading,setLoading}=useContext(MainContext)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!products) {
    return null; // or render a loading spinner or message
  }

  return (
    <>
      {
        loading ? (<Loading/>):(<React.Fragment>
          <Helmet>
        <title>Shop</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <main style={{ paddingTop: "100px" }}>
        <div className="slider-area ">
          <div className="slider-active">
            <div className="single-slider hero-overly2 slider-height2 d-flex align-items-center slider-bg2">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-8">
                    <div
                      className="hero__caption hero__caption2"
                      data-aos="fade-up"
                      data-aos-delay=".4s"
                    >
                      <h1>Product</h1>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: "500",
                          color: "white",
                        }}
                      >
                        Home > Product
                      </p>
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
                  <h2>Products</h2>
                  <p>
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </p>
                  <div className="d-flex gap-3 m-5 w-100">
                    <button
                      className="btn btn-warning" onClick={() => setSort(null)}>Default</button>
                    <button className="btn btn-warning" onClick={() => setSort({ field: "title", asc: true })}>A-Z</button>
                    <button className="btn btn-warning" onClick={() => setSort({ field: "title", asc: false })}>Z-A</button>
                    <button className="btn btn-warning" onClick={() => setSort({ field: "price", asc: true })}>Low to High</button>
                    <button className="btn btn-warning" onClick={() => setSort({ field: "price", asc: false })}>High to Low</button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                gap: "100px",
              }}
            >
              {products.length > 0 ? (
                products
                .slice()
                .sort((a, b) => {
            if (sort==null) {
              return 0;
            } else if (sort.asc == true) {
              return a[sort.field] > b[sort.field]
                ? 1
                : b[sort.field] > a[sort.field]
                ? -1
                : 0;
            } else if (sort.asc == false) {
              return a[sort.field] < b[sort.field]
                ? 1
                : b[sort.field] <a[sort.field]
                ? -1
                : 0;
            }
          })
                .map((item, index) => <Card item={item} key={index} />)
              ) : (
                <p>No products found</p>
              )}
            </div>
          </div>
        </section>

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
        </React.Fragment>)
      }
    </>
  );
};

export default Product;
