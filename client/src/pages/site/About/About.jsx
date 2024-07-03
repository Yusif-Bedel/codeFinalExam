import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import about1 from '../../../assets/about1.png';
import about2 from '../../../assets/about2.png';
import insta from '../../../assets/insta.png';
import insta1 from '../../../assets/instra1.png';
import insta2 from '../../../assets/instra2.png';
import services1 from '../../../assets/services1.svg';
import services2 from '../../../assets/services2.svg';
import services3 from '../../../assets/services3.svg';
import services4 from '../../../assets/services4.svg';
import Helmet from 'react-helmet'
import MainContext from '../../../context/context';
import Loading from '../Loading/Loading';

const About = () => {
  const {loading,setLoading}=useContext(MainContext)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
     {
      loading ? (<Loading/>) : (<React.Fragment>
        <Helmet>
        <title>About</title>
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
                      <h1 data-animation="fadeInUp" data-delay=".4s">About</h1>
                      <p style={{ fontSize: "15px", fontWeight: "500", color: "white" }}>Home > About</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-area section-padding40">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="section-tittle mb-60 text-center pt-10">
          <h2>Our Journey</h2>
          <p className="pera">We embarked on this incredible journey with a vision to innovate and inspire. Our mission is to create impactful solutions that make a difference in the world. We believe in pushing the boundaries of what's possible and strive to exceed expectations at every turn.</p>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="about-img pb-bottom">
          <img className='w-100' src={about1} alt="" />
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="section-tittle mb-60 text-center pt-10">
          <h2>Our Beginning</h2>
          <p className="pera">From our humble beginnings, we have grown into a team of dedicated professionals committed to excellence. Our story is one of perseverance, innovation, and unwavering dedication to our craft. Every challenge has been a stepping stone to greater achievements.</p>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="about-img pb-bottom">
          <img className='w-100' src={about2} alt="" />
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="section-tittle text-center pt-10">
          <h2>2020</h2>
          <p className="pera">In 2020, we reached a pivotal moment in our journey. It was a year of significant growth and development, where we achieved remarkable milestones. Our team worked tirelessly to overcome obstacles and create meaningful impact through our innovative solutions.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="instagram-area pb-padding">
  <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="instra-tittle mb-40">
          <div className="section-tittle">
            <img src={insta} alt="" />
            <h2>Get Inspired with Instagram</h2>
            <p className="mb-35">Discover endless inspiration through our Instagram feed. Follow our journey, get insights into our creative process, and see the world through our lens. Join us as we share moments that inspire and motivate.</p>
            <a href="#" className="border-btn">Explore More</a>
          </div>
        </div>
      </div>
      <div className="col-xl-9 col-lg-8">
        <div className="row no-gutters">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <img className='w-100' src={insta1} alt="" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <img className='w-100' src={insta2} alt="" />
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
  )
}

export default About;
