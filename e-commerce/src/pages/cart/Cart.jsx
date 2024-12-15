/* eslint-disable react/prop-types */
// import { FaRegTrashAlt } from "react-icons/fa";
// import { GoCheckCircleFill } from "react-icons/go";
// const cartItems = [
//   {
//     id: 11,
//     quantity: 2,
//     title: "Apple iPhone 13 New",
//     image: "/images/mobiles/m1.jpg",
//     price: 800,
//   },
//   {
//     id: 12,
//     quantity: 5,
//     title: "Samsung Galaxy M33 Smart Phone",
//     image: "/images/mobiles/m2.jpg",
//     price: 350,
//   },
// ];

// const Cart = () => {
//   return (
//     <div className="cart">
//       <h1 className="cart-title">Cart</h1>
//       <div className="cart-wrapper">
//         <div className="cart-items">
//           {cartItems.map((item) => (
//             <div className="cartItem" key={item.id}>
//               <div className="cart-item-img-wrapper">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="cart-item-img"
//                 />
//               </div>
//               <div className="cart-item-info">
//                 <div className="cart-item-title">{item.title}</div>
//                 <div className="cart-item-quantity">
//                   Quantity: <span>{item.quantity}</span>
//                 </div>
//                 <div className="cart-item-price">
//                   Price: <span>{item.price * item.quantity}</span>
//                 </div>
//                 <FaRegTrashAlt className="cart-delete-icon" />
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="cart-summary">
//           <div className="cart-summary-text">
//             <GoCheckCircleFill className="cart-check-icon"/> Free standard shipping on all orders over $50
//             before applicable taxes and fees, excluding purchase of digital gift
//             cards.
//           </div>
//           <div className="cart-summary-total">
//             Total:{" "}
//             <span>
//               $
//               {cartItems.reduce(
//                 (acc, cur) => acc + cur.price * cur.quantity,
//                 0
//               )}
//             </span>
//           </div>
//           <button className="cart-summary-btn">CheckOut</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



// import { useEffect, useState } from "react";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { GoCheckCircleFill } from "react-icons/go";

// const Cart = ({ removeFromCart }) => {
//   // State to store the cart items
//   const [cartItems, setCartItems] = useState([]);

//   // Function to fetch the cart items from the mock API
//   async function fetchCartItems() {
//     try {
//       const res = await fetch("http://localhost:5000/cart");
//       if (res.ok) {
//         const data = await res.json();
//         setCartItems(data);
//       } else {
//         console.error("Failed to fetch cart items");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   // Fetch cart items when the component mounts
//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   // Handle item removal from the cart and update the state
//   const handleRemove = async (id) => {
//     try {
//       await removeFromCart(id);
//       setCartItems(cartItems.filter((item) => item.id !== id));
//     } catch (error) {
//       console.error("Error removing item:", error);
//     }
//   };

//   return (
//     <div className="cart">
//       <h1 className="cart-title">Cart</h1>
//       <div className="cart-wrapper">
//         <div className="cart-items">
//           {cartItems.map((item) => (
//             <div className="cartItem" key={item.id}>
//               <div className="cart-item-img-wrapper">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="cart-item-img"
//                 />
//               </div>
//               <div className="cart-item-info">
//                 <div className="cart-item-title">{item.title}</div>
//                 <div className="cart-item-quantity">
//                   Quantity: <span>{item.quantity}</span>
//                 </div>
//                 <div className="cart-item-price">
//                   Price: <span>${item.price * item.quantity}</span>
//                 </div>
//                 <FaRegTrashAlt
//                   className="cart-delete-icon"
//                   onClick={() => handleRemove(item.id)}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="cart-summary">
//           <div className="cart-summary-text">
//             <GoCheckCircleFill className="cart-check-icon" /> Free standard
//             shipping on all orders over $50 before applicable taxes and fees,
//             excluding purchase of digital gift cards.
//           </div>
//           <div className="cart-summary-total">
//             Total:{" "}
//             <span>
//               $
//               {cartItems.reduce(
//                 (acc, cur) => acc + cur.price * cur.quantity,
//                 0
//               )}
//             </span>
//           </div>
//           <button className="cart-summary-btn">CheckOut</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import { FaRegTrashAlt } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  // Calculate subtotal
  const subtotal = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  
  // Define tax rate as 15%
  const taxRate = 0.15;
  const tax = subtotal * taxRate;

  // Calculate shipping cost (free if subtotal > 50)
  const shipping = subtotal > 50 ? 0 : 10; // Assuming $10 for shipping if below $50

  // Calculate total
  const total = subtotal + tax + shipping;

  return (
    <div className="cart">
      <h1 className="cart-title">Cart</h1>
      <div className="cart-wrapper">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your Cart is Empty</h2>
            <p>Add some products to see them here.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cartItem" key={item.id}>
                  <div className="cart-item-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-item-img"
                    />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.title}</div>
                    <div className="cart-item-quantity">
                      Quantity: <span>{item.quantity}</span>
                    </div>
                    <div className="cart-item-price">
                      Price: <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <button
                     
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaRegTrashAlt  className="cart-delete-icon"/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h2 className="cart-summary-title">Order summary</h2>
              <div className="cart-summary-details">
                <div className="cart-summary-item">
                  <span className="summary-label">Subtotal</span>
                  <span className="summary-value">${subtotal.toFixed(2)}</span>
                </div>
                <div className="cart-summary-item">
                  <span className="summary-label">Shipping</span>
                  <span className="summary-value">${shipping.toFixed(2)}</span>
                </div>
                <div className="cart-summary-item">
                  <span className="summary-label">Taxes</span>
                  <span className="summary-value">${tax.toFixed(2)}</span>
                </div>
                <div className="cart-summary-text">
                  <GoCheckCircleFill className="cart-check-icon" />
                  Free standard shipping on all orders over $50 before applicable
                  taxes and fees, excluding purchase of digital gift cards.
                </div>
                <div className="cart-summary-item total">
                  <span className="summary-label">Estimated Total</span>
                  <span className="summary-value">${total.toFixed(2)}</span>
                </div>

              </div>
              <Link to="/check-out" className="cart-summary-btn">
                Proceed to Checkout
              </Link>

            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;