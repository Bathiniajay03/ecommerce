import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "./stores/context/CartContext";
import './App.css'
const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <div className="navbar-section">
    <div className="navSection">
      <Link to="/" className="custom-link">
        <div className="title">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_joinplus-3a4cec.svg" className="logo-img" />
        </div>
      </Link>
  
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>

        {/* Fixed Sign In/Sign Up Link */}
        <div className="user">
          <Link to="/login" className="custom-link">
            <div className="user-detail">Sign In/Sign Up</div>
          </Link>
        </div>

        <Link to="/cart">
          <div className="cart">
            <a href="#" className="btn btn-info btn-lg">
              <span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart
            </a>
            <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>

      <div className="subMenu">
        <ul>
          <Link to="/mobiles" className="custom-link"><li>Mobiles</li></Link>
          <Link to="/computers" className="custom-link"><li>Computers</li></Link>
          <Link to="/watch" className="custom-link"><li>Watches</li></Link>
          <Link to="/men" className="custom-link"><li>Mens Wear</li></Link>
          <Link to="/woman" className="custom-link"><li>Woman Wear</li></Link>
          <Link to="/furniture" className="custom-link"><li>Furniture</li></Link>
          <Link to="/kitchen" className="custom-link"><li>Kitchen</li></Link>
          <Link to="/fridge" className="custom-link"><li>Fridge</li></Link>
          <Link to="/tv" className="custom-link"><li>TV's</li></Link>
          <Link to="/ac" className="custom-link"><li>AC</li></Link>
          <Link to="/speakers" className="custom-link"><li>Speakers</li></Link>
          <Link to="/login" className="custom-link"><li>Food</li></Link>
          <Link to="/payment" className="custom-link"><li>Payment</li></Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
