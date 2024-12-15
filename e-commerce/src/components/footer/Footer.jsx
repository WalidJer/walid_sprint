import { MdOutlineEmail } from "react-icons/md";
import { FaRegCopyright, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";



const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-top">
          <h3 className="footer-top-title">We are always here to help you</h3>
          <div className="footer-top-email">
            <span className="footer-top-email-text">Contact us via email</span>
            <span className="footer-top-email-address"><MdOutlineEmail className="Envelope-email" />store@gmail.com</span>
          </div>

          <div className="footer-social-media">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon">
          <FaYoutube />
        </a>
      </div>
          
          
          
        </div>
        <div className="footer-items-wrapper">
           <div className="footer-item">
              <h4 className="footer-item-title">Electronics</h4>
              <ul className="footer-item-links">
                  <li className="footer-item-link">Cameras and Video Recorders</li>
                  <li className="footer-item-link">Home Appliances</li>
                  <li className="footer-item-link">Phones</li>
                  <li className="footer-item-link">Headphones</li>
                  <li className="footer-item-link">Televisions</li>
                  <li className="footer-item-link">Tablets</li>
              </ul>
           </div>
           <div className="footer-item">
              <h4 className="footer-item-title">Fashion</h4>
              <ul className="footer-item-links">
                  <li className="footer-item-link">Men&apos;s Fashion</li>
                  <li className="footer-item-link">Women&apos;s Fashion</li>
                  <li className="footer-item-link">Kids&apos; Fashion</li>
                  <li className="footer-item-link">Glasses</li>
                  <li className="footer-item-link">Jewelry</li>
                  <li className="footer-item-link">Watches</li>
              </ul>
           </div>
           <div className="footer-item">
              <h4 className="footer-item-title">Kitchen & Home Appliances</h4>
              <ul className="footer-item-links">
                  <li className="footer-item-link">Home Decorations</li>
                  <li className="footer-item-link">Furniture</li>
                  <li className="footer-item-link">Kitchen and Dining Tools</li>
                  <li className="footer-item-link">Bathroom Essentials</li>
                  <li className="footer-item-link">Audio and Video Equipment</li>
                  <li className="footer-item-link">Garden Supplies</li>
              </ul>
           </div>
           <div className="footer-item">
              <h4 className="footer-item-title">Beauty</h4>
              <ul className="footer-item-links">
                  <li className="footer-item-link">Perfumes</li>
                  <li className="footer-item-link">Makeup</li>
                  <li className="footer-item-link">Hair Care</li>
                  <li className="footer-item-link">Skin Care</li>
                  <li className="footer-item-link">Body and Bath</li>
                  <li className="footer-item-link">Health Care Products</li>
              </ul>
           </div>
        </div>
        
        <div className="footer-bottom">
          <FaRegCopyright className="copy-rights"/> 2024
          All rights reserved
        </div>

      </footer>
    );
  };
  
  export default Footer;