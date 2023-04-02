import React from "react";
import ProjectCard from "../components/ProjectCard";
import img from "../assets/01.png";
import img2 from "../assets/02.png";
import img3 from "../assets/03.png";  
import img4 from "../assets/04.png";
import img5 from "../assets/05.png";
import img6 from "../assets/06.png";
import img7 from "../assets/07.png";
import img8 from "../assets/08.png";
import img9 from "../assets/09.png";

function Projects() {
  const projects = [
   
    {
      title: "Router Project",
       img: img,
      link: "https://superb-hummingbird-9822a9.netlify.app/",
    },
    {
      title: "Babbar Travelers",
      img: img2, 
      link: "https://sparkling-khapse-a6d099.netlify.app/",
    },
    {
      title: "Todo-Redux",
      img: img3, 
      link: "https://thriving-empanada-c48886.netlify.app/",
    },
    {
      title: "Testimonials",
      img: img4, 
      link: "https://splendid-puppy-db7ce7.netlify.app/",
    },
    {
      title: "4 in 1 JS",
      img: img5, 
      link: "https://4in1-javascript-project.netlify.app/",
    },
    {
      title: "FB clone",
      img: img6, 
      link: "https://symphonious-crepe-76e4ba.netlify.app/",
    },
    {
      title: "swiggy clone",
      img: img7, 
      link: "https://dashing-cuchufli-5b04a4.netlify.app/",
    },
    {
      title: "Car Game",
      img: img8, 
      link: "https://caranimationwithjs.netlify.app/",
    },
    {
      title: "VsCode Clone",
      img: img9,
      link: "https://vsclone00.netlify.app/",
    }
  ];

  return (

<div className="flex flex-col items-center h-full md:h-[550px]  ">
      <h1 className="text-4xl font-bold my-5">Projects</h1>
      <div className="w-full p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 shadow-inner shadow-black overflow-scroll">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
</div>

  );
}

export default Projects;
