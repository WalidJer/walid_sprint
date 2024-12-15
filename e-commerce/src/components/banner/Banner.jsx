import { useState, useEffect } from "react";

const Banner = () => {
  const banners = [
    {
      title: "LIFESTYLE COLLECTION",
      heading: "MEN",
      description: "SALE UP TO 30% OFF",
      subtext: "Get Free Shipping on orders over $99.00",
      img: "images/banners/banner1.jpg",
    },
    {
      title: "FALL COLLECTION",
      heading: "WOMEN",
      description: "SALE UP TO 50% OFF",
      subtext: "Exclusive offers for a limited time!",
      img: "images/banners/banner4.jpg",
    },
    {
      title: "KIDS' WONDERLAND",
      heading: "Kids",
      description: "SALE UP TO 20% OFF",
      subtext: "Gear up your kids for their next big adventure!",
      img: "images/banners/banner5.jpg",
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleDotClick = (index) => {
    setCurrentBanner(index);
  };

  const banner = banners[currentBanner];


  return (
    <div className="banner-container">
      <div className="main-banner">
        <div className="main-banner-content">
          <h4>{banner.title}</h4>
          <h1>{banner.heading}</h1>
          <p className="sale-text">
            SALE UP TO <span>{banner.description}</span>
          </p>
          <p>{banner.subtext}</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <img
          src={banner.img}
          alt={`${banner.heading} Banner`}
          className="main-banner-img"
        />
      </div>
      <div className="banner-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentBanner === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      
        <div className="side-banners">
          <div className="side-banner">
            <div className="side-banner-content">
              <h5>NEW ARRIVALS</h5>
              <h2>SUMMER SALE 20% OFF</h2>
              <button className="shop-now-link">Shop Now →</button>
            </div>
            <img src="images/banners/banner2.jpg" alt="Side Banner 1" className="side-banner-img" />
          </div>
          <div className="side-banner">
            <div className="side-banner-content">
              <h5>GAMING 4K</h5>
              <h2>DESKTOPS & LAPTOPS</h2>
              <button className="shop-now-link">Shop Now →</button>
            </div>
            <img src="images/banners/banner3.jpg" alt="Side Banner 2" className="side-banner-img" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;