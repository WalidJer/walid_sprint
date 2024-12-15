/* eslint-disable react/prop-types */
import { useState } from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";

const Header = ({ cartItemsCount }) => {
  const [toggle, setToggle]=useState(false);
  return (
   
    <header className="header">
      <TopHeader setToggle={setToggle}/>
      <MiddleHeader cartItemsCount={cartItemsCount}/>
      <Navbar setToggle={setToggle} toggle={toggle}/>


      
    </header>
  );
};

export default Header;