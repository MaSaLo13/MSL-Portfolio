import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../pages/App.css';


export default function Projects() {
  return (
    <Container>
    <Row xs={1} md={2} className="g-4">

      <Col className="projects">
      <Card>
          <Card.Img variant="top" src="https://github.com/oconnorjohnson/cream-finder/raw/main/public/images/logo.png" />
          <Card.Body>
            <Card.Title>Cream Finder</Card.Title>
            <Card.Text>
            Cream Finder is a web-based full-stack application which accepts ice cream truck driver routes and displays locations for ice cream enthusiasts. If you are an ice cream truck driver, you will be able to add your stops so that customers will be able to find you. If you are an ice cream enthusiast then you will be able to look at where they stop.
            </Card.Text>
            <a className="button" href="https://github.com/oconnorjohnson/cream-finder" role="button"
            ><i className="fab fa-github"></i></a>
            <a className="button2" href="https://enthousiaste-monsieur-80020.herokuapp.com/" role="button"
            ><iconify-icon inline icon="simple-icons:heroku" class="icon"></iconify-icon></a>
          </Card.Body>
        </Card>
      </Col>
      <Col className="projects">
        <Card>
          <Card.Img variant="top" src="https://github.com/GSiggins/ingredients/raw/main/assets/images/landing.png" />
          <Card.Body>
            <Card.Title>Chef Buddy</Card.Title>
            <Card.Text>
              Chef Buddy will help 
            </Card.Text>
            <a className="button" href="https://github.com/GSiggins/ingredients" role="button"
            ><i className="fab fa-github"></i></a>
            <a className="buttong" href="https://gsiggins.github.io/ingredients/" role="button"
            ><iconify-icon icon="simple-icons:githubpages" class="icon"></iconify-icon></a>
          </Card.Body>
        </Card>
      </Col>
      <Col className="projects">
     
        <Card>
          <Card.Img variant="top" src="https://github.com/MaSaLo13/Weather-Dash/raw/main/assets/img/first.png" />
          <Card.Body>
            <Card.Title>Weather-Dash</Card.Title>
            <Card.Text>
            Built a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.
            </Card.Text>
            <a className="button" href="https://github.com/MaSaLo13/Weather-Dash" role="button"
            ><i className="fab fa-github"></i></a>
            <a className="button2" href="https://masalo13.github.io/Weather-Dash/" role="button"
            ><iconify-icon inline icon="simple-icons:heroku" class="icon"></iconify-icon></a>
          </Card.Body>
        </Card>
      </Col>
      <Col className="projects">
        <Card>
          <Card.Img variant="top" src="https://user-images.githubusercontent.com/105378752/184068183-30f719fc-63e9-478a-bdc2-6b0f43895cff.png" />
          <Card.Body>
            <Card.Title>Plenty of Hanks</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    
     </Row>
     <Col><h1>Mini Projects</h1></Col>
     <Row xs={1} lg={4}>
     <Col className="projects">
        <Card>
          <Card.Img variant="top" src="https://github.com/MaSaLo13/note-takerexp/raw/main/assets/notetaker.png" />
          <Card.Body>
            <Card.Title>Note-TakerExp</Card.Title>
            <Card.Text>
            This application uses an Express.js back end and will save and retrieve note data from a JSON file.
            </Card.Text>
            <a className="button" href="https://github.com/MaSaLo13/note-takerexp" role="button"
            ><i className="fab fa-github"></i></a>
            <a className="button2" href="https://guarded-gorge-65781.herokuapp.com/" role="button"
            ><iconify-icon inline icon="simple-icons:heroku" class="icon"></iconify-icon></a>
          </Card.Body>
        </Card>
      </Col>
      <Col className="projects">
        <Card>
          <Card.Img variant="top" src="https://github.com/MaSaLo13/Day-Scheduler/raw/main/Assets/DayScheduler.png"/>
          <Card.Body>
            <Card.Title>Day-Scheduler</Card.Title>
            <Card.Text>
           A simple calendar application that allows a user to save events for each hour of the day.
            </Card.Text>
            <a className="button" href="https://github.com/MaSaLo13/Day-Scheduler" role="button"
            ><i className="fab fa-github"></i></a>
            <a className="button2" href="https://masalo13.github.io/Day-Scheduler/" role="button"
            ><iconify-icon inline icon="simple-icons:githubpages" class="icon"></iconify-icon></a>
          </Card.Body>
        </Card>
      </Col>
      <Col className="projects">
        <Card>
          <Card.Img variant="top" src="https://github.com/MaSaLo13/team-buildgen/raw/main/Develop/dist/team.png" />
          <Card.Body>
            <Card.Title>Team Profile Generator</Card.Title>
            <Card.Text>
            A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
            </Card.Text>
            <a className="button" href="https://github.com/MaSaLo13/team-buildgen" role="button"
            ><i className="fab fa-github"></i></a>
            <a className="button2" href="https://drive.google.com/file/d/1yvCBguwR78FPaqraftmdbgkOrhX_VdyV/view" role="button"
            ><iconify-icon inline icon="akar-icons:video" class="icon"></iconify-icon></a>
          </Card.Body>
        </Card>
      </Col>
      <Col className="projects">
        <Card>
          <Card.Img variant="top" src="https://github.com/MaSaLo13/ReadMe-Gen/raw/main/Develop/genread.png" />
          <Card.Body>
            <Card.Title>ReadMe Generator</Card.Title>
            <Card.Text>
           A command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.
            </Card.Text>
            <a className="button" href="https://github.com/MaSaLo13/ReadMe-Gen" role="button"
            ><i className="fab fa-github"></i></a>
            <a className="button2" href="https://drive.google.com/file/d/1IyvZgvq4_2nMatbbLMTh2WhB82XPQzgw/view" role="button"
            ><iconify-icon inline icon="akar-icons:video" class="icon"></iconify-icon></a>
          </Card.Body>
        </Card>
      </Col>
  
   
    </Row>

    </Container>
  );
}