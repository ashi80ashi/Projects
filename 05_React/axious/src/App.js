import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

const App = () => {

  const[details,setdetails]=useState({})

const fetchdata = async()=>{
  const response = await axios.get('https://randomuser.me/api/')
  const output = response.data.results[0]
  setdetails(output)
}
console.log(details)

useEffect(()=>{
  fetchdata()
},[])
  return (
  <div className="w-screen h-screen bg-black flex justify-center items-center">
    <User details={details} />
  </div>
  );
};

export default App;
