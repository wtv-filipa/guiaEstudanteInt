/* eslint-disable import/no-anonymous-default-export */
import {
  PROFILES_GET_START,
  PROFILES_GET_SUCCESS,
  PROFILES_GET_ERROR,
  PROFILE_GET_START,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_ERROR,
  PROFILES_CREATE_START,
  PROFILES_CREATE_SUCCESS,
  PROFILES_CREATE_ERROR,
  PROFILES_UPDATE_START,
  PROFILES_UPDATE_SUCCESS,
  PROFILES_UPDATE_ERROR,
} from "../actions/constants";

const initialState = {
  isLoading: false,
  isError: false,
  isCreated: false,
  isCreatedError: false,
  isUpdated: false,
  isUpdatedError: false,
  isFirstLogin: false,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  let data;

  switch (type) {
    case PROFILES_GET_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
      };
    case PROFILES_GET_SUCCESS:
      return {
        data: payload,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
      };
    case PROFILES_GET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
      };
    case PROFILES_CREATE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
      };
    case PROFILES_CREATE_SUCCESS:
      return {
        ...state,
        data: [...state.data, payload],
        isLoading: false,
        isError: false,
        isCreated: true,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
      };
    case PROFILES_CREATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: true,
        isUpdated: false,
        isUpdatedError: false,
      };
    case PROFILES_UPDATE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
      };
    case PROFILES_UPDATE_SUCCESS:
      data = state.data.map((profile) => {
        if (profile.email !== payload.email) {
          return profile;
        }
        return payload;
      });
      return {
        ...state,
        data,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: true,
        isUpdatedError: false,
        isFirstLogin: {
          ...state.isFirstLogin,
          email:payload.email,
          curso:payload.curso,
          departamento:payload.departamento,
        }
      };
    case PROFILES_UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: true,
      };
    case PROFILE_GET_START:
      return {
        ...state,
        isFirstLogin: {},
        isError: false
      };
    case PROFILE_GET_SUCCESS:
      return {
        ...state,
        isFirstLogin: payload,
        isError: false
      };
    case PROFILE_GET_ERROR:
      return {
        ...state,
        isFirstLogin: {},
        isError: true
      };
    default:
      return state;
  }
};


export const getIsFirstLogin = (state) => {
  return state.isFirstLogin;
}
export const getProfileId = (state) => {
  return state.isFirstLogin.id;
}

export const profileError= (state) => {
  return state.isError;
}