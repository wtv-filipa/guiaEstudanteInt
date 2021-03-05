export const TESTEMUNHOID_GET_START = 'testemunhoid/get:start';
export const TESTEMUNHOID_GET_SUCCESS = 'testemunhoid/get:success';
export const TESTEMUNHOID_GET_ERROR = 'testemunho/get:error';

export const TESTEMUNHO_GET_START = 'testemunho/get:start';
export const TESTEMUNHO_GET_SUCCESS = 'testemunho/get:success';
export const TESTEMUNHO_GET_ERROR = 'testemunho/get:error';

export const TESTEMUNHO_CREATE_START = 'testemunho/create:start';
export const TESTEMUNHO_CREATE_SUCCESS = 'testemunho/create:success';
export const TESTEMUNHO_CREATE_ERROR = 'testemunho/create:error';

export const TESTEMUNHO_UPDATE_START = 'testemunho/update:start';
export const TESTEMUNHO_UPDATE_SUCCESS = 'testemunho/update:success';
export const TESTEMUNHO_UPDATE_ERROR = 'testemunho/update:error';

export const TESTEMUNHO_DELETE_START = 'testemunho/delete:start';
export const TESTEMUNHO_DELETE_SUCCESS = 'testemunho/delete:success';
export const TESTEMUNHO_DELETE_ERROR = 'testemunho/delete:error';

export const TESTEMUNHO_RESETE_STATE = 'testemunho/set:showMessages';

export const setshowMessages = (payload) => {
    return {
        type: TESTEMUNHO_RESETE_STATE,
        payload
    }
}