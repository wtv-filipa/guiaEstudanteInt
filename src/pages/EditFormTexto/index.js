import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestemunhoById } from "../../store/testemunhos/actions";
import { selectGetLoadingTestemunhos, selectTestemunhosError } from "../../store/testemunhos/selectors";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";
import { useParams } from "react-router";
import EditTestemunhoTexto from "../../components/Testemunhos/EditForms/EditText";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();
  const isError = useSelector((state) => selectTestemunhosError(state));
  const isLoading = useSelector((state) => selectGetLoadingTestemunhos(state));

  const { id } = useParams();

  useEffect(() => {
    dispatch(getTestemunhoById(id));
  }, [dispatch, id]);

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
          <div id="main">
            <EditTestemunhoTexto id={id} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
