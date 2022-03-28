import "./Weather.css";
import React from "react";

export default function Weather() {
  return (
    <div className="body-Image">
      <div className="App">
        <div className="container">
          <div className="current-info">
            <div className="weather-app">
              <form className="mb-3">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      className="form-control"
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="date-container">
              <div className="city">San Francisco</div>
              <div className="date">
                Last updated:Monday 28, Februar<span id="date"></span>
              </div>
              <ul>
                <li id="description">Clear</li>
              </ul>
              <div className="future-forecast">
                <div className="today">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="weatherIcon"
                    className="w-icon"
                    id="icon"
                  />
                  <div className="others">
                    <div className="day"></div>
                    <div className="temp" id="temperature">
                      72 <span>°</span>
                    </div>
                    <div className="units">
                      <a href="/" className="active">
                        °C |
                      </a>
                      <a href="/"> °F</a>
                    </div>
                    <div className="humidity">
                      Humidity:<span>75%</span>
                    </div>
                    <div>
                      Windspeed:<span>2km</span>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <small>
                <a
                  class="link"
                  href="https://github.com/Murielcibra/tempo-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open-source code
                </a>
                by: Muriel Cishek
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
