import React from "react";
import data from "./data";
import Cards from "./components/Cards"
const App = () => {

  return(
    <div className=" h-screen flex flex-row items-center justify-center">
    <Cards data={data}/>
    </div>
   
  );
};

export default App;
