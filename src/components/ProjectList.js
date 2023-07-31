import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  //console.log(projects)
  const projectItem = projects.map(projectArr =>{
    return <ProjectItem key={projectArr.id} about={projectArr.about} 
    name={projectArr.name} technologies={projectArr.technologies}/>
  });
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectItem}
      </div>
    </div>
  );
}

export default ProjectList;
