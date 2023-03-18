import React, { useState } from "react";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import data from "./data";
const App = () => {
  const [tours, settours] = useState(data);
  function removecard(id) {
    const newtours = tours.filter((tour) => tour.id !== id);
    settours(newtours);
  }

  if (tours.length === 0) {
    return (
      <div>
        <Header />
        <div className="h-96 text-7xl flex flex-col justify-center items-center font-bold">
          &#9785; <span>Baba ji banja tu</span>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Header />
      <Cards data={tours} removecard={removecard} />
    </div>
  );
};

export default App;
