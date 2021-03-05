import React from "react";
import "../../../styles/contactos.css";
import tel from "../../../imgs/Icons/tel.svg";
import time from "../../../imgs/Icons/time_black.svg";

const ServicosUrgencia = () => {
  return (
    <>
      <div
        className="accordion accordions_margin"
        id="accordionExample_urgencia"
      >
        {/* 1 - NUMERO EMERGENCIA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="nEuropeu">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cNEuropeu"
              aria-expanded="true"
              aria-controls="cNEuropeu"
            >
              Número Europeu de Emergência
            </button>
          </h2>
          <div
            id="cNEuropeu"
            className="accordion-collapse collapse"
            aria-labelledby="nEuropeu"
            data-bs-parent="#accordionExample_urgencia"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:112">
                    112
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>24 horas por dia
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 - LINHA NACIONAL BOMBEIROS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="linhaBombeiros">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cLinhaBombeiros"
              aria-expanded="true"
              aria-controls="cLinhaBombeiros"
            >
              Linha Nacional de Bombeiros
            </button>
          </h2>
          <div
            id="cLinhaBombeiros"
            className="accordion-collapse collapse"
            aria-labelledby="linhaBombeiros"
            data-bs-parent="#accordionExample_urgencia"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:117">
                    117
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>24 horas por dia
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 - SAUDE 24 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="saude24">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cSaude24"
              aria-expanded="true"
              aria-controls="cSaude24"
            >
              Saúde 24
            </button>
          </h2>
          <div
            id="cSaude24"
            className="accordion-collapse collapse"
            aria-labelledby="saude24"
            data-bs-parent="#accordionExample_urgencia"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:808242424">
                    808 24 24 24
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>24 horas por dia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicosUrgencia;
