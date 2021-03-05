import React from "react";
import "../../../styles/contactos.css";
import tel from "../../../imgs/Icons/tel.svg";
import fax from "../../../imgs/Icons/fax.svg";
import email from "../../../imgs/Icons/email.svg";
import morada from "../../../imgs/Icons/morada.svg";
import site from "../../../imgs/Icons/site.svg";

const EntidadesParc = () => {
  return (
    <>
      <div
        className="accordion accordions_margin"
        id="accordionExample_entidades"
      >
        {/* 1 - INSTITUTO CONFUCIO */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="iConfucio">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cIConfucio"
              aria-expanded="true"
              aria-controls="cIConfucio"
            >
              Instituto Confúcio - Universidade de Aveiro
            </button>
          </h2>
          <div
            id="cIConfucio"
            className="accordion-collapse collapse"
            aria-labelledby="iConfucio"
            data-bs-parent="#accordionExample_entidades"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234247076">
                    +351 234 247 076
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:confucio@ua.pt">
                    confucio@ua.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    href="https://www.ua.pt/iconfucio/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.ua.pt/iconfucio/
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 3
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 - AAUAv */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="aauav">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cAauav"
              aria-expanded="true"
              aria-controls="cAauav"
            >
              Associação Académica da Universidade de Aveiro (AAUAv)
            </button>
          </h2>
          <div
            id="cAauav"
            className="accordion-collapse collapse"
            aria-labelledby="aauav"
            data-bs-parent="#accordionExample_entidades"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234372320">
                    +351 234 372 320
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234372329">
                    +351 234 372 329
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:aauav@aauav.pt">
                    aauav@aauav.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    href="https://aauav.pt/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://aauav.pt/
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício N
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 - ESN */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="esn">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cEsn"
              aria-expanded="true"
              aria-controls="cEsn"
            >
              Erasmus Student Network (ESN - Aveiro)
            </button>
          </h2>
          <div
            id="cEsn"
            className="accordion-collapse collapse"
            aria-labelledby="esn"
            data-bs-parent="#accordionExample_entidades"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:board@esnaveiro.org">
                    board@esnaveiro.org
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    href="http://www.esnaveiro.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://www.esnaveiro.org/
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 6 (zona
                  comercial)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 4 - NCPLP */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="ncplp">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cNcplp"
              aria-expanded="true"
              aria-controls="cNcplp"
            >
              Núcleo da CPLP da Associação Académica da Universidade de Aveiro
              (NCPLP)
            </button>
          </h2>
          <div
            id="cNcplp"
            className="accordion-collapse collapse"
            aria-labelledby="ncplp"
            data-bs-parent="#accordionExample_entidades"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:ncplp@aauav.pt">
                    ncplp@aauav.pt
                  </a>
                </p>
                <p className="break_line">
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    href="https://pt-br.facebook.com/nucleocplpaauav/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://pt-br.facebook.com/nucleocplpaauav/
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício N
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 5 - AECAV */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="aecav">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cAecav"
              aria-expanded="true"
              aria-controls="cAecav"
            >
              Associação de Estudantes Caboverdianos em Aveiro (AECAV)
            </button>
          </h2>
          <div
            id="cAecav"
            className="accordion-collapse collapse"
            aria-labelledby="aecav"
            data-bs-parent="#accordionExample_entidades"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={email} alt="Email"></img>
                  <a
                    className="link"
                    href="mailto:ae.caboverdianos.aveiro@gmail.com"
                  >
                    ae.caboverdianos.aveiro@gmail.com
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    href="https://www.facebook.com/aecav/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.facebook.com/aecav/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 6 - AMOAV */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="amoav">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cAmoav"
              aria-expanded="true"
              aria-controls="cAmoav"
            >
              Associação de Moçambicanos de Aveiro (AMOAV)
            </button>
          </h2>
          <div
            id="cAmoav"
            className="accordion-collapse collapse"
            aria-labelledby="amoav"
            data-bs-parent="#accordionExample_entidades"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:associacao.aa@outlook.pt">
                    associacao.aa@outlook.pt
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 7 - AESTPAV */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="aestpav">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cAestpav"
              aria-expanded="true"
              aria-controls="cAestpav"
            >
              Associação de Estudantes Santomenses de Aveiro (AESTPAV)
            </button>
          </h2>
          <div
            id="cAestpav"
            className="accordion-collapse collapse"
            aria-labelledby="aestpav"
            data-bs-parent="#accordionExample_entidades"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:aestpav@hotmail.com">
                    aestpav@hotmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 8 - CUFC */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="cufc">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cCufc"
              aria-expanded="true"
              aria-controls="cCufc"
            >
              Centro Universitário de Fé e Cultura (CUFC)
            </button>
          </h2>
          <div
            id="cCufc"
            className="accordion-collapse collapse"
            aria-labelledby="cufc"
            data-bs-parent="#accordionExample_entidades"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234420600">
                    +351 234 420 600
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:cufc@ua.pt">
                    cufc@ua.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    href="http://www.diocese-aveiro.pt/cufc/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://www.diocese-aveiro.pt/cufc/
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Em frente ao edifício 7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntidadesParc;
