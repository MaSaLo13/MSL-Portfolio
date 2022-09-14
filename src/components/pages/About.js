import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './App.css';


export default function About() {
  return ( <>
   
    <Container>
      <Row>
        <Col sm={12} md={6}lg={4} className="justify-content-center">
          <Image
            src={require("../img/me.JPG")}
            roundedCircle
            width="300vw"
            height="300vw"/>
        </Col>
        <Col className="pl-md-5">
            <h1 className="display-4 text-center text-lg-left text-light p-0-lg pt-4">
              Hello!</h1>
            <p className="text-light text-center text-md-left h3">
            I'm Marvin Santiago, a full-stack web developer based in Los Angeles.
            </p>
        </Col>
      </Row>
    </Container>
    
    
    <Container fluid className="shadow mb-5">
    <Container className="p-5 about">
      <h3>About Me</h3>
      <p>
      Full Stack web developer with a background in Political Science and International Studies. Recently earned a certificate in full stack development from the Coding Boot Camp at UCLA Extension; developed new skills that include: HTML, CSS,  JavaScript, BootStrap, API’s, Node, Express, MySQL, MVC Paradigm, Sequilieze, React, MongoDB, and MERN Stack.
      </p>
      <p>
      I applied HTML, CSS, handlebars.js Javascript and MySQL in a recent group project with 3 other people where we created a full stack website called Cream Finder that will help ice cream truck drivers with sharing their routes with users that enjoy ice cream.
      </p>
      <p>
      I am excited to use my newly developed skills in a fast-paced and driven team to build websites that users will enjoy.
      </p>
    </Container>
    </Container>
    </>
  );
}






{/* <Container>
<Row xs={1} md={2}>
  <Col>
  <img src={require("../img/me.JPG")} className="card-img-top" alt="Me"/>
  </Col>
  <Col>
  <p>
  I'm Marvin Santiago, a full-stack web developer based in Los Angeles.</p></Col>
  <Col>
  <h1>About Me</h1>
  <p>
Full Stack web developer with a background in Political Science and International Studies. Recently earned a certificate in full stack development from the Coding Boot Camp at UCLA Extension; developed new skills that include: HTML, CSS,  JavaScript, BootStrap, API’s, Node, Express, MySQL, MVC Paradigm, Sequilieze, React, MongoDB, and MERN Stack.

 I applied HTML, CSS, handlebars.js Javascript and MySQL in a recent group project with 3 other people where we created a full stack website called Cream Finder that will help ice cream truck drivers with sharing their routes with users that enjoy ice cream. I am excited to use my newly developed skills in a fast-paced and driven team to build websites that users will enjoy.

</p></Col>
</Row>
</Container> */}