import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/furn.webp";
import logo2 from "../../../assets/logo2.png";
import "./Header.css";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [clicked,setClicked]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className="navnav">
        <div className="navLeft">
    
          <Link to={"/"}>
            {" "}
            <img
              style={{ display: isScrolled ? "none" : "block" }}
              className="navImg1"
              src={logo}
              alt=""
            />
            <img
              style={{ display: "block" }}
              className="navImg2"
              src={logo2}
              alt=""
            />
          </Link>
          <ul style={{ marginLeft: isScrolled ? "0px" : "40px" }}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/product"}>Product</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navRight">
          <div className="navInput">
            <input type="text" placeholder="Search products" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <Link to={"/login"}>My Account</Link>
          <div className="navWishlist">
            <Link to={"/wishlist"}>
              <i className="fa-solid fa-heart"></i>
            </Link>
            <sup>0</sup>
          </div>
          <div className="navBasket">
            <Link to={"/basket"}>
              <i className="fa-solid fa-bag-shopping"></i>
            </Link>
            <sup>0</sup>
          </div>
        </div>
        <i className="fa-solid fa-bars bar" onClick={()=>{
          setClicked(!clicked)
        }}></i>
      </nav>
      <div className="barNav" style={{right: clicked ? "0px" : "-300px"}}>
      <p onClick={()=>{
          setClicked(!clicked)
        }}>X</p>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/login"}>My Account</Link>
          </li>
          <li>
            <Link to={"/basket"}>Basket</Link>
          </li>
          <li>
            <Link to={"/wishlist"}>Wishlist</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
