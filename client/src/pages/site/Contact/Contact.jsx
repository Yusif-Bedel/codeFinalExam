// import React, { useContext } from 'react'
// import { Helmet } from 'react-helmet'
// import MainContext from '../../../context/context'
// import Loading from '../Loading/Loading'

// const Contact = () => {
//   const {loading,setLoading}=useContext(MainContext)
//   return (
//     <>
//     {
//       loading ? (<Loading/>):(<React.Fragment>
//         <Helmet>
//         <title>Contact</title>
//         <meta name="description" content="Helmet application" />
//     </Helmet>
//       <main style={{paddingTop:"100px"}}>
//       <div className="slider-area">
//         <div className="slider-active">
//           <div
//             className="single-slider hero-overly2 slider-height2 d-flex align-items-center slider-bg2"
//           >
//             <div className="container">
//               <div className="row">
//                 <div className="col-xl-6 col-lg-8 col-md-8">
//                 <div className="hero__caption hero__caption2">
//                       <h1 data-animation="fadeInUp" data-delay=".4s">Contact</h1>
//                       <p style={{ fontSize: "15px", fontWeight: "500", color: "white" }}>Home > Contact</p>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <section className="contact-section">
//         <div className="container">
//           <div className="d-none d-sm-block mb-5 pb-4">
//           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2759417917578!2d49.98278161547013!3d40.381557495164586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403065003c28d49b%3A0x18238a78ea1b5944!2zTMO8dGZpIFphZMmZIFhhdGlyyZkgUGFya8Sx!5e0!3m2!1sen!2saz!4v1718353793264!5m2!1sen!2saz" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//           </div>
//           <div className="row">
//             <div className="col-12">
//               <h2 className="contact-title">Get in Touch</h2>
//             </div>
//             <div className="col-lg-8">
//               <form
//                 className="form-contact contact_form"
//                 action=""
//                 // method="post"
//               >
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="form-group">
//                       <textarea
//                         className="form-control w-100"
//                         name="message"
//                         id="message"
//                         cols="30"
//                         rows="9"
//                         onfocus="this.placeholder = ''"
//                         onblur="this.placeholder = 'Enter Message'"
//                         placeholder=" Enter Message"
//                       ></textarea>
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <input
//                         className="form-control valid"
//                         name="name"
//                         id="name"
//                         type="text"
//                         onfocus="this.placeholder = ''"
//                         onblur="this.placeholder = 'Enter your name'"
//                         placeholder="Enter your name"
//                       />
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <input
//                         className="form-control valid"
//                         name="email"
//                         id="email"
//                         type="email"
//                         onfocus="this.placeholder = ''"
//                         onblur="this.placeholder = 'Enter email address'"
//                         placeholder="Email"
//                       />
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <div className="form-group">
//                       <input
//                         className="form-control"
//                         name="subject"
//                         id="subject"
//                         type="text"
//                         onfocus="this.placeholder = ''"
//                         onblur="this.placeholder = 'Enter Subject'"
//                         placeholder="Enter Subject"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group mt-3">
//                   <button
//                     type="submit"
//                     className="button button-contactForm boxed-btn"
//                   >
//                     Send
//                   </button>
//                 </div>
//               </form>
//             </div>
//             <div className="col-lg-3 offset-lg-1 ">
//               <div className="media contact-info d-flex">
//                 <span className="contact-info__icon"><i class="fa-solid fa-house"></i></span>
//                 <div className="media-body">
//                   <h3>Yeni Gunashli Baku</h3>
//                   <p>Samir Ceferov massiv/v</p>
//                 </div>
//               </div>
//               <div className="media contact-info d-flex">
//                 <span className="contact-info__icon"
//                   ><i class="fa-solid fa-tablet"></i></span>
//                 <div className="media-body">
//                   <h3>(+994) 077-305-88-78</h3>
//                   <p>Mon to Fri 9am to 6pm</p>
//                 </div>
//               </div>
//               <div className="media contact-info d-flex">
//                 <span className="contact-info__icon"><i class="fa-solid fa-envelope"></i></span>
//                 <div className="media-body">
//                   <h3>
//                     <a
//                       href="mailto: yusifbedel01@gmail.com"
//                       >yusifbedel01@gmail.com</a>
//                   </h3>
//                   <p>Send us your query anytime!</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       </main>
//       </React.Fragment>)
//     }
//     </>
//   )
// }

// export default Contact
import React, { useContext, useRef } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com'; // Use emailjs-com instead of @emailjs/browser
import MainContext from '../../../context/context';
import Loading from '../Loading/Loading';

const Contact = () => {
  const { loading, setLoading } = useContext(MainContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    // Replace with your serviceID and templateID
    emailjs.sendForm('service_1331iud', 'template_kpgw4jq', form.current, 'Uu2mBVNWa8cRe99Mn')
      .then((result) => {
        console.log(result.text);
        setLoading(false);
        alert('Email sent successfully!');
      }, (error) => {
        console.error(error.text);
        setLoading(false);
        alert('Failed to send email. Please try again.');
      });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Helmet>
            <title>Contact</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <main style={{ paddingTop: "100px" }}>
            {/* Your existing JSX structure */}
            <section className="contact-section">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="contact-title">Get in Touch</h2>
                  </div>
                  <div className="col-lg-8">
                    <form ref={form} onSubmit={sendEmail} className="form-contact contact_form">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <textarea
                              className="form-control w-100"
                              name="message"
                              id="message"
                              cols="30"
                              rows="9"
                              onFocus={(e) => e.target.placeholder = ''}
                              onBlur={(e) => e.target.placeholder = 'Enter Message'}
                              placeholder="Enter Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              className="form-control valid"
                              name="name"
                              id="name"
                              type="text"
                              onFocus={(e) => e.target.placeholder = ''}
                              onBlur={(e) => e.target.placeholder = 'Enter your name'}
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              className="form-control valid"
                              name="email"
                              id="email"
                              type="email"
                              onFocus={(e) => e.target.placeholder = ''}
                              onBlur={(e) => e.target.placeholder = 'Enter email address'}
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="subject"
                              id="subject"
                              type="text"
                              onFocus={(e) => e.target.placeholder = ''}
                              onBlur={(e) => e.target.placeholder = 'Enter Subject'}
                              placeholder="Enter Subject"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group mt-3">
                        <button
                          type="submit"
                          className="button button-contactForm boxed-btn"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* Additional contact info column */}
                </div>
              </div>
            </section>
          </main>
        </React.Fragment>
      )}
    </>
  );
};

export default Contact;
