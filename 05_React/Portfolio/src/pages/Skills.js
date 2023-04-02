import React from 'react'
import { FaHtml5, FaCss3, FaReact ,FaMobileAlt,FaFigma } from 'react-icons/fa';
import { SiTailwindcss ,SiRedux,SiAxios } from 'react-icons/si';

function Skills() {
  return (
<div className="flex flex-col items-center mt-5 gap-9 px-8 py-8">
  <h2 className="text-3xl text-gray-800 font-bold mb-8">Skills</h2>
 
  <div className=" grid grid-cols-2 gap-8 md:grid-cols-4  ">
    
    <div className="duration-300 hover:scale-110  text-center bg-gray-200 hover:shadow-md hover:shadow-black shadow-inner shadow-black rounded-lg p-4 ">
      <div className="animate__animated animate__jackInTheBox inline-flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
        <FaHtml5 className="text-5xl text-white" />
      </div>
      <p className="text-lg font-semibold text-gray-900">HTML5</p>
    </div>

    <div className="duration-300 hover:scale-110  text-center bg-gray-200 hover:shadow-md hover:shadow-black shadow-inner shadow-black rounded-lg p-4">
      <div className="animate__animated animate__jackInTheBox inline-flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-500">
        <FaCss3 className="text-5xl text-white" />
      </div>
      <p className="text-lg font-semibold text-gray-800">CSS3</p>
    </div>
   
    <div className="duration-300 hover:scale-110  text-center bg-gray-200 hover:shadow-md hover:shadow-black shadow-inner shadow-black rounded-lg p-4">
      <div className="animate__animated animate__jackInTheBox inline-flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-green-500">
        <FaReact className="text-5xl text-white" />
      </div>
      <p className="text-lg font-semibold text-gray-800">React</p>
    </div>
    
    <div className="duration-300 hover:scale-110  text-center bg-gray-200 hover:shadow-md hover:shadow-black shadow-inner shadow-black rounded-lg p-4">
      <div className="animate__animated animate__jackInTheBox inline-flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-300 to-blue-500">
        <SiTailwindcss className="text-5xl text-white" />
      </div>
      <p className="text-lg font-semibold text-gray-800">Tailwind CSS</p>
    </div>
   
   <div className="duration-300   hover:scale-110  text-center bg-gray-200 hover:shadow-md hover:shadow-black shadow-inner shadow-black rounded-lg p-4">
      <div className="animate__animated animate__jackInTheBox inline-flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-300 to-blue-500">
        <SiRedux className="text-5xl text-white" />
      </div>
      <p className="text-lg font-semibold text-gray-800">Redux-toolkit </p>
    </div>
  
    <div className="duration-300 hover:scale-110  text-center bg-gray-200 hover:shadow-md hover:shadow-black shadow-inner shadow-black rounded-lg p-4">
      <div className="animate__animated animate__jackInTheBox inline-flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-300 to-blue-500">
        <FaMobileAlt className="text-5xl text-white" />
      </div>
      <p className="text-lg font-semibold text-gray-800">Responsive design</p>
    </div>
    <div className="duration-300 hover:scale-110  text-center bg-gray-200 hover:shadow-md hover:shadow-black shadow-inner shadow-black rounded-lg p-4">
      <div className="animate__animated animate__jackInTheBox inline-flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-300 to-blue-500">
        <FaFigma className="text-5xl text-white" />
      </div>
      <p className="text-lg font-semibold text-gray-800">Basic Figma</p>
    </div>
    <div className="duration-300 hover:scale-110  text-center bg-gray-200 hover:shadow-md hover:shadow-black shadow-inner shadow-black rounded-lg p-4">
      <div className="animate__animated animate__jackInTheBox inline-flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-300 to-blue-500">
        <SiAxios className="text-5xl text-white" />
      </div>
      <p className="text-lg font-semibold text-gray-800">Axios</p>
    </div>
   
  </div>
</div>
  )
}

export default Skills
