import React from "react";
import Iframe from "react-iframe";
import './ProjectCard.css'

function ProjectCard({url}) {
  return (
    <div className="Card">
      <Iframe
        url={url}
        id="myId"
        className="Iframe"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sequi placeat saepe laudantium eius dolor blanditiis quis harum assumenda expedita natus eveniet culpa quaerat commodi porro vitae voluptates, laboriosam vero.</Iframe>
    </div>
  );
}

export default ProjectCard;
