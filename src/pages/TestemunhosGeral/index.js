import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestemunhos } from "../../store/testemunhos/actions";
import { selectGetLoadingTestemunhos, selectTestemunhosError} from "../../store/testemunhos/selectors";
import Loading from "../../components/Loading";
import Section from "../../components/Header";
import CreateBtn from "../../components/CreateBTN";
import TestemunhosGeral from "../../components/Testemunhos/Gerais";
import ErrorPage from "../../components/Error";
import Testemunhos from "../../imgs/header/testemunhos.jpg";
import Todo from "../../imgs/Icons/todo.svg";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();
  const isError = useSelector((state) => selectTestemunhosError(state));
  const isLoading = useSelector((state) => selectGetLoadingTestemunhos(state));

  useEffect(() => {
    dispatch(getTestemunhos());
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
          <div id="main" className="marginB_section">
            <Section backgroundImage={Testemunhos} title="Testemunhos" />
            <CreateBtn
              fixTopClass="fixarBTN sticky-top"
              link="/escolhertestemunho"
              icon={Todo}
              iconAlt="Icon criação de testemunho"
              btnName="Criar um novo testemunho"
            />
            <TestemunhosGeral/>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
