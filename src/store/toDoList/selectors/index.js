import { 
    getToDo, 
    loadingToDo, 
    ErrorToDo,
    ErrorUpdateToDo 
} from "../reducers";

export const selectToDo = (state) => getToDo(state.todo);

export const ToDoLoading = (state) => loadingToDo(state.todo);

export const ToDoError = (state) => ErrorToDo(state.todo);

export const ToDoErrorUpdate = (state) => ErrorUpdateToDo(state.todo);
