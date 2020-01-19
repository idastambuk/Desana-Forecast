import moment from "moment";
import {IWeatherDTO} from "../model/weather-dto";

export const forecastHandler = (list: IWeatherDTO[]) => {
  let forecastMatrix = [];
  let date = formatDate(list[0].dt_txt);
  let index = 0;
  let temp_arr = [];
  for(let item of list) {
    if (formatDate(item.dt_txt) === date) {
      temp_arr.push(item);
    }
    else {
      forecastMatrix[index] = temp_arr;
      temp_arr = [];
      index++;
      date = formatDate(item.dt_txt);
      temp_arr.push(item);
    }
  }
  forecastMatrix[index] = temp_arr;
  return medianForecastHandler(forecastMatrix)
}

export const medianForecastHandler = (forecastMatrix: IWeatherDTO[][]) => {
  let forecastMedian = [];
  for(let arr of forecastMatrix) {

    //Min max temperature counter
    let temp_min = arr[0].main.temp;
    let temp_max = arr[0].main.temp;
    let weather = arr[0].weather;

    for (let item of arr) {
      if(item.main.temp < temp_min) {
        temp_min = item.main.temp;
      }
      else if(item.main.temp > temp_max) {
        temp_max = item.main.temp;
      }
    }
    ///
    let index = Math.round(arr.length/2);

    let day: IWeatherDTO = {
      dt_txt: arr[index].dt_txt,
      weather: weather,
      main: {
        temp: temp_max,
        temp_min: temp_min,
        temp_max: temp_max,
      }
    }
    forecastMedian.push(day);
  }
  return forecastMedian.slice(1,6);
}

export const formatDate = (date: string) => {
  return moment(date, 'YYYY-MM-DD HH:mm:ss').format('DD.MM.YYYY');
}
