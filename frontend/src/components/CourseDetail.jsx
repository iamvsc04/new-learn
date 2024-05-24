import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <img src={course.image} alt={course.title} />
      <p>{course.description}</p>
      <p>Category: {course.category}</p>
      <p>Duration: {course.duration} hours</p>
      <p>Level: {course.level}</p>
      <p>Price: ${course.price}</p>
    </div>
  );
};

export default CourseDetail;
