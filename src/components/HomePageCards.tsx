import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Card } from "./Card";
import projImg1 from "../assets/img/Johnathan_Headshot.jpg";
import projImg2 from "../assets/img/Resume.png";
import projImg3 from "../assets/img/Project.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

type Project = {
  title: string;
  description: string;
  imgUrl: string;
};

export const HomePageCards: React.FC = () => {
  const projects: Project[] = [
    {
      title: "About Me",
      description: "Learn more about Johnathan!",
      imgUrl: projImg1,
    },
    {
      title: "Work Experience",
      description: "Read about my professional journey",
      imgUrl: projImg2,
    },
    {
      title: "Projects",
      description: "See my personal projects",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Card
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
};
