import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projectImage from '../assets/img/projectIcon.png'; 

type projectCardType = {
  title: string;
  date: string;
  description: string;
  repoLink: string;
};

export const Projects: React.FC = () => {
  const projectCards: projectCardType[] = [
    {
        title: "Hearo",
        date: "Feb 2022",
        description: "Top 5 Finalist at StormHacks SFU",
        repoLink: "https://github.com/tamjohn/Hearo"
    }, 
    {
        title: "Hearo",
        date: "Feb 2022",
        description: "Top 5 Finalist at StormHacks SFU",
        repoLink: "https://github.com/tamjohn/Hearo"
    }, 
    {
        title: "Hearo",
        date: "Feb 2022",
        description: "Top 5 Finalist at StormHacks SFU",
        repoLink: "https://github.com/tamjohn/Hearo"
    }, 
    {
        title: "Hearo",
        date: "Feb 2022",
        description: "Top 5 Finalist at StormHacks SFU",
        repoLink: "https://github.com/tamjohn/Hearo"
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
              <Card className="h-100 workCard">
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
