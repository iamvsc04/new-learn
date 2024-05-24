import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand mr-auto" to="/">Learn Hub.</Link> {/* Replace "Your Website Name" with your actual website name */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link> {/* Route to the Home page */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link> {/* Route to the Courses page */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link> {/* Route to the About Us page */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Register">Signup</Link> {/* Route to the Login page */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
