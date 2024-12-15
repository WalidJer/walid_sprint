/* eslint-disable react/prop-types */
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Rating from "../rating/Rating";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  return (
    <div className="slider-container">
      <button 
      disabled={slideIndex===-1}
      onClick={() => handleClick("left")} 
      className="arrow-left">
        <FaChevronLeft />
      </button>
      <div
        style={{ transform: `translate(${slideIndex * -250}px)` }}
        className="slider-wrapper"
      >
        {data.map((item) => (
          <Link to={`/products/${item.id}`} className="slide" key={item.id}>
            <img src={item.image} alt={item.title} className="slide-img" />
            <h3 className="slide-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="slide-price">${item.price}</div>
          </Link>
        ))}
      </div>
      <button 
      disabled={slideIndex===data.length-3}
      onClick={() => handleClick("right")} 
      className="arrow-right">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
