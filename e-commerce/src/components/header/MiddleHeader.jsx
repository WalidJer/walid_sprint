/* eslint-disable react/prop-types */
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
const MiddleHeader = ({ cartItemsCount }) => {
  return (
    
    <div className="middle-header">
    <div className="middle-header-search-box">
      <input type="search" placeholder="Searching for..." />
      <button className="search-btn">Search</button>
    </div>
    <Link to="/cart" className="middle-header-shopping-cart">
      <GrCart className="cart-logo" />
      <span>Cart</span>
      <span className="cart-notification"> {cartItemsCount > 0 ? cartItemsCount : ""}</span>
    </Link>
  </div>
  )
}

export default MiddleHeader