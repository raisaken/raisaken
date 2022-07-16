import ProjectCard from "./Components/Card/ProjectCard";

import { Button, Col, Container, Row } from "react-bootstrap";
const items = [
  {
    id: 1,
    url: "https://www.vibeseducation.com/",
  },
  {
    id: 2,
    url: "https://strong-sunflower-ff499e.netlify.app/",
  },
];

function App() {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Button 
      variant="outline-primary"
      >
        {" "}
        <a href="mailto: saken.rai.34@gmail.com">
          Contact
        </a>
      </Button>

      <h1>Projects</h1>
      <Row>
        {items.map((item) => {
          return (
            <Col md={6}>
              <ProjectCard key={item.id} url={item.url} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
