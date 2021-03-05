import {
  TESTEMUNHOID_GET_START,
  TESTEMUNHOID_GET_SUCCESS,
  TESTEMUNHOID_GET_ERROR,
  TESTEMUNHO_GET_START,
  TESTEMUNHO_GET_SUCCESS,
  TESTEMUNHO_GET_ERROR,
  TESTEMUNHO_CREATE_START,
  TESTEMUNHO_CREATE_SUCCESS,
  TESTEMUNHO_CREATE_ERROR,
  TESTEMUNHO_UPDATE_START,
  TESTEMUNHO_UPDATE_SUCCESS,
  TESTEMUNHO_UPDATE_ERROR,
  TESTEMUNHO_DELETE_START,
  TESTEMUNHO_DELETE_SUCCESS,
  TESTEMUNHO_DELETE_ERROR,
} from "./constants";
import {
  fetchTestemunhos,
  fetchTestemunhosUser,
  fetchTestemunhoById,
  createTestemunho,
  updateTestemunho,
  deleteTestemunho,
} from "../../../api/testemunhos";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getTestemunhos = () => {
  return (dispatch) => {
    dispatch({ type: TESTEMUNHO_GET_START });

    fetchTestemunhos()
      .then((testemunhos) => {
        dispatch({ type: TESTEMUNHO_GET_SUCCESS, payload: testemunhos });
      })
      .catch(() => dispatch({ type: TESTEMUNHO_GET_ERROR }));
  };
};

export const getTestemunhosUser = () => {
  return (dispatch) => {
    dispatch({ type: TESTEMUNHO_GET_START });

    fetchTestemunhosUser()
      .then((testemunhos) => {
        dispatch({ type: TESTEMUNHO_GET_SUCCESS, payload: testemunhos });
      })
      .catch(() => dispatch({ type: TESTEMUNHO_GET_ERROR }));
  };
};

export const getTestemunhoById = (id) => {
  return (dispatch) => {
    dispatch({ type: TESTEMUNHOID_GET_START });

    fetchTestemunhoById(id)
      .then((testemunhos) => {
        dispatch({ type: TESTEMUNHOID_GET_SUCCESS, payload: testemunhos });
      })
      .catch(() => dispatch({ type: TESTEMUNHOID_GET_ERROR }));
  };
};

export const createTestemunho1 = (
  UA_IUPI = "",
  testemunho = "",
  frase = "",
  tipo = ""
) => {
  return (dispatch) => {
    const token = cookies.get("_utkFrb");
    dispatch({ type: TESTEMUNHO_CREATE_START });

    createTestemunho(token, UA_IUPI, testemunho, frase, tipo)
      .then((testemunho) => {
        dispatch({ type: TESTEMUNHO_CREATE_SUCCESS, payload: testemunho });
      })
      .catch(() => dispatch({ type: TESTEMUNHO_CREATE_ERROR }));
  };
};

export const updateTestemunho1 = (id, testemunho = "", frase = "", tipo) => {
  return (dispatch) => {
    const token = cookies.get('_utkn');
    dispatch({
      type: TESTEMUNHO_UPDATE_START,
    });

    updateTestemunho(token, id, testemunho, frase, tipo)
      .then((testemunho) => {
        dispatch({ 
          type: TESTEMUNHO_UPDATE_SUCCESS, 
          payload: testemunho });
      })
      .catch(() => dispatch({ 
        type: TESTEMUNHO_UPDATE_ERROR 
      }));
  };
};

export const deleteTestemunho1 = (id) => {
  return (dispatch, getState) => {
    const token = cookies.get('_utkn');
    dispatch({ type: TESTEMUNHO_DELETE_START });

    deleteTestemunho(token, id)
      .then(() => {
        dispatch({ type: TESTEMUNHO_DELETE_SUCCESS, payload: id });
      })
      .catch(() => dispatch({ type: TESTEMUNHO_DELETE_ERROR }));
  };
};
