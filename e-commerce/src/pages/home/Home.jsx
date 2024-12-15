/* eslint-disable react/prop-types */
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import Slider from "../../components/slider/Slider";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import Brands from "../../components/brands/Brands";
import { useEffect, useState } from "react";
// import { products } from "../../data/products";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  async function fetchProducts() {
    try {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  const laptops = products.filter((p) => p.isLaptop === true);
  const mobiles = products.filter((p) => p.isLaptop === false);
  return (
    <>
      <Banner />
      <Category />
      <SpecialOffers addToCart={addToCart}/>
      <HeadingTitle title="New Laptops Arrivals" />
      <Slider data={laptops} />
      <HeadingTitle title="New Mobiles Arrivals" />
      <Slider data={mobiles} addToCart={addToCart}/>
      <HeadingTitle title="Featured Brands" />
      <Brands />
    </>
  );
};

export default Home;
