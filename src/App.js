import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCard from "./Components/Card/ProjectCard";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h3>
        <a href="mailto: saken.rai.34@gmail.com">Send Email</a>
      </h3>
      <h1>Projects</h1>
      <div className="Projects">
        <ProjectCard url={"https://www.vibeseducation.com/"} />
        <ProjectCard url={"https://strong-sunflower-ff499e.netlify.app/"} />
      </div>
    </div>
  );
}

export default App;
