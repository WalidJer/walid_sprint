/* eslint-disable react/prop-types */
// import { useParams } from "react-router-dom"
// // import { products } from "../../data/products";
// import Rating from "../../components/rating/Rating";
// import { useEffect,useState } from "react";

// const SingleProduct = ({ addToCart }) => {
//   const {id}=useParams();
  
//   // const product=products.find(p=>p.id===parseInt(id))
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   async function getProductById(productId) {
//     try {
//       const res = await fetch(`http://localhost:5000/products/${productId}`);
//       const data = await res.json();
//       setProduct(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   useEffect(() => {
//     getProductById(id);
//   }, [id]);

//   const handleAddToCart = () => {
//     if (product) {
//       addToCart({ ...product, quantity });
//     }
//   };

//   return (
//     <div className="single-product">
//       <div className="product-wrapper">
//         <div className="product-image-wrapper">
//           <img src={product && product.image} alt="" />
//         </div>
//         <div className="product-info">
//           <h1 className="product-title">{product && product.title}</h1>
//           <Rating rating={product && product.rating} reviews={product && product.reviews}/>
//           <div className="product-price">${product && product.price}</div>
//           <div className="product-add-cart">

//             <div>Quantity</div>
//             <input 
//             type="number" 
//             min="1" 
//             max="10" 
//             value={quantity}
//               onChange={(e) => setQuantity(Number(e.target.value))}
//              />
//             <button className="add-to-cart-btn" onClick={handleAddToCart}>Add To Cart</button>
//           </div>
          
//         </div>
//       </div>
//       <p className="product-description">
//         <strong className="product-descriptio-title">About the product</strong>{" "}
       
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, harum
//         laudantium explicabo voluptatibus, itaque neque ad id ipsam eveniet at
//         ab distinctio perspiciatis animi repellat necessitatibus! Suscipit nisi
//         pariatur itaque.
//       </p>
//     </div>
//   )
// }

// export default SingleProduct


import { useParams,Link } from "react-router-dom";
import Rating from "../../components/rating/Rating";
import { useEffect, useState } from "react";


const SingleProduct = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  async function getProductById(productId) {
    try {
      const res = await fetch(`http://localhost:5000/products/${productId}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductById(id);
    window.scrollTo(0,0)
  }, [id]);

  return (
    <div className="single-product">

      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img src={product && product.image} alt="" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product && product.title}</h1>
          <Rating rating={product && product.rating} reviews={product && product.reviews} />
          <div className="product-price">${product && product.price}</div>
          <div className="product-add-cart">
          <label htmlFor="quantity" className="quantity-lable">Quantity</label>
            <input
            id="quantity"
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              
            />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product, quantity)}
            >
              Add To Cart
            </button>
 
          </div>
          <Link to="/products" className="back-to-home-link">
        &larr; Back To Products
      </Link>
        </div>
      </div>
     
      {product && (
        <>
          <div className="product-description">
            <strong className="product-description-title">About the product</strong>
            <p>{product.description}</p>
          </div>

          
          {product.specifications && product.specifications.length > 0 && (
            <div className="product-description">
              <strong className="product-description-title">Specifications</strong>
              <ul>
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SingleProduct;