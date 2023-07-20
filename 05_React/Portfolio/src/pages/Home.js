import React, { useEffect, useState } from "react";
import img from "../assets/img.jpg"
import 'animate.css';
import { Link } from "react-router-dom";
function Home() {

  const [count, setCount] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => {
        if (count === 25) {
          clearInterval(intervalId)
          return count
        } else {
          return count + 1
        }
      })
    }, 200)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className=" text-black h-full flex flex-col  md:flex-row ">
      <div className="  w-full md:w-2/3 h-1/3 md:h-full flex flex-col items-center justify-around gap-5 px-5 md:px-20  py-10">
        <h1 className="text-4xl font-bold mb-6 animate__animated animate__flipInX ">Hi, I'm Ashish</h1>
        <p className="  text-xl  mb-6 animate__animated animate__fadeIn  ">
         <span className="font-semibold mb-1">Welcome to my portfolio !</span><br /> I'm a Frontend developer with a passion for
          creating beautiful, functional websites and applications. With
          expertise in HTML, CSS, JavaScript, and React, I specialize in
          building responsive, user-friendly sites. Take a look at my work to see some examples of my recent projects, and don't hesitate
          to get in touch if you have any questions or would like to discuss a
          potential project.
        </p>       
        <div className=" flex w-full  justify-center gap-x-10">
        <a
          href="https://drive.google.com/file/d/1_5CSz3r5FIQW55Gca6uQeXq4qzC7ERuG/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="duration-300 animate__animated animate__jackInTheBox animate__delay-2s bg-slate-200  hover:shadow-sm hover:shadow-black text-gray-900 shadow-lg shadow-black font-bold py-2 px-4 rounded"
        >
          Download CV
        </a>
        <Link to="/projects" className="duration-300 animate__animated animate__jackInTheBox animate__delay-2s bg-slate-200  hover:shadow-sm hover:shadow-black text-gray-900 shadow-lg shadow-black font-bold py-2 px-6 rounded">
        {`${count}+ Projects`}
        </Link>
        </div>
      </div>
      <div className="w-full md:w-1/3 h-1/3 md:h-full  lg:h-96  flex flex-col gap-y-10 justify-center items-center ">
        <img
          src={img}
          alt="John Doe"
          className=" bg-blue-500 animate__animated animate__fadeInRight w-72 md:96 rounded-full shadow-lg   shadow-gray-900  hover:shadow-sm hover:shadow-black duration-300"
        />
      </div>
    </div>
  );
}

export default Home;
