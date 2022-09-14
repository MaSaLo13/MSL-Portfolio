import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

export default function minip() {
  return (
<Container>
    <CardGroup>
      <Card>
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
      
    </CardGroup>

    

    </Container>
  );
}


// https://github.com/MaSaLo13/note-takerexp/raw/main/assets/notetaker.png

// https://github.com/MaSaLo13/Day-Scheduler/raw/main/Assets/DayScheduler.png

