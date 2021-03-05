import {
  AUTH_FETCH_START,
  AUTH_FETCH_SUCCESS,
  AUTH_FETCH_FAILURE,
  AUTH_LOGOUT,
  AUTH_SET_ICON,
  AUTH_UPDATE_SUCCESS,
  AUTH_UPDATE_ERROR,
  AUTH_UPDATE_START,
  AUTH_CREATE_START,
  AUTH_CREATE_SUCCESS,
  AUTH_CREATE_ERROR,
  AUTH_GET_START,
  AUTH_GET_SUCCESS,
  AUTH_GET_ERROR,
  AUTH_SET_WELCOME_MODAL,
} from "../actions/constants";

const initialState = {
  isLoading: false,
  isError: false,
  user: {},
  isLogged: false,
  userIcon: "",
  isCreated: false,
  isCreatedError: false,
  isUpdated: false,
  isUpdatedError: false,
  profile: false,
  showWelcomeModal: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_FETCH_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isLogged: false,
        userIcon: "",
        isUpdated: false,
        isUpdatedError: false,
      };
    case AUTH_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: payload,
        isLogged: true,
        isUpdated: false,
        isUpdatedError: false,
      };
    case AUTH_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLogged: false,
        isUpdated: false,
        isUpdatedError: false,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        isLogged: false,
        user: {},
        userIcon: "",
        isUpdated: false,
        isUpdatedError: false,
      };
    case AUTH_SET_ICON:
      return {
        ...state,
        userIcon: payload,
        isUpdated: false,
        isUpdatedError: false,
      };
    case AUTH_CREATE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
      };
    case AUTH_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: true,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
      };
    case AUTH_CREATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: true,
        isUpdated: false,
        isUpdatedError: false,
      };
    case AUTH_UPDATE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
      };
    case AUTH_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: true,
        isUpdatedError: false,
        profile: {
          ...state.profile,
          email: payload.email,
          curso: payload.curso,
          departamento: payload.departamento,
        },
      };
    case AUTH_UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: true,
      };
    case AUTH_GET_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        profile: {},
        isUpdated: false,
        isUpdatedError: false,
      };
    case AUTH_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        profile: payload,
        isUpdated: false,
        isUpdatedError: false,
      };
    case AUTH_GET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        profile: {},
        isUpdated: false,
        isUpdatedError: false,
      };
    case AUTH_SET_WELCOME_MODAL:
      return {
        ...state,
        showWelcomeModal: payload,
      };

    default:
      return state;
  }
};

export const getAuthUser = (state) => {
  return state.user;
};
export const getAuthUserIsLogged = (state) => {
  return state.isLogged;
};

export const getAuthUserIcon = (state) => {
  return state.userIcon;
};

export const getProfile = (state) => {
  return state.profile;
};
export const getProfileId = (state) => {
  return state.profile.id;
};

export const getLoadingProfile = (state) => {
  return state.isLoading;
};

export const getShowWelcomeModal = (state) => {
  return state.showWelcomeModal;
};

export const profileError = (state) => {
  return state.isError;
};

export const profileIsUpdated = (state) => {
  return state.isUpdated;
};

export const profileIsUpdatedError = (state) => {
  return state.isUpdatedError;
};
