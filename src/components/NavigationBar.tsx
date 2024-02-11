import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";

export const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };
  
  return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container fluid className="justify-content-start justify-content-lg-between">
          <Navbar.Brand href="/" className="ms-4" style={{ color: '#fff', fontSize: '25px', letterSpacing: '0.8px', fontWeight: '400' }}>
            Johnathan Tam
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" style={{paddingLeft: '150px'}}>
            <Nav>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#work" className={activeLink === 'work' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('work')}>Work</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <span className="navbar-text d-none d-lg-flex">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/johnathan-tam/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/tamjohn"><img src={navIcon2} alt="" /></a>
            </div>
            <a href="mailto:tamjohnathan@gmail.com" className="me-4">
              <button className="vvd"><span>Let’s Connect</span></button>
            </a>
          </span>
        </Container>
      </Navbar>
  );
};
