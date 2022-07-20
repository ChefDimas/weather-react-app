import React, { useState } from "react";
import axios from "axios";
import "./App.module.sass";
import classes from "./App.module.sass";

function App() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=44.43923&lon=26.1063&appid=dd6bade7424688cbb50162ce860ff70b";

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <div className={classes.top_section}>
          <div className={classes.location}>
            <p>Bucharest</p>
          </div>
          <div className={classes.temp}>
            <h1>60 Deg</h1>
          </div>
          <div className={classes.description}>
            <p>Clouds</p>
          </div>
        </div>
        <div className={classes.bottom_section}>
          <div className={classes.feels}>
            <p className={classes.bold}>55 Deg</p>
            <p>Feels like</p>
          </div>
          <div className={classes.humidity}>
            <p className={classes.bold}>20%</p>
            <p>Humidity</p>
          </div>
          <div className={classes.wind}>
            <p className={classes.bold}>5 m/s</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
