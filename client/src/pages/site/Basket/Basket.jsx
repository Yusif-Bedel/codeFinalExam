import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../../context/context";
import Loading from "../Loading/Loading";
import AOS from "aos";
import services1 from "../../../assets/services1.svg";
import services2 from "../../../assets/services2.svg";
import services3 from "../../../assets/services3.svg";
import services4 from "../../../assets/services4.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Basket = () => {
  const { loading, setLoading } = useContext(MainContext);
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  function addToBasket(title) {
    let basketItem = basket.find((x) => x.title === title);
    if (!basketItem) {
      setBasket([...basket, { ...itemData, count: 1, totalPrice: itemData.price }]);
    } else {
      basketItem.count++;
      basketItem.totalPrice = basketItem.price * basketItem.count;
      setBasket([...basket]);
    }
  }

  function removeFromBasket(title) {
    let target = basket.find((x) => x.title === title);
    if (target.count > 1) {
      target.count--;
      target.totalPrice -= target.price;
      setBasket([...basket]);
    } else {
      setBasket([...basket.filter((x) => x.title !== title)]);
    }
  }

  function calculateSubtotal() {
    return basket.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
        <Helmet>
            <title>Basket</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <main style={{ paddingTop: "100px" }}>
            <div className="slider-area ">
              <div className="slider-active">
                <div className="single-slider hero-overly2 slider-height2 d-flex align-items-center slider-bg2">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-8 col-md-8">
                        <div className="hero__caption hero__caption2">
                          <h1 data-animation="fadeInUp" data-delay=".4s">
                            Cart
                          </h1>
                          <p
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              color: "white",
                            }}
                          >
                            Home &gt; Cart
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="cart_area section-padding40">
              <div className="container">
                <div className="cart_inner">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {basket.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    gap: "20px",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    width={"100px"}
                                    src={item.images[0]}
                                    alt=""
                                  />
                                  <p style={{ fontSize: "20px" }}>
                                    {item.title}
                                  </p>
                                </div>
                              </td>
                              <td>
                                <span>${item.price}</span>
                              </td>
                              <td>
                                <div className="product_count">
                                  <span className="input-number-decrement">
                                    {" "}
                                    <i onClick={() => {
                                      removeFromBasket(item.title);
                                    }} className="fa-solid fa-minus"></i>
                                  </span>
                                  <input
                                    className="input-number"
                                    type="text"
                                    value={item.count}
                                    min="0"
                                    max="10"
                                    readOnly
                                  />
                                  <span className="input-number-increment">
                                    {" "}
                                    <i onClick={() => {
                                      addToBasket(item.title);
                                    }} className="fa-solid fa-plus"></i>
                                  </span>
                                </div>
                              </td>
                              <td>${item.totalPrice}</td>
                            </tr>
                          );
                        })}
                        <tr className="bottom_button">
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
                            <h5>${calculateSubtotal().toFixed(2)}</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="checkout_btn_inner float-right">
                      <Link
                        style={{ background: "#f2e1d9" }}
                        className="btn"
                        to={"/product"}
                      >
                        Continue Shopping
                      </Link>
                      <Link
                        style={{ background: "#f2e1d9", marginLeft: "20px" }}
                        className="btn checkout_btn"
                        to={"#"}
                      >
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

export default Basket;


