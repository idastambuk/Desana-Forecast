import axios, {AxiosResponse} from "axios";
import {IForecastDTO, IWeatherDTO} from "../model/weather-dto";

export const BASE_URL = 'http://api.openweathermap.org/data/2.5/';
export const API_KEY = '3b9cf926ba2eba75d1fa7d3ecce916e4';

export const getCityWeather = (cityName: string): Promise<IWeatherDTO> => {
  return axios.get(`${BASE_URL}weather?q=${cityName}&units=metric&APPID=${API_KEY}`)
      .then((response: AxiosResponse<any>) => {
        return response.data;
      }).catch(error => {
        throw(error);
      });
};

export const getFiveDayForecast = (cityName: string): Promise<IForecastDTO> => {
  return axios.get(`${BASE_URL}forecast?q=${cityName}&units=metric&APPID=${API_KEY}`)
      .then((response: AxiosResponse<any>) => {
        return response.data;
      }).catch(error => {
        throw(error);
      });
};
