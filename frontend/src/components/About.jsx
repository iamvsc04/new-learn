import React from 'react';
import '../App.css'; // Import custom CSS for additional styling
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import Bootstrap components

function About() {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'Co-Founder & CEO',
      bio:
        'John is an experienced entrepreneur with a background in business management and strategic planning. He co-founded our company with a vision to revolutionize the industry.',
      imageUrl: 'https://example.com/john-doe.jpg', // Replace with actual image URL
    },
    {
      name: 'Jane Smith',
      position: 'Chief Technology Officer',
      bio:
        'Jane is a seasoned technologist with over 15 years of experience in software development and IT management. She leads our technical team and drives innovation.',
      imageUrl: 'https://example.com/jane-smith.jpg', // Replace with actual image URL
    },
    {
      name: 'Michael Brown',
      position: 'Chief Marketing Officer',
      bio:
        'Michael brings a wealth of marketing expertise to our team. With a background in digital marketing and brand strategy, he oversees our marketing initiatives and client relations.',
      imageUrl: 'https://example.com/michael-brown.jpg', // Replace with actual image URL
    },
  ];

  return (
    <div className="about">
      <Container>
        <div className="about-header text-center">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius
            mauris sit amet quam interdum, vel consequat mi tincidunt.
          </p>
        </div>

        <Row className="team-members">
          {teamMembers.map((member, index) => (
            <Col key={index} xs={12} md={4} className="mb-4">
              <Card className="h-100 shadow">
                <Card.Img variant="top" src={member.imageUrl} alt={member.name} />
                <Card.Body>
                  <Card.Title className="text-center">{member.name}</Card.Title>
                  <Card.Subtitle className="text-center mb-3">{member.position}</Card.Subtitle>
                  <Card.Text>{member.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default About;
