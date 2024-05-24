import Login from "./components/login.js";
import Home from "./components/home.js";
import About from "./components/About.js";
import Register from "./components/Register.js";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
          <p>
            <Link to="/Home" className="para">
              Home
            </Link>
          </p>
          <p>
            <Link to="/Register" className="para">
              Register/Login
            </Link>
          </p>
          <p>
            <Link to="/about" className="para">
              About Us
            </Link>
          </p>
        </div>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
