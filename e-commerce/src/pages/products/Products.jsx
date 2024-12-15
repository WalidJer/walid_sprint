

// import { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
// import Rating from "../../components/rating/Rating";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [filter, setFilter] = useState("all"); 
//   const [sort, setSort] = useState("none"); // 

  
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const res = await fetch("http://localhost:5000/products");
//         const data = await res.json();
//         setProducts(data);
//         setFilteredProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

  
//   useEffect(() => {
//     let updatedProducts = [...products];

   
//     if (filter === "laptops") {
//       updatedProducts = updatedProducts.filter((p) => p.isLaptop);
//     } else if (filter === "mobiles") {
//       updatedProducts = updatedProducts.filter((p) => !p.isLaptop);
//     }

   
//     if (sort === "low-to-high") {
//       updatedProducts.sort((a, b) => a.price - b.price);
//     } else if (sort === "high-to-low") {
//       updatedProducts.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(updatedProducts);
//   }, [filter, sort, products]);

//   return (
//     <div className="products-page">
      
//       <Sidebar filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />

      
//       <main className="products-grid">
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="product-card">
//             <div className="product-card-img-wrapper">
//               <img src={product.image} alt={product.title} />
//             </div>
//             <div className="product-card-info">
//               <h4>{product.title}</h4>
//               <Rating rating={product.rating} reviews={product.reviews} />
//               <div className="product-card-price">${product.price.toFixed(2)}</div>
//             </div>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default Products;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import Sidebar from "./Sidebar";
import Rating from "../../components/rating/Rating";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("all"); 
  const [sort, setSort] = useState("none"); 

  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  
  useEffect(() => {
    let updatedProducts = [...products];

    
    if (filter === "laptops") {
      updatedProducts = updatedProducts.filter((p) => p.isLaptop);
    } else if (filter === "mobiles") {
      updatedProducts = updatedProducts.filter((p) => !p.isLaptop);
    }

   
    if (sort === "low-to-high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "high-to-low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [filter, sort, products]);

  return (
    <div className="products-page">
      
      <Sidebar filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />

      
      <main className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-card-img-wrapper">
              
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
            </div>
            <div className="product-card-info">
              
              <Link to={`/products/${product.id}`} className="product-title-link">
                {product.title}
              </Link>
              <Rating rating={product.rating} reviews={product.reviews} />
              <div className="product-card-price">${product.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Products;