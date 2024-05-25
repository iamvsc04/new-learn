import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";
import "../App.css";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9000/api/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true, // Ensure cookies are sent
        }
      );
      if (response.status === 200) {
        // Store token in local storage
        localStorage.setItem("token", response.data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        login();
        navigate("/home");
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-header">Welcome Back!</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
