import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TestemunhoIndividual from "../../components/Testemunhos/Individual";
import { getTestemunhoById } from "../../store/testemunhos/actions";
import {
  selectGetLoadingTestemunhos,
  selectTestemunhosError,
} from "../../store/testemunhos/selectors";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";

import { useParams } from "react-router";

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
          <div id="start" className="fantasmaAncora"></div>
          <div id="main">
            <TestemunhoIndividual id={id} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
