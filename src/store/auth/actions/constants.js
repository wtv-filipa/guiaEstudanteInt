export const AUTH_FETCH_START = 'auth/fetch:code';
export const AUTH_FETCH_SUCCESS = 'auth/fetch:success';
export const AUTH_FETCH_FAILURE = 'auth/fetch:failure';
export const AUTH_LOGOUT = 'auth/logout';
export const AUTH_SET_ICON = 'auth/setIcon';


export const AUTH_CREATE_START = 'auth/create:start';
export const AUTH_CREATE_SUCCESS = 'auth/create:success';
export const AUTH_CREATE_ERROR = 'auth/create:error';


export const AUTH_UPDATE_START = 'auth/update:start';
export const AUTH_UPDATE_SUCCESS = 'auth/update:success';
export const AUTH_UPDATE_ERROR = 'auth/update:error';

export const AUTH_GET_START = 'auth/get:start';
export const AUTH_GET_SUCCESS = 'auth/get:success';
export const AUTH_GET_ERROR = 'auth/get:error';

export const AUTH_SET_WELCOME_MODAL = 'auth/set:showWelcomeModal';



export const setAuth = () => {
    return {
        type: AUTH_FETCH_START
    }
}
export const setAuthSuccess = (payload) => {
    return {
        type: AUTH_FETCH_SUCCESS,
        payload
    }
}
export const setAuthFail = () => {
    return {
        type: AUTH_FETCH_FAILURE
    }
}

export const setAuthLogout = () => {
    return {
        type: AUTH_LOGOUT
    }
}

export const setAuthUserIconAction = (payload) => {
    return {
        type: AUTH_SET_ICON,
        payload
    }
}

export const setAuthProfile = (payload) => {
    return {
        type: AUTH_GET_SUCCESS,
        payload
    }
}

export const setAuthProfileReset = () => {
    return {
        type: AUTH_GET_SUCCESS,
        payload:{}
    }
}

export const setShowWelcomeModal = (payload) => {
    return {
        type: AUTH_SET_WELCOME_MODAL,
        payload
    }
}


