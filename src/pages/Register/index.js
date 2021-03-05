/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Cookies from "universal-cookie";
import Register from "../../components/Register";
import { setAuthIcon, getProfileInd } from "../../store/auth/actions";
import { selectAuthUser } from "../../store/auth/selectors";
import { selectGetProfile } from "../../store/auth/selectors";

import { selectGetLoadingProfile } from "../../store/auth/selectors";
import Loading from "../../components/Loading";
const cookies = new Cookies();

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isFirstLogin = useSelector((state) => selectGetProfile(state));
  const user = useSelector((state) => selectAuthUser(state));

  const isLoading = useSelector((state) => selectGetLoadingProfile(state));

  useEffect(() => {
    if (user) {
      dispatch(getProfileInd());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (Object.keys(isFirstLogin).length > 0) {
      history.push("/");
    }
  }, [history, isFirstLogin]);

  useEffect(() => {
    if (user.name) {
      dispatch(setAuthIcon(user.name, cookies.get("_utkn")));
    }
  }, [dispatch, user.name]);

  return (
    <>
      {!isLoading ? (
        <>
          <div id="start" className="fantasmaAncora"></div>
          <div id="main">
            <Register />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
