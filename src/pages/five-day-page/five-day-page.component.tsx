import React, {Component} from "react";
import {connect} from "react-redux";
import {IAppState} from "../../reducers";
import {IWeatherDTO} from "../../model/weather-dto";
import {WeatherWidget} from "../components/weather-widget.component";
import {formatDate} from "../../utils/forecast-helper";

interface IProps{
  forecast: {cityName: string, cityData: IWeatherDTO[]};
  getWeatherForCities: () => void;
  getForecastForCity: (city: string) => void;
}

export class FiveDayPageComponent extends Component<IProps> {

  public render() {
    const weather: JSX.Element[] = [];
    if (this.props.forecast) {
      this.props.forecast.cityData.forEach((data: IWeatherDTO) => {
        weather.push(<WeatherWidget key={this.props.forecast.cityName} name={formatDate(data.dt_txt)} data={data}/>);
      });
    }
    return (
        <div className="forecast__container">
          {this.props.forecast &&
          <>
              <h1>{this.props.forecast.cityName}</h1>
              <p>5-day forecast</p>
              <div className="forecast__widgets">
                {weather}
              </div>
          </>
          }
        </div>
    )
  }
}

function mapStateToProps(state: IAppState) {
  return {
    forecast: state.forecast.fiveDay
  }
}

export const FiveDayPageContainer = connect(mapStateToProps, undefined)(FiveDayPageComponent);

