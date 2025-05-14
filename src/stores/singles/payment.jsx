import { useState } from "react";

export default function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    alert("Payment Successful!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Payment Details</h2>
        <div className="text-left mb-4">
          <label className="block text-gray-600 mb-1">Card Number</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-lg" 
            placeholder="1234 5678 9012 3456" 
            value={cardNumber} 
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-600 mb-1">Expiry Date</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              placeholder="MM/YY" 
              value={expiry} 
              onChange={(e) => setExpiry(e.target.value)}
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 mb-1">CVV</label>
            <input 
              type="password" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              placeholder="***" 
              value={cvv} 
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>
        <button 
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
