import React from "react";
import { booksData } from "../data/books";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useCart } from "../context/CartContext";

const BookSingle = () => {
  const { id } = useParams();

  const { addToCart, cartItems } = useCart();

  const product = booksData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.author}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.title}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default BookSingle;
