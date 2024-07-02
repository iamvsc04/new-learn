import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { FaBook, FaClock, FaLevelUpAlt, FaDollarSign, FaHeart } from 'react-icons/fa';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/courses/${courseId}`);
        setCourse(response.data);
        checkEnrollment(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchCourse();
  }, [courseId]);

  const checkEnrollment = async (courseData) => {
    try {
      const response = await axios.get(`http://localhost:9000/api/profile/enrolledCourses`, {
        withCredentials: true
      });

      const enrolledCourses = response.data.enrolledCourses.map(course => course._id);
      if (enrolledCourses.includes(courseData._id)) {
        setIsEnrolled(true);
      }
    } catch (error) {
      console.error("Error checking enrollment:", error);
    }
  };

  const handleEnroll = async () => {
    try {
      const response = await axios.post(`http://localhost:9000/api/enrollments/${courseId}`, {}, {
        withCredentials: true
      });

      if (response.status === 200) {
        setIsEnrolled(true);
        setMessage("Course successfully enrolled!");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate('/login');
      } else {
        setMessage("Failed to enroll in course. Please try again.");
      }
    }
  };

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
            {isEnrolled ? (
              <div className="alert alert-success" role="alert">
                Already Enrolled
              </div>
            ) : (
              <button
                className="btn btn-warning btn-lg enroll-button"
                onClick={handleEnroll}
                disabled={isEnrolled}
              >
                {isEnrolled ? "Enrolled" : "Enroll Now"}
              </button>
            )}
            <button className="btn btn-warning btn-lg enroll-button"><FaHeart /></button>
          </div>
          {message && <div className="alert alert-info mt-3">{message}</div>}
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
