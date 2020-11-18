import React from "react";
import "./weather-widget.scss";
import { ReactComponent as Wind } from "../../assets/weather/wind.svg";
import { ReactComponent as RaintTear } from "../../assets/weather/rainTear.svg";
import { ReactComponent as Thunderstorm } from "../../assets/weather/thunderstorm.svg";
//import { ReactComponent as Sun } from "../../assets/weather/sun.svg";
//import { ReactComponent as Snow } from "../../assets/weather/snow.svg";
//import { ReactComponent as Rain } from "../../assets/weather/rain.svg";
//import { ReactComponent as Cloud } from "../../assets/weather/cloud.svg";

const WeatherWidget = () => {
  return (
    <div className="widget">
      {/*2387*/}
      <div className="widget__wrapper">
        <div className="widget__column--first">
          <div className="weekDay-location">
            <div className="weekDay">Monday, 2 January</div>
            <div className="Divider">|</div>
            <div className="location">Klaipėda, Lithuania</div>
          </div>
          <div className="weather">
            <div className="degrees-type">
              <div className="degrees">13°</div>
              <div className="type">Thunderstorm</div>
            </div>
            <div className="wind-precipitation">
              <div className="item">
                <Wind />
                <div className="item--text">2.5 m/s</div>
              </div>
              <div className="item">
                <RaintTear />
                <div className="item--text">22 mm</div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget__column--second">
          <div className="icon">
            {/* <Thunderstorm />
            <Sun />
            <Snow />
            <Rain />
            <Cloud /> */}
            <Thunderstorm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
