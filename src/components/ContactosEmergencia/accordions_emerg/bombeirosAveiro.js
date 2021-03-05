import React from "react";
import "../../../styles/contactos.css";
import site from "../../../imgs/Icons/site.svg";
import tel from "../../../imgs/Icons/tel.svg";
import fax from "../../../imgs/Icons/fax.svg";
import email from "../../../imgs/Icons/email.svg";
import morada from "../../../imgs/Icons/morada.svg";
import time from "../../../imgs/Icons/time_black.svg";

const BombeirosAveiro = () => {
  return (
    <>
      <div
        className="accordion accordions_margin"
        id="accordionExample_bombeirosA"
      >
        {/* 1 - BOMBEIROS VELHOS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="bVelhos">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cBVelhos"
              aria-expanded="true"
              aria-controls="cBVelhos"
            >
              Bombeiros Velhos Aveiro
            </button>
          </h2>
          <div
            id="cBVelhos"
            className="accordion-collapse collapse"
            aria-labelledby="bVelhos"
            data-bs-parent="#accordionExample_bombeirosA"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234377090">
                    +351 234 377 090
                  </a>
                </p>
                <p>
                  <img src={tel} alt="Telefone"></img>(emergência){" "}
                  <a className="link" rel="noreferrer" href="tel:+351234422122">
                    +351 234 422 122
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234377091">
                    +351 234 377 091
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a
                    className="link"
                    href="mailto:geral@bombeirosaveiro-velhos.com"
                  >
                    geral@bombeirosaveiro-velhos.com
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.bombeirosaveiro-velhos.com/"
                  >
                    http://www.bombeirosaveiro-velhos.com/
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Rua Dr. Mário Sacramento
                  3810-104 Aveiro
                </p>
                <p>
                  <img src={time} alt="Horário"></img>24 horas por dia
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 - BOMBEIROS NOVOS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="bNovos">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cBNovos"
              aria-expanded="true"
              aria-controls="cBNovos"
            >
              Bombeiros Novos Aveiro
            </button>
          </h2>
          <div
            id="cBNovos"
            className="accordion-collapse collapse"
            aria-labelledby="bNovos"
            data-bs-parent="#accordionExample_bombeirosA"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234481780">
                    +351 234 481 780
                  </a>
                </p>
                <p>
                  <img src={tel} alt="Telefone"></img>(emergência){" "}
                  <a className="link" rel="noreferrer" href="tel:+351234422333">
                    +351 234 422 333
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234423786">
                    +351 234 423 786
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a
                    className="link"
                    href="mailto:secretaria@bombeirosnovos.pt "
                  >
                    secretaria@bombeirosnovos.pt{" "}
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.bombeirosnovos.pt/"
                  >
                    https://www.bombeirosnovos.pt/
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Largo Capitão Maia
                  Magalhães (Vera-Cruz) 3800-124 Aveiro
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

export default BombeirosAveiro;
