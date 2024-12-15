/* eslint-disable react/prop-types */

import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const CheckOut = ({ cart }) => {
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    phoneNumber: "",
  });

  if (!cart || cart.length === 0) {
    return (
      <div className="empty-checkout">
        <h2>Your cart is empty!</h2>
        <p>Please add some items before proceeding to checkout.</p>
        <Link to="/products" className="go-back-link">
          Go back to products
        </Link>
      </div>
    );
  }

  const subtotal = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const tax = subtotal * 0.15;
  const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + tax + shipping;

  const handleContinueToPayment = (e) => {
    e.preventDefault();
    setIsPaymentVisible(true);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-wrapper">
        <h1 className="check-head">Checkout</h1>
        <div className="checkout-content">
          
          <div className="checkout-shipping-form">
            <h3>1. Shipping Address</h3>
            <form>
              <div className="form-row">
                <label>First Name</label>
                <input
                  type="text"
                  value={shippingDetails.firstName}
                  placeholder="Enter First Name..."
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      firstName: e.target.value,
                    })
                  }
                  required
                  
                />
              </div>
              <div className="form-row">
                <label>Last Name</label>
                <input
                  type="text"
                  value={shippingDetails.lastName}
                  placeholder="Enter Last Name..."
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      lastName: e.target.value,
                    })
                  }
                  required
                  
                />
              </div>
              <div className="form-row">
                <label>Address Line 1</label>
                <input
                  type="text"
                  value={shippingDetails.address1}
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      address1: e.target.value,
                    })
                  }
                  required
                  placeholder="Enter Your Address..."
                />
              </div>
              <div className="form-row">
                <label>Address Line 2 (optional)</label>
                <input
                  type="text"
                  value={shippingDetails.address2}
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      address2: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-row">
                <label>City</label>
                <input
                  type="text"
                  value={shippingDetails.city}
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      city: e.target.value,
                    })
                  }
                  required
                  placeholder="Enter Your City..."
                />
              </div>
              <div className="form-row">
                <label>Province</label>
                <input
                  type="text"
                  value={shippingDetails.province}
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      province: e.target.value,
                    })
                  }
                  required
                  placeholder="Enter Your Province..."
                />
              </div>
              <div className="form-row">
                <label>Postal Code</label>
                <input
                  type="text"
                  value={shippingDetails.postalCode}
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      postalCode: e.target.value,
                    })
                  }
                  required
                  placeholder="Enter Your Postal Code..."
                />
              </div>
              <div className="form-row">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={shippingDetails.phoneNumber}
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      phoneNumber: e.target.value,
                    })
                  }
                  required
                  placeholder="Enter Your Phone Number..."
                />
              </div>
              <button
                className="checkout-btn"
                onClick={handleContinueToPayment}
              >
                Continue to Payment
              </button>
            </form>
          </div>

          
          <div className="checkout-summary">
            <h3>Order Summary</h3>
            <div className="summary-items">
              {cart.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item-details">
                    <p style={{color:"blue"}}>{item.title}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="summary-calculations">
              <div className="subtotal">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="shipping">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="taxes">
                <span>Taxes (15%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="total">
                <strong>Total:</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </div>
          </div>
        </div>

       
        {isPaymentVisible && (
          <div className="checkout-payment-form">
            <h3>2. Credit Card Details</h3>
            <form>
              <div className="form-row card-number-row">
                <label>Card Number</label>
                <div className="card-input-with-logos">
                  <input type="text" placeholder="Card Number" required />
                  <div className="card-logos">
                    <FaCcVisa className="card-logo" />
                    <FaCcMastercard className="card-logo" />
                    <FaCcAmex className="card-logo" />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <label>Expiry</label>
                <input type="text" placeholder="MM/YY" required />
              </div>
              <div className="form-row">
                <label>Security Code</label>
                <input type="text" placeholder="Security Code" required />
              </div>
              <div className="form-row">
                <label>Cardholder Name</label>
                <input type="text" placeholder="Cardholder Name" required />
              </div>
              <button className="checkout-btn">Review Order</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
