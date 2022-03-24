import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCard from "./Components/Card/ProjectCard";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Projects</h1>
        <div className="Projects">
          <ProjectCard url={"https://www.vibeseducation.com/"} />
          <ProjectCard url={"https://www.vibeseducation.com/"} />
          <ProjectCard url={"https://www.vibeseducation.com/"} />
        </div>
      </Container>
    </div>
  );
}

export default App;
