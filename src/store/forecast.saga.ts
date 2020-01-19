import * as forecastActionTypes from './forecast.action-types';
import * as service from './forecast.service';
import * as actions from './forecast.actions';
import {all, call, put, select, takeLatest} from "redux-saga/effects";
import {IAction} from "../model/action";
import {IWeatherDTO} from "../model/weather-dto";

export const cityList = ['Zagreb', 'Edinburgh'];

function* getForecastForCity(action: IAction<string>) {
  try {
    const cityData = yield call(service.getFiveDayForecast, action.payload as string);
    yield put(actions.getForecastForCitySuccessAction({cityName: action.payload as string, cityData}));

  } catch(error) {
  }
}
function* getWeatherForCities(action: IAction<undefined>) {
  try{
    const storeData = yield select((state) => state.forecast.weatherData);
    if(storeData.length === 0) {
      const cities = cityList;
      yield all(cities.map(city => call(getWeatherForCity, city)));
    }
  } catch(error) {
  }
}
function* getWeatherForCity(city: string) {
  try {
    const cityData: IWeatherDTO = yield call(service.getCityWeather, city);
    yield put(actions.getWeatherForCitiesSuccessAction({name: city, data: cityData}))
  } catch(error) {
  }
}
export function* watchForecastSaga() {
  yield takeLatest(forecastActionTypes.GET_FORECAST_FOR_CITY, getForecastForCity);
  yield takeLatest(forecastActionTypes.GET_WEATHER_FOR_CITIES, getWeatherForCities);
}
