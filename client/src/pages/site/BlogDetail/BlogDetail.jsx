import React, { useEffect, useState, useRef, useContext } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import axios from "axios";
import MainContext from "../../../context/context";
import Loading from "../Loading/Loading";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const {loading,setLoading}=useContext(MainContext)
  const sidebarRef = useRef(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/blogs/${id}`).then((res) => {
      setBlog(res.data.data);
    });
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        const top = sidebarRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.75) {
          sidebarRef.current.classList.add("animate__animated", "animate__fadeInRight");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {
        loading ? (<Loading/>):(<React.Fragment>
          <Helmet>
        <title>{blog.title}</title>
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
                      <h1 data-animation="fadeInUp" data-delay=".4s">Blog Details</h1>
                      <p style={{ fontSize: "15px", fontWeight: "500", color: "white" }}>Home > Blog Details</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="blog_area single-post-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 posts-list">
                <div className="single-post">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src={blog.src || "default_image.png"}
                      alt={blog.title}
                    />
                  </div>
                  <div className="blog_details">
                    <h2 style={{ color: "#2d2d2d" }}>{blog.title}</h2>
                    <ul className="blog-info-link mt-3 mb-4">
                      <li>
                        <a href="#">
                          <i className="fa fa-user"></i> {blog.author}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-calendar"></i> {blog.uploadTime}
                        </a>
                      </li>
                    </ul>
                    <p className="excert">{blog.description}</p>
                    <p>{blog.content}</p>
                    <div className="quote-wrapper">
                      <div className="quotes">{blog.description1}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <aside ref={sidebarRef} className="single_sidebar_widget">
                  <div className="author_widget">
                    <h3 className="author_title">Author</h3>
                    <div className="author_desc">
                      <p>Written by {blog.author}</p>
                      <p>Uploaded on {blog.uploadTime}</p>
                    </div>
                  </div>
                </aside>
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

export default BlogDetail;
