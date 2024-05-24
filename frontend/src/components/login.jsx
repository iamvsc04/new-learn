import { Link } from "react-router-dom";
// import axios from "axios";
import React /*, { useState }*/ from "react";
function Login() {
  return (
    <form className="login space">
      <div className="log-box">
        <h1 className="regHead">Login Page</h1>
        <div className="inpLog-box">
          <input
            type="text"
            placeholder="Enter user name"
            className="reg uname"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="reg upass"
          />
        </div>
        <button type="submit" className="regRegisterBtn">
          Login
        </button>
        <p className="Log-bridge">
          Don't have an account?
          <Link to="/register" className="loginPara">
            Register here!!!
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Login;
