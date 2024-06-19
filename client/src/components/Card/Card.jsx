import React from "react";
import { Link } from "react-router-dom";
const Card = ({item}) => {
  return (
    <>
      <div  style={{maxWidth:"250px",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}} class="single-new-arrival">
        <div class="popular-img">
          <img style={{maxWidth:"250px",height:"250px"}} src={item.images[1]} alt="" />
        </div>
        <div class="popular-caption">
          <h3>
            <Link to={`/cardDetail/${item._id}`} className="cardLink">
              {item.title}
            </Link>
          </h3>
          <span>${item.price}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
