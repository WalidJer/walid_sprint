/* eslint-disable react/prop-types */
import { BsList } from "react-icons/bs";

import { FaBasketShopping } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegSmileBeam } from "react-icons/fa";


const TopHeader = ({setToggle}) => {
  return (
    <div className="top-header">
    <div onClick={()=>setToggle(true)} className="top-header-menu">
      <BsList size={24} className="header-list" />
    </div>
    <div className="top-header-logo">
      <FaBasketShopping aria-label="Basket Icon" />
      <span>Walid App</span>
    </div>
    <div className="top-header-text">
        <FaRegSmileBeam size={20} className="header-smile-icon" />
        Welcome to our website!
      </div>
    <div className="top-header-phone">
    <BsFillTelephoneFill className="header-phone" />
      <span>123-456-789</span>
      
    </div>
  </div>
  )
}

export default TopHeader