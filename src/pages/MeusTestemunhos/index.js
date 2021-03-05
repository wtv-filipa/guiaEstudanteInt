import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestemunhosUser } from "../../store/testemunhos/actions";
import ErrorPage from "../../components/Error";
import {
  selectGetLoadingTestemunhos,
  selectTestemunhosError,
  createTestemunhosSuccess,
  updateTestemunhosSuccess,
  createTestemunhosError,
  updateTestemunhosError,
  deleteTestemunhosSuccess,
  deleteTestemunhosError,
  selectShowMessages,
} from "../../store/testemunhos/selectors";
import { setshowMessages } from "../../store/testemunhos/actions/constants";
import Loading from "../../components/Loading";

import CreateBtn from "../../components/CreateBTN";
import MeusTestemunhos from "../../components/Testemunhos/Pessoais";
import { Messages, Messages2 } from "../../components/Messages";
import Todo from "../../imgs/Icons/todo.svg";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();

  const [showMessages, setMessages] = useState(false);

  const isError = useSelector((state) => selectTestemunhosError(state));
  const isLoading = useSelector((state) => selectGetLoadingTestemunhos(state));
  const isCreatedSuccess = useSelector((state) =>
    createTestemunhosSuccess(state)
  );
  const isUpdatedSuccess = useSelector((state) =>
    updateTestemunhosSuccess(state)
  );
  const isCreatedError = useSelector((state) => createTestemunhosError(state));
  const isUpdatedError = useSelector((state) => updateTestemunhosError(state));
  const isDeleted = useSelector((state) => deleteTestemunhosSuccess(state));
  const isDeletedError = useSelector((state) => deleteTestemunhosError(state));
  const showMessagesState = useSelector(selectShowMessages);

  useEffect(() => {
    if (showMessagesState) {
      setMessages(true);
    }
  }, [dispatch, showMessagesState]);

  useEffect(() => {
    dispatch(getTestemunhosUser());
  }, [dispatch]);

  if (isError) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }
  const handleMessageClose = () => {
    dispatch(setshowMessages(false));
    setMessages(false);
  };

  return (
    <>
      {!isLoading ? (
        <>
          <div id="start" className="fantasmaAncora"></div>
          <div id="main">
            <CreateBtn
              fixTopClass="fixarBTN sticky-top"
              link="/escolhertestemunho"
              icon={Todo}
              iconAlt="Icon criação de testemunho"
              btnName="Criar um novo testemunho"
            />
            {isCreatedSuccess && showMessages && (
              <Messages2
                message="Testemunho criado com sucesso!"
                changeClass="success-msg"
                onDismiss={handleMessageClose}
              />
            )}
            {isUpdatedSuccess && showMessages && (
              <Messages2
                message="Testemunho editado com sucesso!"
                changeClass="success-msg"
                onDismiss={handleMessageClose}
              />
            )}
            {isCreatedError && showMessages && (
              <Messages2
                message="Ocorreu um erro a criar o teu testemunho, por favor tenta novamente."
                changeClass="error-msg"
                onDismiss={handleMessageClose}
              />
            )}
            {isUpdatedError && showMessages && (
              <Messages2
                message="Ocorreu um erro ao editar o teu testemunho, por favor tenta novamente."
                changeClass="error-msg"
                onDismiss={handleMessageClose}
              />
            )}
            {isDeleted && (
              <Messages
                message="Testemunho eliminado com sucesso!"
                changeClass="success-msg"
              />
            )}
            {isDeletedError && (
              <Messages
                message="Ocorreu um erro a eliminar o teu testemunho, por favor tenta novamente."
                changeClass="error-msg"
              />
            )}
            <MeusTestemunhos />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
