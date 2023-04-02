import React from 'react'

import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
  console.log(project.img)
  return (
    <div className="duration-200 bg-white hover:shadow-lg hover:shadow-black  hover:scale-105 rounded-xl">
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <div className="px-5 h-14  flex flex-row justify-center items-center ">
        <h3 className="text-lg font-bold flex items-center gap-2">{project.title}  <FiExternalLink size={14}/></h3>
        
      </div>
      
      <img src={project.img} className="rounded-b-xl animate__animated animate__bounceIn" alt="vds" />

      
    </a>
  </div>
  )
}

export default ProjectCard
