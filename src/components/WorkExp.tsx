import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import diligentLogo from '../assets/img/Diligent_Logo.jpg';
import deltaLogo from '../assets/img/DeltaControls_Logo.png';
import convergenceLogo from '../assets/img/Convergence_logo.jpg';
import arcLogo from '../assets/img/ARC_logo.png';
import GMOLogo from '../assets/img/GMO_Financial_Holdings.png';

type cardType = {
    companyName: string;
    role: string;
    datesWorked: string;
    techStack: string[];
    logoUrl: string;
    link: string;
};

export const WorkExp: React.FC = () => {
  const Cards: cardType[] = [
    {
      companyName: "GMO Financial Holdings Inc",
      role: "Software Engineer",
      datesWorked: "June 2024 - Sep 2025",
      techStack: ["Kotlin", "Java", "Swift", "TypeScript", "Docker", "Spring", "React"],
      logoUrl: GMOLogo,
      link: "https://www.gmofh.com/en/",
  },
    {
      companyName: "Diligent Corporation",
      role: "Software Engineer Intern",
      datesWorked: "Sep 2023 - Jan 2024",
      techStack: ["AWS", "TypeScript", "Node.js", "DynamoDB", "S3", "Pipeline", "CloudWatch"],
      logoUrl: diligentLogo,
      link: "https://www.diligent.com/",
    },
    {
        companyName: "Delta Controls",
        role: "Junior Software Developer Intern",
        datesWorked: "May 2023 - Aug 2023",
        techStack: ["Python", "Django", "PostgreSQL", "PHP", "Zend", "React", "Docker"],
        logoUrl: deltaLogo,
        link: "https://deltacontrols.com/",
    },
    {
        companyName: "Convergence Concepts",
        role: "Full Stack Developer Intern",
        datesWorked: "Sep 2022 - Dec 2022",
        techStack: ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "Apollo", "MongoDB"],
        logoUrl: convergenceLogo,
        link: "https://cctech.io/",
    }
  ];

  return (
    <section className="workExpPage" id='work-exp'>
      <Container className='workExpCardsContainer'>
      <Row>
        <Col className="workExpHeader">
          <h2><strong>Work Experience</strong></h2>
        </Col>
      </Row>
      <Row>
        <Col className="resumeLink">
          <a href={`${process.env.PUBLIC_URL}/Johnathan Tam_Resume_2025.pdf`} target="_blank" rel="noopener noreferrer" className="resumeButton">
            View My Resume
          </a>
        </Col>
      </Row>
        <Row>
          {Cards.map((card, index) => (
            <Col xs={12} sm={6} md={3} lg={3} key={index}>
              <Link to={card.link} style={{ textDecoration: 'none' }}>
                <Card className="h-100 workCard">
                  <div className='imageContainer'>
                    <Card.Img variant="top" src={card.logoUrl} className='workCardImg' />
                  </div>
                  <Card.Body>
                    <Card.Title>{card.companyName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{card.role}</Card.Subtitle>
                    <Card.Text>
                      <small>{card.datesWorked}</small>
                    </Card.Text>
                    <Card.Text className='skillsText'>
                      {card.techStack.join(', ')}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};