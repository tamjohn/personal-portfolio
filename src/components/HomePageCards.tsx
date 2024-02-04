import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Card } from "./Card";
import headshot from "../assets/img/Johnathan_Headshot.jpg";
import resume from "../assets/img/Resume.png";
import projectPic from "../assets/img/Project.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';

type cardType = {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
};

export const HomePageCards: React.FC = () => {
  const Cards: cardType[] = [
    {
      title: "About Me",
      description: "Learn more about Johnathan!",
      imgUrl: headshot,
      link: "/about", 
    },
    {
      title: "Work Experience",
      description: "Read about my professional journey",
      imgUrl: resume,
      link: "/work-experience", 
    },
    {
      title: "Projects",
      description: "See my personal projects",
      imgUrl: projectPic,
      link: "/projects", 
    },
  ];
  const [bounce, setBounce] = useState(false);

  const handleAnimationEnd = () => {
    setBounce(true);
  };

  return (
    <section className="cards">
      <Container>
        <Row>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""} onAnimationEnd={handleAnimationEnd}>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp"  className={isVisible ? "continuousBounce" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {Cards.map((card, index) => (
                          <Col xs={12} sm={6} md={6} lg={4} key={index}>
                            <Link to={card.link} style={{ textDecoration: 'none' }}>
                              <Card {...card} />
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
