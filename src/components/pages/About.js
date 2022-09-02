import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';


export default function About() {
  return (
<Container>
<Row xs={1} md={2}>
  <Col>
  <h1>About Me</h1></Col>
  <Col>
  <img src="https://github.com/MaSaLo13/Weather-Dash/raw/main/assets/img/first.png" className="card-img-top" alt="Hollywood Sign on The Hill"/></Col>
  <Col>
  <p>
Full Stack web developer with a background in Political Science and International Studies. Recently earned a certificate in full stack development from the Coding Boot Camp at UCLA Extension; developed new skills that include: HTML, CSS,  JavaScript, BootStrap, API’s, Node, Express, MySQL, MVC Paradigm, Sequilieze, React, MongoDB, and MERN Stack. I applied HTML, CSS, handlebars.js Javascript and MySQL in a recent group project with 3 other people where we created a full stack website called Cream Finder that will help ice cream truck drivers with sharing their routes with users that enjoy ice cream. I am excited to use my newly developed skills in a fast-paced and driven team to build websites that users will enjoy.

</p></Col>
</Row>
</Container>
 
  
  );
}




