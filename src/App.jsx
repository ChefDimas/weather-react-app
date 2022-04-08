import { AiOutlineSearch } from "react-icons/ai";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 className="brand">the weather</h3>
        <div>
          <h1 className="temp">14&#176;</h1>
          <div className="city-time">
            <h1 className="name">London</h1>
            <small>
              <span className="time">05:05</span>
              <span className="date">Monday Sep 12</span>
            </small>
          </div>
          <div className="weather">
            <img
              src={require("./assets/icons/day/116.png")}
              alt="weather"
              width="50"
              height="50"
              className="icon"
            />
            <span className="condition">Cloudy</span>
          </div>
        </div>
      </div>
      <div className="panel">
        <form className="location-input">
          <input
            type="text"
            className="search"
            placeholder="Search Location..."
          />
          <button type="submit" className="submit">
            <AiOutlineSearch />
          </button>
        </form>
        <ul className="cities">
          <li className="city">New York</li>
          <li className="city">Paris</li>
          <li className="city">Vienna</li>
          <li className="city">Hamburg</li>
        </ul>
        <ul className="details">
          <h4>Weather Details</h4>
          <li>
            <span>Cloudy</span>
            <span className="cloud">89%</span>
          </li>
          <li>
            <span>Humidity</span>
            <span className="humidity">65%</span>
          </li>
          <li>
            <span>Wind</span>
            <span className="wind">4km/h</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
