import {
  TESTEMUNHO_GET_START,
  TESTEMUNHO_GET_SUCCESS,
  TESTEMUNHO_GET_ERROR,
  TESTEMUNHOID_GET_START,
  TESTEMUNHOID_GET_SUCCESS,
  TESTEMUNHOID_GET_ERROR,
  TESTEMUNHO_CREATE_START,
  TESTEMUNHO_CREATE_SUCCESS,
  TESTEMUNHO_CREATE_ERROR,
  TESTEMUNHO_UPDATE_START,
  TESTEMUNHO_UPDATE_SUCCESS,
  TESTEMUNHO_UPDATE_ERROR,
  TESTEMUNHO_DELETE_START,
  TESTEMUNHO_DELETE_SUCCESS,
  TESTEMUNHO_DELETE_ERROR,
  TESTEMUNHO_RESETE_STATE,
} from "../actions/constants";

const initialState = {
  isLoading: false,
  isError: false,
  isCreated: false,
  isCreatedError: false,
  isUpdated: false,
  isUpdatedError: false,
  isDeleted: false,
  isDeletedError: false,
  showMessage: false,
  data: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  let data;

  switch (type) {
    case TESTEMUNHO_GET_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isDeleted: false,
        isDeletedError: false,
        data: [],
      };
    case TESTEMUNHO_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isDeleted: false,
        isDeletedError: false,
        data: payload,
      };
    case TESTEMUNHO_GET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isDeleted: false,
        isDeletedError: false,
        data: payload,
      };
    case TESTEMUNHOID_GET_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeleted: false,
        isDeletedError: false,
        data: {},
      };
    case TESTEMUNHOID_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeleted: false,
        isDeletedError: false,
        data: payload,
      };
    case TESTEMUNHOID_GET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeleted: false,
        isDeletedError: false,
      };
    case TESTEMUNHO_CREATE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeleted: false,
        isDeletedError: false,
      };
    case TESTEMUNHO_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: true,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeleted: false,
        isDeletedError: false,
        data: [...state.data, payload],
      };
    case TESTEMUNHO_CREATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: true,
        isUpdated: false,
        isUpdatedError: false,
        isDeleted: false,
        isDeletedError: false,
      };
    case TESTEMUNHO_UPDATE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeleted: false,
        isDeletedError: false,
      };
    case TESTEMUNHO_UPDATE_SUCCESS:
      data = state.data.map((com) => {
        if (com.id !== payload.id) {
          return com;
        }

        return payload;
      });
      return {
        ...state,
        data,
        isLoading: false,
        isError: false,
        isUpdated: true,
        isUpdatedError: false,
        isDeleted: false,
        isDeletedError: false,
      };
    case TESTEMUNHO_UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isUpdated: false,
        isUpdatedError: true,
        isDeleted: false,
        isDeletedError: false,
      };
    case TESTEMUNHO_DELETE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeleted: false,
        isDeletedError: false,
      };
    case TESTEMUNHO_DELETE_SUCCESS:
      data = state.data.filter((com) => com.id !== payload);
      return {
        ...state,
        data,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeleted: true,
        isDeletedError: false,
      };
    case TESTEMUNHO_DELETE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeleted: false,
        isDeletedError: true,
      };
    case TESTEMUNHO_RESETE_STATE:
      return {
        ...state,
        showMessage: payload,
      };
    default:
      return state;
  }
};

export const getTestemunhos = (state) => {
  return state.data;
};

export const getLoadingTestemunhos = (state) => {
  return state.isLoading;
};

export const testemunhosError = (state) => {
  return state.isError;
};

export const testemunhosCreateSuccess = (state) => {
  return state.isCreated;
};

export const testemunhosCreateError = (state) => {
  return state.isCreatedError;
};

export const testemunhosUpdateSuccess = (state) => {
  return state.isUpdated;
};

export const testemunhosUpdateError = (state) => {
  return state.isUpdatedError;
};

export const testemunhosDeleteSuccess = (state) => {
  return state.isDeleted;
};

export const testemunhosDeleteError = (state) => {
  return state.isDeletedError;
};

export const getShowMessages = (state) => {
  return state.showMessage;
};