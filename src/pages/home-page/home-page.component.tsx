import React, {Component} from "react";
import {getForecastForCityAction, getWeatherForCitiesAction} from "../../store/forecast.actions";
import {connect} from "react-redux";
import {WeatherWidget} from "../components/weather-widget.component";
import {ICityWeather} from "../../model/city-weather";
import {IAppState} from "../../reducers";
import {
  withRouter, RouteComponentProps
} from 'react-router-dom'

interface IProps{
  weatherData: ICityWeather[];
  getWeatherForCities: () => void;
  getForecastForCity: (city: string) => void;
}

export class HomePage extends Component<IProps & RouteComponentProps<any>, any> {
  public componentDidMount(): void {
    this.props.getWeatherForCities();
  }

  public render() {
    const weather: JSX.Element[] = []
    this.props.weatherData.forEach((city: ICityWeather) => {
      weather.push(<WeatherWidget key={city.name} data={city.data} name={city.name} onClick={() => this.getForecastHandler(city.name)}/>);
    });
    return (
        <div className="home-page">
          <h1>Current weather</h1>
          <p>Click on city to see 5-day forecast</p>
          {weather}
        </div>
    )
  }
  private getForecastHandler(name: string){
    this.props.history.push('/5-day-forecast/');
    this.props.getForecastForCity(name);
  }
}

function mapStateToProps(state: IAppState) {
  return {
    weatherData: state.forecast.weatherData
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    getWeatherForCities: () => dispatch(getWeatherForCitiesAction()),
    getForecastForCity: (city: string) =>  dispatch(getForecastForCityAction(city))
  }
}

export const HomePageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));

