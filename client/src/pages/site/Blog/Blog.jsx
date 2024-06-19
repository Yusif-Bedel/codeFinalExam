import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import MainContext from "../../../context/context";
import Loading from "../Loading/Loading";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [inpVal, setInpVal] = useState("");
  const {loading,setLoading}=useContext(MainContext)
  useEffect(() => {
    axios.get("http://localhost:8080/api/blogs").then((res) => {
      console.log(res.data.data);
      setBlogs([...res.data.data]);
    });
  }, []);

  return (
    <>
      {
        loading ? (<Loading/>):(<React.Fragment>
          <Helmet>
        <title>Blog</title>
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
                        Blog
                      </h1>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: "500",
                          color: "white",
                        }}
                      >
                        Home > Blog
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="blog_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="blog_left_sidebar">
                  {blogs
                    .filter((x) =>
                      x.title.toLowerCase().includes(inpVal.toLocaleLowerCase())
                    )
                    .map((blog) => (
                      <article className="blog_item" key={blog._id}>
                        <div className="blog_item_img">
                          <img
                            className="card-img rounded-0"
                            src={blog.src || "default_image.png"}
                            alt={blog.title}
                          />
                          <a href="#" className="blog_item_date">
                            <h3>{blog.uploadTime}</h3>
                            <p>{blog.uploadTime}</p>
                          </a>
                        </div>
                        <div className="blog_details">
                          <Link
                            className="d-inline-block"
                            to={`/blogDetail/${blog._id}`}
                          >
                            <h2
                              className="blog-head"
                              style={{ color: "#2d2d2d" }}
                            >
                              {blog.title}
                            </h2>
                          </Link>
                          <ul className="blog-info-link">
                            <li>
                              <a href="#">
                                <i className="fa fa-user"></i> {blog.category}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Keyword"
                            onFocus={(e) => (e.target.placeholder = "")}
                            onBlur={(e) =>
                              (e.target.placeholder = "Search Keyword")
                            }
                            value={inpVal}
                            onChange={(e) => {
                              setInpVal(e.target.value);
                            }}
                          />
                          <div className="input-group-append">
                            <button className="btns" type="button">
                              <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        className="button rounded-0 primary-bg text-orangered w-100 btn_1 boxed-btn"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
        </React.Fragment>)
      }
    </>
  );
};

export default Blog;
