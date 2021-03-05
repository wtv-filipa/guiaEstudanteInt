import React from "react";
import { useSelector } from "react-redux";
import seminfo from "../../../imgs/CidadeAveiro/weather_icons/sem-info.svg";
import ceulimpo from "../../../imgs/CidadeAveiro/weather_icons/ceu-limpo.svg";
import ceunuvens from "../../../imgs/CidadeAveiro/weather_icons/ceu-nuvens.svg";
import chuvaforte from "../../../imgs/CidadeAveiro/weather_icons/chuva-forte.svg";
import chuvasol from "../../../imgs/CidadeAveiro/weather_icons/chuva-sol.svg";
import chuva from "../../../imgs/CidadeAveiro/weather_icons/chuva.svg";
import granizo from "../../../imgs/CidadeAveiro/weather_icons/granizo.svg";
import nevoeiro from "../../../imgs/CidadeAveiro/weather_icons/nevoeiro.svg";
import nublado from "../../../imgs/CidadeAveiro/weather_icons/nublado.svg";
import trovoadachuva from "../../../imgs/CidadeAveiro/weather_icons/trovoada-chuva.svg";
import trovoada from "../../../imgs/CidadeAveiro/weather_icons/trovoada.svg";
import { selectGetWeather } from "../../../store/weather/selectors";

const Weather = () => {
  const weather = useSelector((state) => selectGetWeather(state));

  const getIcon = (idWeatherType) => {
    switch (idWeatherType) {
      case 0:
        return seminfo;
      case 1:
        return ceulimpo;
      case 2:
      case 3:
      case 24:
        return ceunuvens;
      case 4:
      case 5:
      case 25:
      case 27:
        return nublado;
      case 6:
      case 7:
      case 8:
        return chuvasol;
      case 9:
      case 10:
      case 15:
        return chuva;
      case 11:
      case 14:
        return chuvaforte;
      case 16:
      case 17:
      case 26:
        return nevoeiro;
      case 19:
        return trovoada;
      case 20:
      case 23:
        return trovoadachuva;
      case 21:
        return granizo;
      default:
        return seminfo;
    }
  };

  return (
    <>
      {weather.length > 0 && (
        <div className="card weather">
          <div className="row">
            <div className="col-8">
              <h3 className="weather">Aveiro</h3>
              <h4 className="weather">
                <span className="weather">
                  Vento {weather[0].classWindSpeed}km/h {weather[0].predWindDir}{" "}
                  <span className="dot">•</span> Precip{" "}
                  {weather[0].precipitaProb}%
                </span>
              </h4>
            </div>
            <div className="col-4 text-end">
              <img
                src={getIcon(weather[0].idWeatherType)}
                alt="Ícone de tempo"
                className="img_weather"
              />
            </div>
            <div className="row days mt-4">
              <table className="text-center">
                <tr>
                  <td>
                    <p>Hoje</p>
                  </td>
                  <td>
                    <p>Amanhã</p>
                  </td>
                  <td>
                    <p>Depois de</p>
                    <p> amanhã</p>
                  </td>
                  <td>
                    <p>Em dois</p>
                    <p> dias</p>
                  </td>
                  <td>
                    <p>Em três</p>
                    <p> dias</p>
                  </td>
                </tr>
                <tr>
                  <td className="max">{weather[0].tMax}°</td>
                  <td className="max">{weather[1].tMax}°</td>
                  <td className="max">{weather[2].tMax}°</td>
                  <td className="max">{weather[3].tMax}°</td>
                  <td className="max">{weather[4].tMax}°</td>
                </tr>
                <tr>
                  <td className="min">{weather[0].tMin}°</td>
                  <td className="min">{weather[1].tMin}°</td>
                  <td className="min">{weather[2].tMin}°</td>
                  <td className="min">{weather[3].tMin}°</td>
                  <td className="min">{weather[4].tMin}°</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
