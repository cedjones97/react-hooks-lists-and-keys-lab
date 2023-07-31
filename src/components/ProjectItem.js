import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const newTech = technologies.map(tech =>{
    return  <span key={tech}>{tech}</span>
  })
    return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <p>Dev creator Cedric Jones</p>
      <div className="technologies">
        {newTech}
      </div>
    </div>
  );
}

export default ProjectItem
