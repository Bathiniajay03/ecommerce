import React from 'react';
import './App.css';

function Login() {
  const handleLoginRedirect = (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:12529/Login/login.html";
  };

  const handleSignupRedirect = (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:12529/Login/login.html";
  };

  return (
    <div className="form-container">
      <button className="login-button" onClick={handleLoginRedirect}>
        Login
      </button>
      <button className="signup-button" onClick={handleSignupRedirect}>
        Signup
      </button>
    </div>
  );
}

export default Login;
