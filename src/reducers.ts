import forecastReducer, {IForecastState} from "./store/forecast.reducer";

export interface IAppState {
  forecast: IForecastState
}

export const reducers = {
  forecast: forecastReducer
};
