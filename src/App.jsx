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
            <h1>Bucharest</h1>
          </div>
          <div className={classes.temp}>
            <p>60 Deg</p>
          </div>
          <div className={classes.description}>
            <p>Clouds</p>
          </div>
        </div>
        <div className={classes.bottom_section}>
          <div className={classes.feels}>
            <p>55 Deg</p>
          </div>
          <div className={classes.humidity}>
            <p>20%</p>
          </div>
          <div className={classes.wind}>
            <p>5km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
