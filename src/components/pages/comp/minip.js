import React from 'react';
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../comp/App.css"

export default function minip() {
  return (
<Container className="cont2">
    <Row>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Row>
    

    </Container>
  );
}


// https://github.com/MaSaLo13/note-takerexp/raw/main/assets/notetaker.png

// https://github.com/MaSaLo13/Day-Scheduler/raw/main/Assets/DayScheduler.png


{/* <CardGroup>
<Card className="minicard">
  <Card.Img className="first" variant="top" src="https://github.com/MaSaLo13/note-takerexp/raw/main/assets/notetaker.png" />
  <Card.Body>
    <Card.Title>NoteTaker-Exp</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </Card.Text>
  </Card.Body>
</Card>
<Card className="mini">
  <Card.Img variant="top" src="https://github.com/MaSaLo13/Day-Scheduler/raw/main/Assets/DayScheduler.png" />
  <Card.Body>
    <Card.Title>Day Scheduler</Card.Title>
    <Card.Text>
      This card has supporting text below as a natural lead-in to
      additional content.{' '}
    </Card.Text>
  </Card.Body>
</Card>
<Card className="mini">
  <Card.Img variant="top" src="https://github.com/MaSaLo13/Day-Scheduler/raw/main/Assets/DayScheduler.png" />
  <Card.Body>
    <Card.Title>Day Scheduler</Card.Title>
    <Card.Text>
      This card has supporting text below as a natural lead-in to
      additional content.{' '}
    </Card.Text>
  </Card.Body>
</Card>

</CardGroup> */}