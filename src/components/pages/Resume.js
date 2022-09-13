import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skills from './Skills';

export default function Resume() {
  return (
  
    <Container className="blank">
    <Row xs={1}>
      <Col>
      <h1>Resume</h1>
      <p>
        Download my <a href="https://docs.google.com/document/d/1P170mLWOQWqgROO-WjSsZafwwHuSlCAeGzbrYl1MrXc/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
      </p>
      </Col>
      <Col>
     <Skills/>
     </Col>
    </Row>
    </Container>

    
  
   
  )
}





{/* <div class="resume">
      <h1>Resume</h1>
      <hr></hr>
      <p>
        Download my <a href="https://docs.google.com/document/d/1P170mLWOQWqgROO-WjSsZafwwHuSlCAeGzbrYl1MrXc/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
      </p>
      <h1>Resume</h1>
    <iframe src="https://docs.google.com/document/d/1P170mLWOQWqgROO-WjSsZafwwHuSlCAeGzbrYl1MrXc/edit?usp=sharing" width="100%" height="500px">
    </iframe>
      
    </div> */}

    // FRONT END: HTML, JAVASCRIPT, CSS, BOOTSTRAP, JQUERY
    // NODE JS IS BOTH
    //BACK END: MONGODB, MYSQL, 