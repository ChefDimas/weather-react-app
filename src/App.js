import "./App.sass";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <div className="container">
          <h3 className="brand"></h3>
          <div>
            <h1 className="temp"> </h1>
            <div className="city-time">
              <h1 className="name"></h1>
              <small>
                <span className="date"></span>
              </small>
            </div>
            <div className="weather">
              <img
                src={require("./assets/icons/sunny.png")}
                alt="sunny"
                className="icon"
                width="50"
                height="50"
              />
              <span className="condition">Sunny</span>
            </div>
          </div>
        </div>
        <div className="panel">
          <form id="locationInput">
            <input
              type="text"
              className="search"
              placeholder="Search Location..."
            />
            <button type="submit" className="submit"></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
