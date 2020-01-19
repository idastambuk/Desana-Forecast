export interface IWeatherDTO {
  dt_txt: string;
  weather: {
    main: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  }
}

export interface IForecastDTO {
  list: IWeatherDTO[]
}
