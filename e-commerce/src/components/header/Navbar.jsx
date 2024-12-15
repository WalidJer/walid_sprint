// /* eslint-disable react/prop-types */

// import { IoMdClose } from "react-icons/io";
// import{Link} from "react-router-dom"
// const Navbar = ({toggle,setToggle}) => {
//   return (
//     <nav style={{left:toggle && "0"}} className="navbar">
//         <div  className="navbar-close-icon">
//         <IoMdClose onClick={()=>setToggle(false)} className="close-icon"/>

//         </div>

//         <ul className="navbar-links">
//           <Link to="/" onClick={()=>setToggle(false)} className="navbar-link">Home</Link>
//           <Link to="/products" onClick={()=>setToggle(false)}  className="navbar-link">Electronics and Mobiles</Link>
//           <li onClick={()=>setToggle(false)}  className="navbar-link">Household & kitchen</li>
//           <li onClick={()=>setToggle(false)}  className="navbar-link">Men</li>
//           <li onClick={()=>setToggle(false)}  className="navbar-link">Women</li>
//         </ul>
//       </nav>
//   )
// }

// export default Navbar


/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav style={{ left: toggle && "0" }} className="navbar">
      <div className="navbar-close-icon">
        <IoMdClose onClick={() => setToggle(false)} className="close-icon" />
      </div>

      <ul className="navbar-links">
        <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
          Home
        </Link>
        <Link
          to="/products"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Electronics and Mobiles
        </Link>
        <li onClick={() => setToggle(false)} className="navbar-link">
          Household & Kitchen
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          Men
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          Women
        </li>
      </ul>

      {/* Right side of the navbar */}
      <div className="navbar-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;