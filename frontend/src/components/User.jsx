// User.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { Card, Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

function User() {
  const { logout } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/profile', {
          withCredentials: true,
        });
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        logout(); // Log out the user if there's an error
      }
    };

    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/profile/enrolled', {
          withCredentials: true,
        });
        setEnrolledCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      }
    };

    fetchUser();
    fetchEnrolledCourses();
  }, [logout]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <p className="text-center">Loading...</p>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <p className="text-center">No user data available.</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow border-0 rounded-3">
            <Card.Body className="d-flex flex-column">
            <h2 className="text-center mb-4">User Profile</h2>
              <div className="mb-3">
                <strong>Name:</strong> {user.username}
              </div>
              <div className="mb-3">
                <strong>Email:</strong> {user.email}
              </div>
              {enrolledCourses && enrolledCourses.length > 0 ? (
                <>
                  <h3 className="mb-3">Enrolled Courses</h3>
                  {enrolledCourses.map(course => (
                    <div key={course._id} className="mb-3">
                      <p className="mb-1"><strong>Title:</strong> {course.title}</p>
                      <p className="mb-1"><strong>Description:</strong> {course.description}</p>
                      <hr className="my-1" />
                    </div>
                  ))}
                </>
              ) : (
                <p>No enrolled courses found.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default User;
