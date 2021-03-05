import React from "react";
import "../../../styles/contactos.css";
import site from "../../../imgs/Icons/site.svg";
import tel from "../../../imgs/Icons/tel.svg";
import fax from "../../../imgs/Icons/fax.svg";
import email from "../../../imgs/Icons/email.svg";
import morada from "../../../imgs/Icons/morada.svg";
import time from "../../../imgs/Icons/time_black.svg";

const SegurancaPublica = () => {
  return (
    <>
      <div
        className="accordion accordions_margin"
        id="accordionExample_segurancaPublica"
      >
        {/* 1 - PSP */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="psp">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cPsp"
              aria-expanded="true"
              aria-controls="cPsp"
            >
              Polícia de Segurança Pública - PSP
            </button>
          </h2>
          <div
            id="cPsp"
            className="accordion-collapse collapse"
            aria-labelledby="psp"
            data-bs-parent="#accordionExample_segurancaPublica"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234400290">
                    +351 234 400 290
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234302516">
                    +351 234 302 516
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:cpaveiro@psp.pt">
                    cpaveiro@psp.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.psp.pt/"
                  >
                    http://www.psp.pt/
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Tv. do Governo Civil,
                  3810-118 Aveiro
                </p>
                <p>
                  <img src={time} alt="Horário"></img>24 horas por dia
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 - GNR */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="gnr">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cGnr"
              aria-expanded="true"
              aria-controls="cGnr"
            >
              Guarda Nacional Republicana - GNR
            </button>
          </h2>
          <div
            id="cGnr"
            className="accordion-collapse collapse"
            aria-labelledby="gnr"
            data-bs-parent="#accordionExample_segurancaPublica"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234378220">
                    +351 234 378 220
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234382423">
                    +351 234 382 423
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:ct.avr@gnr.pt">
                    ct.avr@gnr.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.gnr.pt/"
                  >
                    https://www.gnr.pt/
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Rua do Carmo 74, 3800-098
                  Aveiro
                </p>
                <p>
                  <img src={time} alt="Horário"></img>24 horas por dia
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 - POLICIA MUNICIPAL */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="pMunicipal">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cPMunicipal"
              aria-expanded="true"
              aria-controls="cPMunicipal"
            >
              Polícia Municipal
            </button>
          </h2>
          <div
            id="cPMunicipal"
            className="accordion-collapse collapse"
            aria-labelledby="pMunicipal"
            data-bs-parent="#accordionExample_segurancaPublica"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234340520">
                    +351 234 340 520
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234340527">
                    +351 234 340 527
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a
                    className="link"
                    href="mailto:policia.municipal@cm-aveiro.pt"
                  >
                    policia.municipal@cm-aveiro.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.cm-aveiro.pt/contactos/mais-contactos-municipais/poi/policia-municipal"
                  >
                    https://www.cm-aveiro.pt/contactos/mais-contactos-municipais/poi/policia-municipal
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Parque Feiras e
                  Exposições, Rua D. Manuel Almeida Trindade 3810-488 Aveiro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SegurancaPublica;
