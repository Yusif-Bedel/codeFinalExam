import React from 'react'
import './Footer.css'
import logo2 from '../../../assets/logo2.png'
const Footer = () => {
  return (
    <footer>
      <div className="footTop">
        <div className="footDiv1">
          <img src={logo2} alt="" />
          <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          <div className="footIcons">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-pinterest-p"></i>
          </div>
        </div>
        <div className="footDiv2">
          <h3>Quick links</h3>
          <ul>
            <li><a href="#">Image Licensin</a></li>
            <li><a href="#">Style Guide</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footDiv2">
        <h3>Shop Category</h3>
          <ul>
            <li><a href="#">Image Licensin</a></li>
            <li><a href="#">Style Guide</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footDiv2">
        <h3>Partners</h3>
          <ul>
            <li><a href="#">Image Licensin</a></li>
            <li><a href="#">Style Guide</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footBottom">
        <p>Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by <i>YUSIF</i></p>
      </div>
    </footer>
  )
}

export default Footer
