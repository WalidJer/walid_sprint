import { useState } from "react";
import Rating from "../rating/Rating";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Offer = ({ offer }) => {
  const { firstImage, secondImage, title, price, discount,rating,reviews,id } = offer;

  const [imgSrc, setImageSrc] = useState(firstImage);
  return (
    <div className="offer">
      <div className="offer-image-wrapper">
        <img 
        onMouseEnter={()=> setImageSrc(secondImage)}
        onMouseLeave={()=> setImageSrc(firstImage)}
        src={imgSrc} 
        alt={title} 
        className="offer-image" />
      </div>

      <div className="offer-info">
        <h5 className="offer-title">{title}</h5>


        <Rating rating={rating} reviews={reviews}/>


        <div className="offer-price">
          
          <b className="offer-final-price-item">
            ${price - (discount * price) / 100}
          </b>
          <b className="offer-price-item">${price}</b>
        </div>
        <Link to={`/special-offer/${id}`} className="offer-details">More Details...</Link>
        <div className="offer-discount">%{discount} Discount</div>
      </div>
    </div>
  );
};

export default Offer;
