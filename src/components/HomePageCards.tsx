import React from 'react';
import { Container, Row, Col, Tab } from "react-bootstrap";
import { Card } from "./Card";
import headshot from "../assets/img/Johnathan_Headshot.jpg";
import resume from "../assets/img/Resume.png";
import projectPic from "../assets/img/Project.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';

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
      description: "Learn more about Johnathan",
      imgUrl: headshot,
      link: "#about", 
    },
    {
      title: "Work Experience",
      description: "Read about my professional journey",
      imgUrl: resume,
      link: "#work", 
    },
    {
      title: "Projects",
      description: "See my personal projects",
      imgUrl: projectPic,
      link: "#projects", 
    },
  ];

  return (
    <section className="cards" id='home'>
      <Container className='homePageCardsContainer'>
        <Row>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp"  className={isVisible ? "continuousBounce" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {Cards.map((card, index) => (
                          <Col xs={12} sm={6} md={6} lg={4} key={index}>
                            <HashLink to={card.link} style={{ textDecoration: 'none' }}>
                              <Card {...card} />
                            </HashLink>
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
