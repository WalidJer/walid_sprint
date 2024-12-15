// // -----------------Walid jerjawi------------------
// // ===============Final Sprint-Semester2=============
// // ===============Front End Development===============
// // ---------------Dec 02, 2024- Dec 15, 2024--------------
// import Header from "./components/header/Header"
// import Footer from "./components/footer/Footer";
// import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
// import Home from "./pages/home/Home";
// import Cart from "./pages/cart/Cart";
// import Products from "./pages/products/Products";
// import SingleProduct from "./pages/single-product/SingleProduct";
// import SpecialOfferPage from "./pages/special-offer-page/SpecialOfferPage";
// import { useState } from "react";





// function App() {
//   const [cart, setCart] = useState([]);

//   // Function to add an item to the cart
//   const addToCart = async (product) => {
//     try {
//       const res = await fetch("http://localhost:5000/cart", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(product),
//       });
//       if (res.ok) {
//         setCart((prevCart) => [...prevCart, product]);
//       }
//     } catch (error) {
//       console.log("Error adding to cart:", error);
//     }
//   };

//   // Function to remove an item from the cart
//   const removeFromCart = async (id) => {
//     try {
//       await fetch(`http://localhost:5000/cart/${id}`, {
//         method: "DELETE",
//       });
//       setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//     } catch (error) {
//       console.log("Error removing from cart:", error);
//     }
//   };



//   return (
//     <Router>
//      <Header cartItemsCount={cart.reduce((total, item) => total + item.quantity, 0)}/>
//      <Routes>
//       <Route path="/" element={<Home addToCart={addToCart}/>}/>
//       <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart}/>}/>
//       <Route path="/products" element={<Products />}/>
//       <Route path="/products/:id" element={<SingleProduct addToCart={addToCart} />}/>
//       <Route path="/special-offer/:id" element={<SpecialOfferPage addToCart={addToCart}/>}/>
//      </Routes>

//      <Footer />
     
//     </Router>
//   )
// }

// export default App


import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/single-product/SingleProduct";
import SpecialOfferPage from "./pages/special-offer-page/SpecialOfferPage";
import { useState, useEffect } from "react";
import CheckOut from "./pages/check-out/CheckOut";


function App() {
  const [cart, setCart] = useState([]);

  // Fetch cart items when the app loads
  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await fetch("http://localhost:5000/cart");
        const data = await res.json();
        setCart(data);
      } catch (error) {
        console.log("Error fetching cart:", error);
      }
    }
    fetchCart();
  }, []);

  // Function to add an item to the cart
  const addToCart = async (product, quantity) => {
    const productToAdd = {
      ...product,
      quantity,
    };
    try {
      const res = await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productToAdd),
      });
      if (res.ok) {
        setCart((prevCart) => {
          const existingProductIndex = prevCart.findIndex(
            (item) => item.id === productToAdd.id
          );

          if (existingProductIndex !== -1) {
            // Update the quantity if the product already exists
            const updatedCart = [...prevCart];
            updatedCart[existingProductIndex].quantity += quantity;
            return updatedCart;
          } else {
            return [...prevCart, productToAdd];
          }
        });
      }
    } catch (error) {
      console.log("Error adding to cart:", error);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = async (id) => {
    try {
      await fetch(`http://localhost:5000/cart/${id}`, {
        method: "DELETE",
      });
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Error removing from cart:", error);
    }
  };

  return (
    <Router>
      {/* Pass cart count to Header */}
      <Header cartItemsCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct addToCart={addToCart} />} />
        <Route path="/special-offer/:id" element={<SpecialOfferPage addToCart={addToCart} />} />
        <Route path="/check-out" element={<CheckOut cart={cart} />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;