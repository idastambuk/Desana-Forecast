import React from "react";
import {IWeatherDTO} from "../../model/weather-dto";

interface Props {
  data: IWeatherDTO
}

export const Weather: React.FunctionComponent<Props> = (props) => {
  return (
      <div className="weather-widget_data">
        <div className="weather-widget__data__main">
          <div className={props.data.weather[0].main}></div>
        </div>
        <div className="weather-widget_data__info">
          <p className="weather-widget__data__main__temp">{Math.floor(props.data.main.temp)} <sup>o</sup>C</p>
          <p>{Math.floor(props.data.main.temp_min)} <sup>o</sup>C / {Math.floor(props.data.main.temp_min)} <sup>o</sup>C</p>
          <p>{props.data.weather[0].main}</p>
        </div>
      </div>
  )
}
