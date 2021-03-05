import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditarPerfil from "../../components/EditarPerfil";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";
import {Messages} from "../../components/Messages";
import {
  selectGetLoadingProfile,
  selectProfileError,
  IsUpdatedProfile,
  IsUpdatedErrorProfile,
} from "../../store/auth/selectors";
import { getProfileInd } from "../../store/auth/actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();
  const isError = useSelector((state) => selectProfileError(state));
  const isLoading = useSelector((state) => selectGetLoadingProfile(state));
  const isUpdatedError = useSelector((state) => IsUpdatedErrorProfile(state));
  const isUpdatedSuccess = useSelector((state) => IsUpdatedProfile(state));

  useEffect(() => {
    dispatch(getProfileInd());
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
                message="Ocorreu a editar o teu perfil, por favor tenta novamente."
                changeClass="error-msg"
              />
            )}
            {isUpdatedSuccess && (
              <Messages
                message="O teu perfil foi editado com sucesso!"
                changeClass="success-msg"
              />
            )}
            <EditarPerfil />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
