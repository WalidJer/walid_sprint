/* eslint-disable react/prop-types */


// import { useParams,Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Rating from "../../components/rating/Rating";

// const SpecialOfferPage = ({ addToCart }) => {
//   const { id } = useParams();
//   const [offer, setOffer] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   // Fetching a special offer by id
//   async function getOfferById(offerId) {
//     try {
//       const res = await fetch(`http://localhost:5000/specialOffers/${offerId}`);
//       if (!res.ok) {
//         throw new Error("Failed to fetch the special offer data");
//       }
//       const data = await res.json();
//       setOffer(data);
//     } catch (error) {
//       console.error("Error fetching special offer:", error);
//     }
//   }

//   useEffect(() => {
//     getOfferById(id);
//     window.scrollTo(0,0)
//   }, [id]);

//   const handleAddToCart = () => {
//     if (offer) {
//       // Create the productToAdd object with the same structure as SingleProduct
//       const productToAdd = {
//         id: offer.id,
//         title: offer.title,
//         price: offer.price - (offer.discount * offer.price) / 100, // Discounted price
//         image: offer.images[0], // Use the first image as the main image for the cart
//         quantity,
//       };
//       addToCart(productToAdd, quantity);
//     }
//   };

//   if (!offer) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       <div className="special-offers-page">
//         <div className="special-offers-page-img-wrapper">
//           <img
//             src={offer.images[0]} // Display the first image or implement an image slider
//             alt={offer.title}
//             className="special-offers-page-img"
//           />
//           <div className="special-offers-page-select-img">
//             {offer.images.map((source, index) => (
//               <img
//                 key={index}
//                 src={source}
//                 className="select-img"
//                 onClick={() => setOffer((prev) => ({ ...prev, selectedImage: source }))}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="special-offers-page-info">
//           <h3 className="special-offers-page-title">{offer.title}</h3>
//           <Rating rating={offer.rating} reviews={offer.reviews} />
//           <div className="special-offers-page-price">
//             <b className="special-offers-price-item">${offer.price.toFixed(2)}</b>
//             <b className="special-offers-final-price-item">
//               ${((offer.price - (offer.discount * offer.price) / 100)).toFixed(2)}
//             </b>
//           </div>
//           <div className="special-offers-page-add-to-cart">
//             <div>Quantity</div>
//             <input
//               type="number"
//               min="1"
//               max="10"
//               value={quantity}
//               onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
//             />
//             <button className="add-to-cart-btn" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//           </div>
//           <Link to="/" className="back-to-home-link">
//         &larr; Back to Home
//       </Link>
//         </div>
//       </div>
//        {/* Product Description from Server */}
//        <div className="product-description">
//         <strong className="product-description-title">About the product</strong>
//         <p>{offer.description}</p>
//       </div>

//       {/* Product Specifications from Server */}
//       {offer.specifications && offer.specifications.length > 0 && (
//         <div className="product-description">
//           <strong className="product-description--title">Specifications</strong>
//           <ul>
//             {offer.specifications.map((spec, index) => (
//               <li key={index}>{spec}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default SpecialOfferPage;

import { useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Rating from "../../components/rating/Rating";

const SpecialOfferPage = ({ addToCart }) => {
  const { id } = useParams();
  const [offer, setOffer] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  // Fetching a special offer by id
  async function getOfferById(offerId) {
    try {
      const res = await fetch(`http://localhost:5000/specialOffers/${offerId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch the special offer data");
      }
      const data = await res.json();
      setOffer(data);
      setSelectedImage(data.images[0]); // Set the first image as default
    } catch (error) {
      console.error("Error fetching special offer:", error);
    }
  }

  useEffect(() => {
    getOfferById(id);
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    if (offer) {
      // Create the productToAdd object with the same structure as SingleProduct
      const productToAdd = {
        id: offer.id,
        title: offer.title,
        price: offer.price - (offer.discount * offer.price) / 100, // Discounted price
        image: offer.images[0], // Use the first image as the main image for the cart
        quantity,
      };
      addToCart(productToAdd, quantity);
    }
  };

  if (!offer) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="special-offers-page">
        <div className="special-offers-page-img-wrapper">
          <img
            src={selectedImage} // Display the selected image
            alt={offer.title}
            className="special-offers-page-img"
          />
          <div className="special-offers-page-select-img">
            {offer.images.map((source, index) => (
              <img
                key={index}
                src={source}
                className={`select-img ${selectedImage === source ? "selected" : ""}`}
                onClick={() => setSelectedImage(source)} // Set clicked image as the main image
              />
            ))}
          </div>
        </div>
        <div className="special-offers-page-info">
          <h3 className="special-offers-page-title">{offer.title}</h3>
          <Rating rating={offer.rating} reviews={offer.reviews} />
          <div className="special-offers-page-price">
            
            <b className="special-offers-final-price-item">
              ${((offer.price - (offer.discount * offer.price) / 100)).toFixed(2)}
            </b>
            <b className="special-offers-price-item">${offer.price.toFixed(2)}</b>
          </div>
          <div className="special-offers-page-add-to-cart">
            <div>Quantity</div>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
          <Link to="/" className="back-to-home-link">
        &larr; Back to Home
      </Link>
        </div>
      </div>
      <p className="product-description">
        <strong className="product-description-title">About the product</strong> <br />
        {offer.description}
      </p>
      <div className="product-description">
        <strong className="product-description-title">Specifications</strong>
        <ul>
          {offer.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>
      <div>
       
      </div>
    </>
  );
};

export default SpecialOfferPage;