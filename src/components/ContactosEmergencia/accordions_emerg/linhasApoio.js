import React from "react";
import "../../../styles/contactos.css";
import site from "../../../imgs/Icons/site.svg";
import tel from "../../../imgs/Icons/tel.svg";
import email from "../../../imgs/Icons/email.svg";
import time from "../../../imgs/Icons/time_black.svg";

const LinhasApoio = () => {
  return (
    <>
      <div
        className="accordion accordions_margin"
        id="accordionExample_linhasApoio"
      >
        {/* 1 - SOS ESTUDANTE */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="eSos">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cESos"
              aria-expanded="true"
              aria-controls="cESos"
            >
              Linha SOS Estudante
            </button>
          </h2>
          <div
            id="cESos"
            className="accordion-collapse collapse"
            aria-labelledby="eSos"
            data-bs-parent="#accordionExample_linhasApoio"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://sosestudante.pt/"
                  >
                    https://sosestudante.pt/
                  </a>
                </p>
                <p className="p-bold">Geral</p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351239410400">
                    +351 239 410 400
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:geral@sosestudante.pt">
                    geral@sosestudante.pt
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>(voluntários){" "}
                  <a className="link" href="mailto:voluntarios@sosestudante.pt">
                    voluntarios@sosestudante.pt
                  </a>
                </p>
                <p className="p-bold">Apoio Emocional</p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351239484020">
                    +351 239 484 020
                  </a>{" "}
                  /{" "}
                  <a className="link" rel="noreferrer" href="tel:+351969554545">
                    +351 969 554 545
                  </a>{" "}
                  /{" "}
                  <a className="link" rel="noreferrer" href="tel:+351915246060">
                    +351 915 246 060
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>20:00 às 01:00
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 - LUA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="eLua">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cELua"
              aria-expanded="true"
              aria-controls="cELua"
            >
              Linha Universidade de Aveiro (LUA)
            </button>
          </h2>
          <div
            id="cELua"
            className="accordion-collapse collapse"
            aria-labelledby="eLua"
            data-bs-parent="#accordionExample_linhasApoio"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:800208448">
                    800 208 448
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>21:00 às 01:00 (calendário
                  letivo)
                </p>
                <p>
                  <a
                    className="link"
                    rel="noreferrer"
                    href="/processointegracao#lua"
                  >
                    Saber mais
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinhasApoio;
