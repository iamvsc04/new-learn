import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { FaBook, FaClock, FaLevelUpAlt, FaDollarSign, FaHeart } from 'react-icons/fa';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        console.log("Fetching course with ID:", courseId);
        const response = await axios.get(
          `http://localhost:9000/api/courses/${courseId}`
        );
        console.log("Fetched course data:", response.data);
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (!course) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h1 className="display-4 course-title">{course.title}</h1>
          <p className="lead course-info"><FaBook />&nbsp; Content Category: {course.category}</p>
          <p className="lead course-info"><FaClock />&nbsp; Course Duration: {course.duration} hours</p>
          <p className="lead course-info"><FaLevelUpAlt />&nbsp; Difficulty level: {course.level}</p>
          <p className="lead course-info"><FaDollarSign />&nbsp; Cost of Course: ${course.price}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning btn-lg enroll-button">Enroll Now</button>
            <button className="btn btn-warning btn-lg enroll-button"><FaHeart /></button>
          </div>
        </div>
        <div className="col-md-4">
          <img src={course.image} className="img-fluid rounded course-image" alt={course.title} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <div className="card course-description">
            <div className="card-body">
              <h5 className="card-title">Course Description</h5>
              <p className="card-text">{course.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
