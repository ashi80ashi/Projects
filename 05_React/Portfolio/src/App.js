import React from "react";
import { Route , Routes } from "react-router";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import HireMe from "./pages/HireMe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import background from "./assets/background.png";
const App = () => {
  return (
  <div style={{ backgroundImage: `url(${background})` }}  className="bg-center bg-no-repeat bg-cover   flex flex-col justify-between p-0 min-h-screen box-border bg-slate-200 ">
    
     <Navbar/>
    
     <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />  
          <Route path="/hireme" element={<HireMe />} />
        </Route>
      </Routes>

      <Footer/>

  </div>);
};

export default App;
