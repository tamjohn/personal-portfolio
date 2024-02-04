import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Card } from "./Card";
import projImg1 from "../assets/img/Johnathan_Headshot.jpg";
import projImg2 from "../assets/img/Resume.png";
import projImg3 from "../assets/img/Project.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';

type Project = {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
};

export const HomePageCards: React.FC = () => {
  const projects: Project[] = [
    {
      title: "About Me",
      description: "Learn more about Johnathan!",
      imgUrl: projImg1,
      link: "/about", 
    },
    {
      title: "Work Experience",
      description: "Read about my professional journey",
      imgUrl: projImg2,
      link: "/work-experience", 
    },
    {
      title: "Projects",
      description: "See my personal projects",
      imgUrl: projImg3,
      link: "/projects", 
    },
  ];
  const [bounce, setBounce] = useState(false);

  const handleAnimationEnd = () => {
    setBounce(true);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""} onAnimationEnd={handleAnimationEnd}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp"  className={isVisible ? "continuousBounce" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <Col xs={12} sm={6} md={6} lg={4} key={index}>
                            <Link to={project.link} style={{ textDecoration: 'none' }}>
                              <Card {...project} />
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
          </TrackVisibility>
        </Row>
      </Container>
    </section>
  );
};
