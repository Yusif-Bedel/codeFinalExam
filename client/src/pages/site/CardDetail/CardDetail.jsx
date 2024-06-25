import React, { useEffect, useState } from "react";
import services1 from "../../../assets/services1.svg";
import services2 from "../../../assets/services2.svg";
import services3 from "../../../assets/services3.svg";
import services4 from "../../../assets/services4.svg";
import AOS from "aos";
import { useParams } from "react-router";
import axios from "axios";
import { Helmet } from "react-helmet";
import Loading from "../Loading/Loading";

const CardDetail = () => {
  const [itemData, setItemData] = useState({});
  const [loading, setLoading] = useState(true);
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );
  const [wishlist, setWishlist] = useState(
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [basket, wishlist]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`).then((res) => {
      console.log(res.data.data);
      setItemData(res.data.data);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  function addToBasket(title) {
    let basketItem = basket.find((x) => x.title == title);
    if (!basketItem) {
      setBasket([
        ...basket,
        { ...itemData, count: 1, totalPrice: itemData.price },
      ]);
    } else {
      basketItem.count++;
      basketItem.totalPrice = basketItem.price * basketItem.count;
      setBasket([...basket]);
    }
  }
  function addToWish(title) {
    let wishItem = wishlist.find((x) => x.title == title);
    if (!wishItem) {
      setWishlist([...wishlist, { ...itemData }]);
      alert("item wishliste add olundu");
    } else {
      setWishlist([...wishlist.filter((x) => x.title != title)]);
      alert("item wishlistden remove olundu");
    }
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Helmet>
            <title>Product Details</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <main style={{ marginTop: "100px" }}>
            <div className="slider-area ">
              <div className="slider-active">
                <div className="single-slider hero-overly2 slider-height2 d-flex align-items-center slider-bg2">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-8 col-md-8">
                        <div className="hero__caption hero__caption2">
                          <h1 data-animation="fadeInUp" data-delay=".4s">
                            Product Details
                          </h1>
                          <p
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              color: "white",
                            }}
                          >
                            Home > Product Details
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product_image_area section-padding40">
              <div className="container">
                <div className="row s_product_inner">
                  <div className="col-lg-5">
                    <div className="product_slider_img">
                      <div id="vertical">
                        {itemData.images &&
                          itemData.images.map((image, index) => (
                            <div key={index} data-thumb={image}>
                              <img
                                className="w-100"
                                src={image}
                                alt={`Product Image ${index + 1}`}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 offset-lg-1">
                    <div className="s_product_text">
                      <h3>{itemData.title}</h3>
                      <h2>${itemData.price}</h2>
                      <ul className="list">
                        <li>
                          <a className="active" href="#">
                            <span>Category</span> : {itemData.category}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Availability</span> :{" "}
                            {itemData.availability ? "In Stock" : "In Stock"}
                          </a>
                        </li>
                      </ul>
                      <p>{itemData.description}</p>
                      <div className="card_area">
                        <div className="add_to_cart">
                          <button
                            href="#"
                            className="btn"
                            onClick={() => {
                              addToBasket(itemData.title);
                            }}
                          >
                            add to cart
                          </button>
                          <br />
                          <button
                            href="#"
                            className="btn"
                            onClick={() => {
                              addToWish(itemData.title);
                            }}
                          >
                            add to wishlist
                          </button>
                          <a href="#" className="like_us">
                            <i class="fa-solid fa-heart"></i>
                          </a>
                        </div>
                        <div className="social_icon">
                          <a href="#" className="fb">
                            <i class="fa-brands fa-facebook-f"></i>
                          </a>
                          <a href="#" className="tw">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                          <a href="#" className="li">
                            <i class="fa-brands fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
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
        </React.Fragment>
      )}
    </>
  );
};

export default CardDetail;
