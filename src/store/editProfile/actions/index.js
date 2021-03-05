import {
  PROFILES_GET_START,
  PROFILES_GET_SUCCESS,
  PROFILES_GET_ERROR,
  PROFILE_GET_START,
  PROFILE_GET_ERROR,
  PROFILES_CREATE_START,
  PROFILES_CREATE_SUCCESS,
  PROFILES_CREATE_ERROR,
  PROFILES_UPDATE_START,
  PROFILES_UPDATE_SUCCESS,
  PROFILES_UPDATE_ERROR,
  setProfile,
} from "./constants";
import {
  fetchProfiles,
  createProfile,
  updateProfile,
  fetchProfile,
} from "../../../api/profiles";
import Cookies from "universal-cookie";

const cookies = new Cookies();

/*ir buscar*/
export const getProfiles = () => {
  return (dispatch) => {
    dispatch({
      type: PROFILES_GET_START
    });

    fetchProfiles()
      .then((profiles) => {
        dispatch({
          type: PROFILES_GET_SUCCESS,
          payload: profiles
        });
      })
      .catch(() => dispatch({
        type: PROFILES_GET_ERROR
      }));
  };
};
/*ir buscar um*/
export const getProfileInd = (email) => {
  return (dispatch) => {
    dispatch({
      type: PROFILE_GET_START
    });

    fetchProfile(email)
      .then((profile) => {
        dispatch(setProfile(profile));
      })
      .catch(() => dispatch({
        type: PROFILE_GET_ERROR
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
      type: PROFILES_CREATE_START
    });

    createProfile(token, UA_IUPI, name, img, email, curso, departamento)
      .then((profile) => {
        dispatch({
          type: PROFILES_CREATE_SUCCESS,
          payload: profile
        });
      })
      .catch(() => dispatch({
        type: PROFILES_CREATE_ERROR
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
      type: PROFILES_UPDATE_START
    });

    updateProfile(token, id, email, curso, departamento)
      .then((profile) => {
        dispatch({
          type: PROFILES_UPDATE_SUCCESS,
          payload: profile
        });
      })
      .catch(() => dispatch({
        type: PROFILES_UPDATE_ERROR
      }));
  };
};