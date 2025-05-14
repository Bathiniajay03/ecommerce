import { useState } from "react";
import "./Payment.css";  // Import the custom styles

export default function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    alert("Payment Successful!");
  };

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h2>Payment Details</h2>
        <div>
          <label>Card Number</label>
          <input 
            type="text"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <div style={{ width: "50%" }}>
            <label>Expiry Date</label>
            <input 
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </div>
          <div style={{ width: "50%" }}>
            <label>CVV</label>
            <input 
              type="password"
              placeholder="***"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
}

