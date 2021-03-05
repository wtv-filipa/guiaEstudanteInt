import {
    WEATHER_FETCH_START,
    WEATHER_FETCH_SUCCESS,
    WEATHER_FETCH_FAILURE
  } from '../actions/constants';
  
  const initialState = {
    isLoading: false,
    isError: false,
    data: []
  }
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case WEATHER_FETCH_START:
        return {
          ...state,
          isLoading: true,
          isError: false,
          data: []
        };
      case WEATHER_FETCH_SUCCESS:
        return {
          data: payload,
          isLoading: false,
          isError: false,
        };
      case WEATHER_FETCH_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  }

  export const getLoadingWeather = (state) => {
    return state.isLoading;
  }
  export const getWeather = (state) => {
    return state.data;
  }
  export const weatherError = (state) => {
    return state.isError;
  }