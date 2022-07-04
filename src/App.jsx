import "./App.sass";
import React, {useState} from "react";
import axios from "axios";

function App() {

  const url = "https://api.openweathermap.org/data/2.5/weather?lat={44.439663}&lon={26.096306}&appid={dd6bade7424688cbb50162ce860ff70b}";

  return(
  <div>{console.log(url)}</div>
  );
}

export default App;
