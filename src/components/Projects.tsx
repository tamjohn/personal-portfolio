import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projectImage from '../assets/img/projectIcon.png'; 

type projectCardType = {
  title: string;
  date: string;
  description: string;
  techStack: string[];
  repoLink: string;
};

export const Projects: React.FC = () => {
  const projectCards: projectCardType[] = [
    {
        title: "Hearo",
        date: "Feb 2022",
        description: "Selected as a top 5 Finalist at SFU StormHacks (~400 participants) and winning an award for best use of API, Hearo solves the issues that arise from hearing aid failures by transcribing live speech into text on their screen.",
        techStack: ["JavaScript, React", "Node", "Axios"],
        repoLink: "https://github.com/tamjohn/Hearo"
    }, 
    {
        title: "Event Scheduler",
        date: "Jul - Sep 2023",
        description: "The Multi-Court Booking System is a web application that will allow residents to create their own accounts, view all bookings for the multi-court facility, make a booking on available dates on a shared calendar, and update their bookings.",
        techStack: ["React", "Node", "Express", "PostgreSQL"],
        repoLink: "https://github.com/tamjohn/event-scheduler"
    }, 
    {
        title: "CRUD API",
        date: "August 2022",
        description: "This REST API allows users to perform CRUD operations on a to-do list. There is login endpoint with authentication logic involved using jwt. All users can create a to-do item but only the author of a to-do item can update or delete that to-do item.",
        techStack: ["Node", "Express", "MongoDB", "GraphQL"],
        repoLink: "https://github.com/tamjohn/CRUD_API"
    }, 
    {
        title: "GPA Calculator",
        date: "Jan - April 2022",
        description: "This web application will allow users to convert the grades they earned in a percentage-based course and convert it to either a 4.0 or 4.33 GPA scale to submit to other post-secondary schools, employers, or list on their resume",
        techStack: ["Java", "JUnit5", "JSwing"],
        repoLink: "https://github.com/tamjohn/GPACalculator"
    }, 
  ];

  return (
    <section className="workExpPage" id='projects'>
      <Container className='workExpCardsContainer'>
        <Row>
            <Col className="workExpHeader">
            <h2><strong>Projects</strong></h2>
            </Col>
        </Row>
        <Row>
          <Col className="githubLink">
            <a href="https://github.com/tamjohn" target="_blank" rel="noopener noreferrer" className="viewGithubButton">
              View My GitHub
            </a>
          </Col>
        </Row>
        <Row>
          {projectCards.map((project, index) => (
            <Col xs={12} sm={6} md={3} lg={3} key={index}>
              <Card className="h-100 projectCard">
                <div className='imageContainer'>
                  <Card.Img variant="top" src={projectImage} className='workCardImg' />
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>
                    <small>{project.date}</small>
                  </Card.Text>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                  <Card.Text className='techStack'>
                    {project.techStack.join(', ')}
                  </Card.Text>
                  <Link to={project.repoLink} target="_blank" className="viewRepoButton">
                    View Repo
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
