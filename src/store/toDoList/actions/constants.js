export const TODO_GET_START = 'todo/get:start';
export const TODO_GET_SUCCESS = 'todo/get:success';
export const TODO_GET_ERROR = 'todo/get:error';

export const TODO_CREATE_START = 'todo/create:start';
export const TODO_CREATE_SUCCESS = 'todo/create:success';
export const TODO_CREATE_ERROR = 'todo/create:error';

export const TODO_UPDATE_START = 'todo/update:start';
export const TODO_UPDATE_SUCCESS = 'todo/update:success';
export const TODO_UPDATE_ERROR = 'todo/update:error';

export const setToDo = (payload) => {
    return {
        type: TODO_GET_SUCCESS,
        payload
    }
}
