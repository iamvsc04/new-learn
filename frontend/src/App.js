import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/About.jsx";
import Login from "./components/login.jsx";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";
import Courses from "./components/Courses.jsx";
import CourseDetail from "./components/CourseDetail.jsx"; // Import CourseDetail

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
