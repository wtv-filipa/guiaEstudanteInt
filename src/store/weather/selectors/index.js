import {
    getLoadingWeather,
    getWeather,
    weatherError
} from "../reducers";

export const selectGetLoadingWeather = (state) => getLoadingWeather(state.weather);

export const selectGetWeather = (state) => getWeather(state.weather);

export const selectWeatherError = (state) => weatherError(state.weather);