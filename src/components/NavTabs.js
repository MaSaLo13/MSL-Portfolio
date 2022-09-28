import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../src/App.css';


export default function NavTabs({ currentPage, handlePageChange }) {
  return (

    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand fluid style={{ paddingLeft: 20}} href="#about">Marvin Santiago Lopez</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"> <iconify-icon icon="akar-icons:three-line-horizontal" height="30px"></iconify-icon> </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>







  );
}
