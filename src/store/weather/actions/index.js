import { fetchWeatherAPI } from "../../../api";
import {
  WEATHER_FETCH_START,
  WEATHER_FETCH_SUCCESS,
  WEATHER_FETCH_FAILURE,
} from "./constants";

export const getWeather = () => {
  return (dispatch) => {
    dispatch({ type: WEATHER_FETCH_START });

    fetchWeatherAPI()
      .then((response) => response.data)
      .then((weather) => {
        dispatch({ type: WEATHER_FETCH_SUCCESS, payload: weather });
      })
      .catch(() => dispatch({ type: WEATHER_FETCH_FAILURE }));
  };
};
