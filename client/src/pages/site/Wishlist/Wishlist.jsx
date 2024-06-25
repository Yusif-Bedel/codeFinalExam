import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../../context/context";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import services1 from "../../../assets/services1.svg";
import services2 from "../../../assets/services2.svg";
import services3 from "../../../assets/services3.svg";
import services4 from "../../../assets/services4.svg";
import { Helmet } from "react-helmet";
const Wishlist = () => {
  const { loading, setLoading } = useContext(MainContext);
  const [wishlist, setWishlist] = useState(
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
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
            <title>Wishlist</title>
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
                            WishList
                          </h1>
                          <p
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              color: "white",
                            }}
                          >
                            Home &gt; WishList
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
                        
                          <th scope="col">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlist.map((item, index) => {
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
                                  <p className="wishLink" style={{ fontSize: "20px" }}>
                                    <Link className="wishLink" style={{color:"gray"}} to={`/cardDetail/${item._id}`}>{item.title}</Link>
                                  </p>
                                </div>
                              </td>
                              <td>
                                <span>${item.price}</span>
                              </td>
                             
                              <td><button onClick={()=>{
                                addToWish(item.title)
                              }} className="btn btn-danger">Remove</button></td>
                            </tr>
                          );
                        })}
                        <tr className="bottom_button">
                          <td></td>
                          <td></td>
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

export default Wishlist;
