import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import CSS for styling

function Login() {
  // State for storing user inputa
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-header">Welcome Back!</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Enter password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="login-register-link">
          Don't have an account?{" "}
          <Link to="/register" className="register-link">
            Register here!
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
