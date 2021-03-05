import React from "react";
import "../../../styles/contactos.css";
import site from "../../../imgs/Icons/site.svg";
import tel from "../../../imgs/Icons/tel.svg";
import email from "../../../imgs/Icons/email.svg";
import morada from "../../../imgs/Icons/morada.svg";
import time from "../../../imgs/Icons/time_black.svg";

const OutrosServicos = () => {
  return (
    <>
      <div
        className="accordion accordions_margin"
        id="accordionExample_Oservicos"
      >
        {/* 1 - UA_INTERCULTURAL */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="ua_i">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cUa_i"
              aria-expanded="true"
              aria-controls="cUa_i"
            >
              UA_Intercultural (UA_I)
            </button>
          </h2>
          <div
            id="cUa_i"
            className="accordion-collapse collapse"
            aria-labelledby="ua_i"
            data-bs-parent="#accordionExample_Oservicos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234247180">
                    +351 234 247 180
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:internationalstudents@ua.pt">
                    internationalstudents@ua.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ua.pt/#/pt/servicos-apoio"
                  >
                    https://www.ua.pt/#/pt/servicos-apoio
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 6
                </p>
                <p>
                  <img src={time} alt="Horário"></img>10:00 às 13:00 / 14:00 às
                  17:00
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 - CLIAM_UA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="claim_ua">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cClaim_ua"
              aria-expanded="true"
              aria-controls="cClaim_ua"
            >
              Centro Local de Apoio à Integração de Migrantes da Universidade de
              Aveiro (CLAIM_UA)
            </button>
          </h2>
          <div
            id="cClaim_ua"
            className="accordion-collapse collapse"
            aria-labelledby="claim_ua"
            data-bs-parent="#accordionExample_Oservicos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234247180">
                    +351 234 247 180
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:claim_ua@ua.pt">
                    claim_ua@ua.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ua.pt/#/pt/servicos-apoio"
                  >
                    https://www.ua.pt/#/pt/servicos-apoio
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>10:00 às 13:00 / 14:00 às
                  17:00
                </p>
                <p>
                  <img src={morada} alt="Localização"></img>Edifício 6
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 - GABINETE PEDAGOGICO */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="gabinete">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cGabinete"
              aria-expanded="true"
              aria-controls="cGabinete"
            >
              Gabinete Pedagógico da Universidade de Aveiro
            </button>
          </h2>
          <div
            id="cGabinete"
            className="accordion-collapse collapse"
            aria-labelledby="gabinete"
            data-bs-parent="#accordionExample_Oservicos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" href="tel:+351234370206">
                    +351 234 370 206
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:gabinete.pedagogico@ua.pt">
                    gabinete.pedagogico@ua.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ua.pt/pedagogico/"
                  >
                    https://www.ua.pt/pedagogico/
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Localização"></img>Edifício 25
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutrosServicos;
