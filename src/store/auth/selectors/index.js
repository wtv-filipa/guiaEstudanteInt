import {
    getAuthUser,
    getAuthUserIcon,
    getAuthUserIsLogged,
    getProfile,
    getProfileId,
    getShowWelcomeModal,
    getLoadingProfile,
    profileError,
    profileIsUpdated,
    profileIsUpdatedError,
} from "../reducers";

export const selectAuthState = (state) => state.auth;

export const selectAuthUser = (state) => getAuthUser(state.auth);

export const selectAuthUserIsLogged = (state) => getAuthUserIsLogged(state.auth);

export const selectAuthUserIcon = (state) => getAuthUserIcon(state.auth);

export const selectGetProfile = (state) => getProfile(state.auth);

export const selectGetProfileId = (state) => getProfileId(state.auth);

export const selectGetLoadingProfile = (state) => getLoadingProfile(state.auth);

export const selectShowWelcomeModal = (state) => getShowWelcomeModal(state.auth);

export const selectProfileError = (state) => profileError(state.auth);

export const IsUpdatedProfile = (state) => profileIsUpdated(state.auth);

export const IsUpdatedErrorProfile = (state) => profileIsUpdatedError(state.auth);