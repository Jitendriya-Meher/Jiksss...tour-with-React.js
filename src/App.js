import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {

  const [tours,setTours] = useState(data);

  function removeTours(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if( tours.length === 0 ){
    return(
      <div className="refresh">
        <h2>No Tours Feft</h2>
        <button className="btn-white" onClick={()=>setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return(
    <div>
    <div className="me">
      Created By Jitendriya Meher
    </div>
      <Tours className="App" tours={tours} removeTours={removeTours}>       
      </Tours>
    </div>
  )
};

export default App;
