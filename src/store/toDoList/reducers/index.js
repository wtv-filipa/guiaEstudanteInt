/* eslint-disable import/no-anonymous-default-export */
import {
  TODO_GET_START,
  TODO_GET_SUCCESS,
  TODO_GET_ERROR,
  TODO_CREATE_START,
  TODO_CREATE_SUCCESS,
  TODO_CREATE_ERROR,
  TODO_UPDATE_START,
  TODO_UPDATE_SUCCESS,
  TODO_UPDATE_ERROR,
} from "../actions/constants";

const initialState = {
  isLoading: false,
  isError: false,
  isCreated: false,
  isCreatedError: false,
  isUpdated: false,
  isUpdatedError: false,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  let data;

  switch (type) {
    case TODO_GET_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        data: [],
      };
    case TODO_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        data: payload,
      };
    case TODO_GET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
      };
    case TODO_CREATE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
      };
    case TODO_CREATE_SUCCESS:
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
    case TODO_CREATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: true,
        isUpdated: false,
        isUpdatedError: false,
      };
    case TODO_UPDATE_START:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
      };
    case TODO_UPDATE_SUCCESS:
      data = state.data.map((todo) => {
        if (todo.id !== payload.id) {
          return todo;
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
        isDeletedError: false,
      };
    case TODO_UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: true,
      };
    default:
      return state;
  }
};

export const getToDo = (state) => {
  return state.data;
};

export const loadingToDo = (state) => {
  return state.isLoading;
};

export const ErrorToDo = (state) => {
  return state.isError;
};

export const ErrorUpdateToDo = (state) => {
  return state.isUpdatedError;
};
