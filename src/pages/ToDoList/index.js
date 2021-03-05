import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ToDoLoading,
  ToDoError,
  ToDoErrorUpdate,
} from "../../store/toDoList/selectors";
import { getToDoList } from "../../store/toDoList/actions";
import ToDoList from "../../components/ToDoList";
import ErrorPage from "../../components/Error";
import Loading from "../../components/Loading";
import {Messages} from "../../components/Messages";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();
  const isError = useSelector((state) => ToDoError(state));
  const isLoading = useSelector((state) => ToDoLoading(state));
  const isUpdatedError = useSelector((state) => ToDoErrorUpdate(state));

  useEffect(() => {
    dispatch(getToDoList());
  }, [dispatch]);

  if (isError) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }

  return (
    <>
      {!isLoading ? (
        <>
          <div id="start" className="fantasmaAncora"></div>
          <div id="main">
            {isUpdatedError && (
              <Messages
                message="Ocorreu um erro a marcar o ponto como feito, por favor tenta novamente."
                changeClass="error-msg"
              />
            )}
            <ToDoList />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
