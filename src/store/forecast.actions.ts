import * as forecastActionTypes from './forecast.action-types';
import {IForecastDTO} from "../model/weather-dto";
import {ICityWeather} from "../model/city-weather";

export const getWeatherForCitiesAction = () => ({ type: forecastActionTypes.GET_WEATHER_FOR_CITIES });

export const getWeatherForCitiesSuccessAction = (payload: ICityWeather) => (
    { type: forecastActionTypes.GET_WEATHER_FOR_CITIES_SUCCESS, payload});

export const getForecastForCityAction = (cityName: string) => (
    { type: forecastActionTypes.GET_FORECAST_FOR_CITY, payload: cityName});

export const getForecastForCitySuccessAction = (payload: {cityName: string, cityData: IForecastDTO}) => (
    { type: forecastActionTypes.GET_FORECAST_FOR_CITY_SUCCESS, payload });
