import {
    getIsFirstLogin, 
    getProfileId,
} from "../reducers";

export const selectIsFirstLogin = (state) => getIsFirstLogin(state.profile);

export const selectProfileId = (state) => getProfileId(state.profile);

