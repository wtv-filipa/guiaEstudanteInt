export const PROFILES_GET_START = 'profiles/get:start';
export const PROFILES_GET_SUCCESS = 'profiles/get:success';
export const PROFILES_GET_ERROR = 'profiles/get:error';

export const PROFILE_GET_START = 'profile/get:start';
export const PROFILE_GET_SUCCESS = 'profile/get:success';
export const PROFILE_GET_ERROR = 'profile/get:error';

export const PROFILES_CREATE_START = 'profiles/create:start';
export const PROFILES_CREATE_SUCCESS = 'profiles/create:success';
export const PROFILES_CREATE_ERROR = 'profiles/create:error';

export const PROFILES_UPDATE_START = 'profiles/update:start';
export const PROFILES_UPDATE_SUCCESS = 'profiles/update:success';
export const PROFILES_UPDATE_ERROR = 'profiles/update:error';

export const setProfile = (payload) => {
    return {
        type: PROFILE_GET_SUCCESS,
        payload
    }
}

export const setProfileReset = () => {
    return {
        type: PROFILE_GET_SUCCESS,
        payload:{}
    }
}