import {
  fetchUserIcon,
  fetchUserToken
} from '../../../api';
import {
  AUTH_FETCH_START,
  setAuthFail,
  setAuthSuccess,
  setAuthUserIconAction,
  AUTH_GET_START,
  AUTH_GET_ERROR,
  AUTH_GET_SUCCESS,
  AUTH_CREATE_START,
  AUTH_CREATE_SUCCESS,
  AUTH_CREATE_ERROR,
  AUTH_UPDATE_START,
  AUTH_UPDATE_SUCCESS,
  AUTH_UPDATE_ERROR,
  setAuthProfile,
} from "./constants";
import {
  fetchProfiles,
  createProfile,
  updateProfile,
  fetchProfile,
} from "../../../api/profiles";
import Cookies from 'universal-cookie';

export const getAuth = code => {
  return dispatch => {
    dispatch({
      type: AUTH_FETCH_START,
    });
    fetchUserToken(code)
      .then(res => {
        const cookies = new Cookies();

        cookies.set('_utkn', res.info);
        cookies.set('_utkFrb', res.token);

        dispatch(
          setAuthSuccess({
            email: res.user.email,
            UA_IUPI: res.user.UA_IUPI,
            name: res.user.name,
          })
        );
      })
      .catch(() => dispatch(setAuthFail()));
  };
};

export const setAuthIcon = (name, token) => {
  return dispatch => {
    fetchUserIcon(name, token)
      // .then((response) => response.data)
      .then(icon => {
        dispatch(setAuthUserIconAction(icon));
      });
  };
};

const cookies = new Cookies();

/*ir buscar*/
export const getProfiles = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH_GET_START
    });

    fetchProfiles()
      .then((profiles) => {
        dispatch({
          type: AUTH_GET_SUCCESS,
          payload: profiles
        });
      })
      .catch(() => dispatch({
        type: AUTH_GET_ERROR
      }));
  };
};
/*ir buscar um*/
export const getProfileInd = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH_GET_START
    });

    fetchProfile()
      .then((profile) => {
        dispatch(setAuthProfile(profile));
      })
      .catch(() => dispatch({
        type: AUTH_GET_ERROR
      }));
  };
};
/*criar perfil*/
export const createProfile1 = (
  UA_IUPI = "",
  name = "",
  img = "",
  email = "",
  curso = "",
  departamento = ""
) => {
  return (dispatch, getState) => {
    const token = cookies.get('_utkFrb');

    dispatch({
      type: AUTH_CREATE_START
    });

    createProfile(token, UA_IUPI, name, img, email, curso, departamento)
      .then((profile) => {
        dispatch({
          type: AUTH_CREATE_SUCCESS,
          payload: profile
        });
      })
      .catch(() => dispatch({
        type: AUTH_CREATE_ERROR
      }));
  };
};
/*editar perfil*/
export const updateProfile1 = (
  id = "",
  email,
  curso = "",
  departamento = ""
) => {
  return (dispatch, getState) => {
    const token = cookies.get('_utkn');
    dispatch({
      type: AUTH_UPDATE_START
    });

    updateProfile(token, id, email, curso, departamento)
      .then((profile) => {
        dispatch({
          type: AUTH_UPDATE_SUCCESS,
          payload: profile
        });
      })
      .catch(() => dispatch({
        type: AUTH_UPDATE_ERROR
      }));
  };
};