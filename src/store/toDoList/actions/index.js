import {
  TODO_GET_START,
  TODO_GET_ERROR,
  TODO_CREATE_START,
  TODO_CREATE_SUCCESS,
  TODO_CREATE_ERROR,
  TODO_UPDATE_START,
  TODO_UPDATE_SUCCESS,
  TODO_UPDATE_ERROR,
  setToDo,
} from "./constants";
import {
  fetchToDoList,
  createToDoList,
  updateToDoList,
} from "../../../api/todo";
import Cookies from "universal-cookie";

const cookies = new Cookies();

/*ir buscar uma todo*/
export const getToDoList = (UA_IUPI) => {
  return (dispatch) => {
    dispatch({
      type: TODO_GET_START,
    });

    fetchToDoList(UA_IUPI)
      .then((todo) => {
        dispatch(setToDo(todo));
      })
      .catch(() =>
        dispatch({
          type: TODO_GET_ERROR,
        })
      );
  };
};
/*criar uma todo*/
export const createToDoList1 = (
  UA_IUPI = "",
  Aveiro = "",
  chegada = "",
  Preparar = ""
) => {
  return (dispatch) => {
    const token = cookies.get("_utkFrb");

    dispatch({
      type: TODO_CREATE_START,
    });

    createToDoList(token, UA_IUPI, Aveiro, chegada, Preparar)
      .then((todo) => {
        dispatch({
          type: TODO_CREATE_SUCCESS,
          payload: todo,
        });
      })
      .catch(() =>
        dispatch({
          type: TODO_CREATE_ERROR,
        })
      );
  };
};
/*editar todo*/
export const updateToDoList1 = (
  id = "",
  Aveiro = "",
  chegada = "",
  Preparar = ""
) => {
  return (dispatch, getState) => {
    const token = cookies.get("_utkn");
    dispatch({
      type: TODO_UPDATE_START,
    });

    updateToDoList(token, id, Aveiro, chegada, Preparar)
      .then((todo) => {
        dispatch({
          type: TODO_UPDATE_SUCCESS,
          payload: todo,
        });
      })
      .catch(() =>
        dispatch({
          type: TODO_UPDATE_ERROR,
        })
      );
  };
};
