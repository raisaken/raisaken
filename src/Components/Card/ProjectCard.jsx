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
      />
    </div>
  );
}

export default ProjectCard;
