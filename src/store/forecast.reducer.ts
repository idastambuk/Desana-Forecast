import * as forecastActionTypes from './forecast.action-types';
import {IForecastDTO, IWeatherDTO} from "../model/weather-dto";
import {IAction} from "../model/action";
import {ICityWeather} from "../model/city-weather";
import {forecastHandler} from "../utils/forecast-helper";

export interface IForecastState {
  weatherData: ICityWeather[];
  fiveDay: {cityName: string, cityData: IWeatherDTO[]} | null;
  loading: boolean;
}
const initialForecastState: IForecastState = {
  weatherData: [],
  fiveDay: null,
  loading: false
}

const forecastReducer = (state = initialForecastState, action: IAction<{cityName: string, cityData: IForecastDTO}|ICityWeather>) => {
  switch (action.type) {
    case forecastActionTypes.GET_WEATHER_FOR_CITIES: {
      return {
        ...state,
        loading: true,
      };
    }
    case forecastActionTypes.GET_FORECAST_FOR_CITY: {
      return {
        ...state,
        loading: true,
        fiveDay: null
      };
    }
    case forecastActionTypes.GET_WEATHER_FOR_CITIES_SUCCESS: {
      const newWeatherData = [...state.weatherData];
      newWeatherData.push(action.payload as ICityWeather);
      return {
        ...state,
        loading: false,
        weatherData: newWeatherData
      }
    }
    case forecastActionTypes.GET_FORECAST_FOR_CITY_SUCCESS: {
      const cityDataArray = forecastHandler((action.payload as {cityName: string, cityData: IForecastDTO}).cityData.list);
      console.log(cityDataArray);
      return {
        ...state,
        loading: false,
        fiveDay: {
          cityName: (action.payload as {cityName: string, cityData: IForecastDTO}).cityName,
          cityData: cityDataArray
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default forecastReducer;
