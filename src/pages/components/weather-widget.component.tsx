import React from "react";
import {IWeatherDTO} from "../../model/weather-dto";
import {Weather} from "./weather.component";

interface Props {
  name: string;
  data: IWeatherDTO;
  onClick?: () => void;
}

export const WeatherWidget: React.FunctionComponent<Props> = (props) => {
  return (
      <div className="weather-widget" onClick={props.onClick}>
        <p  className="weather-widget__title">{props.name}</p>
        <Weather data={props.data}/>
      </div>
  )
}
