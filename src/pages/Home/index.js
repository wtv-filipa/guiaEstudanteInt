import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestemunhos } from "../../store/testemunhos/actions";
import { selectGetLoadingTestemunhos, selectTestemunhosError } from "../../store/testemunhos/selectors";
import ErrorPage from "../../components/Error";
import Loading from "../../components/Loading";
import Section from "../../components/Home";
import WelcomeModal from "../../components/WelcomeModal";
import CreateBTN from "../../components/CreateBTN";
import CheckList_Icon from "../../imgs/Icons/checklist_icon.svg";
import SobreUA from "../../components/Home/TestemunhoVid";
import { getAuth, setAuthIcon, getProfileInd } from "../../store/auth/actions";
import { useHistory } from "react-router";
import {
  selectGetProfile,
  selectShowWelcomeModal,
} from "../../store/auth/selectors";
import { selectAuthUser } from "../../store/auth/selectors";
import Cookies from "universal-cookie";
import { Agenda } from "@uaveiro/ui";
import agenda from "../../json/Agenda";
import { setShowWelcomeModal } from "../../store/auth/actions/constants";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [code, setCode] = useState("");
  const [welcomeModal, setWelcomeModal] = useState(false);
  const isLoading = useSelector((state) => selectGetLoadingTestemunhos(state));
  const isError = useSelector((state) => selectTestemunhosError(state));

  const user = useSelector((state) => selectAuthUser(state));
  const profile = useSelector((state) => selectGetProfile(state));
  const welcomeModalState = useSelector(selectShowWelcomeModal);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    setCode(urlParams.get("code"));

    // eslint-disable-next-line eqeqeq
    if (code && Object.values(profile).length == 0) {
      dispatch(getAuth(code));
      history.push("/register");
    }
  }, [code, dispatch, history, profile, user.email]);

  useEffect(() => {
    const cookies = new Cookies();
    if (user.name) {
      dispatch(setAuthIcon(user.name, cookies.get("_utkn")));
    }
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(getTestemunhos());

    const cookies = new Cookies();

    if (cookies.get("_utkn")) {
      dispatch(getProfileInd());
    }
  }, [dispatch]);

  useEffect(() => {
    if (welcomeModalState) {
      setWelcomeModal(true);
    }
  }, [dispatch, welcomeModalState]);

  const handleWelcomeModalClose = () => {
    dispatch(setShowWelcomeModal(false));
    setWelcomeModal(false);
  };


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
          <Section key="testemunhos" />
          <Agenda
            title={agenda.title}
            backgroundColor={agenda.backgroundColor}
            eventStyles={{
              date: { textColor: "#fff" },
              descriptionColor: "#fff",
              titleColor: "#fff"
            }}
            data={agenda.data}
          />
          <SobreUA/>
          <CreateBTN
            link="/todolist#start"
            icon={CheckList_Icon}
            iconAlt="Ícon To Do List"
            btnName="Ir para a To Do List personalizada"
          />
        </div>
        {welcomeModal && (
          <WelcomeModal
            open={welcomeModal}
            onDismiss={handleWelcomeModalClose}
          />
        )}
      </>
      ) : (
        <Loading />
      )}
    </>
  );
};
