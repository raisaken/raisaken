import React from "react";
import Iframe from "react-iframe";
import "./ProjectCard.css";
import { Grid, Card ,Container} from "@mui/material";

function ProjectCard({ url }) {
  return (
    <Container>
      <Grid columns={6}>
        <Card>
          <Iframe url={url} id="myId" className="Iframe">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            sequi placeat saepe laudantium eius dolor blanditiis quis harum
            assumenda expedita natus eveniet culpa quaerat commodi porro vitae
            voluptates, laboriosam vero.
          </Iframe>
        </Card>
      </Grid>
    </Container>
  );
}

export default ProjectCard;
