import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/furn.webp";
import logo2 from "../../../assets/logo2.png";
import "../../site/Header/Header.css";
import MainContext from "../../../context/context";
import axios from "axios";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const { products, setProducts,loginned,setLoginned } = useContext(MainContext);
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [userData,setUserData]=useState([])
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

  // Function to handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter products based on the search query
    const filteredResults = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  // Function to clear search and results
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };
  useEffect(()=>{
    axios.get("http://localhost:8080/api/users").then(res=>{
      setUserData([res.data.data])
      console.log(res.data.email)
    })
  },[])
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
              <Link to={"/admin"}>Products</Link>
            </li>
            <li>
              <Link to={"blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"addProducts"}>Add Products</Link>
            </li>
            <li>
              <Link to={"addBlogs"}>Add Blogs</Link>
            </li>
          </ul>
        </div>
        <i
          className="fa-solid fa-bars bar"
          onClick={() => {
            setClicked(!clicked);
          }}
        ></i>
      </nav>
      <div className="barNav" style={{ right: clicked ? "0px" : "-300px" }}>
        <p
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          X
        </p>
        <ul style={{ marginLeft: isScrolled ? "0px" : "40px" }}>
            <li>
              <Link to={"/admin"}>Products</Link>
            </li>
            <li>
              <Link to={"blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"addProducts"}>Add Products</Link>
            </li>
            <li>
              <Link to={"addBlogs"}>Add Blogs</Link>
            </li>
          </ul>
      </div>
      {/* Dropdown for search results */}
      {searchQuery && (
        <div  className="search-results">
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((product) => (
                <li key={product.id}>
                  <img style={{width:"60px",marginRight:"60px"}} src={product.images[0]} alt="" />
                  <Link className="searchLink" to={`/cardDetail/${product._id}`} onClick={clearSearch}>
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
    </>
  )
}

export default Header
