import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CidadeAveiro from "../../components/CidadeAveiro";
import Submenu from "../../components/Submenu/cidade_aveiro";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";
import { selectGetLoadingWeather, selectWeatherError } from "../../store/weather/selectors";
import { getWeather } from "../../store/weather/actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();
  const isError = useSelector((state) => selectWeatherError(state));
  const isLoading = useSelector(state => selectGetLoadingWeather(state));

  useEffect(() => {
    dispatch(getWeather());
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
        <Submenu />
        <CidadeAveiro />
      </div>
      </>
    ) : <Loading/>
  }
    </>
  );
};
