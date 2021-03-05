import React from "react";
import "../../../styles/contactos.css";
import site from "../../../imgs/Icons/site.svg";
import tel from "../../../imgs/Icons/tel.svg";
import fax from "../../../imgs/Icons/fax.svg";
import email from "../../../imgs/Icons/email.svg";
import morada from "../../../imgs/Icons/morada.svg";

const OrgaosUA = () => {
  return (
    <>
      <div className="accordion accordions_margin" id="accordionExample_orgaos">
        {/* 1 - REITORIA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="reitoria">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cReitoria"
              aria-expanded="true"
              aria-controls="cReitoria"
            >
              Reitoria
            </button>
          </h2>
          <div
            id="cReitoria"
            className="accordion-collapse collapse"
            aria-labelledby="reitoria"
            data-bs-parent="#accordionExample_orgaos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p className="p-bold">
                  Reitor, Equipa Reitoral e Secretariado de Apoio:
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ua.pt/#/pt/reitor"
                  >
                    https://www.ua.pt/#/pt/reitor
                  </a>
                </p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370606">
                    +351 234 370 606
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234370089">
                    +351 234 370 089
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:reitoria@ua.pt">
                    reitoria@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Universidade de Aveiro,
                  Campus Universitário de Santiago, 3810 - 193 Aveiro, Portugal
                  (edifício 25)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 - CONSELHO GERAL */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="conselhoG">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cConselhoG"
              aria-expanded="true"
              aria-controls="cConselhoG"
            >
              Conselho Geral
            </button>
          </h2>
          <div
            id="cConselhoG"
            className="accordion-collapse collapse"
            aria-labelledby="conselhoG"
            data-bs-parent="#accordionExample_orgaos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234372523">
                    +351 234 372 523
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:conselho.geral@ua.pt">
                    conselho.geral@ua.pt
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 - CONSELHO CIENTIFICO */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="conselhoC">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cConselhoC"
              aria-expanded="true"
              aria-controls="cConselhoC"
            >
              Conselho Científico
            </button>
          </h2>
          <div
            id="cConselhoC"
            className="accordion-collapse collapse"
            aria-labelledby="conselhoC"
            data-bs-parent="#accordionExample_orgaos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>Extensão interna: 21001</p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:cientifico@ua.pt">
                    cientifico@ua.pt
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 4 - CONSELHO PEDAGÓGICO */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="conselhoP">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cConselhoP"
              aria-expanded="true"
              aria-controls="cConselhoP"
            >
              Conselho Pedagógico
            </button>
          </h2>
          <div
            id="cConselhoP"
            className="accordion-collapse collapse"
            aria-labelledby="conselhoP"
            data-bs-parent="#accordionExample_orgaos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" href="tel:+351234401565">
                    +351 234 401 565
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:cpedagogico@adm.ua.pt">
                    cpedagogico@adm.ua.pt
                  </a>
                </p>
                <p className="p-bold marginT-p">Programa de Tutoria</p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:tutoria@ua.pt">
                    tutoria@ua.pt
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 5 - PROVEDOR DO ESTUDANTE */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="provedor">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cProvedor"
              aria-expanded="true"
              aria-controls="cProvedor"
            >
              Provedor do Estudante
            </button>
          </h2>
          <div
            id="cProvedor"
            className="accordion-collapse collapse"
            aria-labelledby="provedor"
            data-bs-parent="#accordionExample_orgaos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                
                  <p>
                    <img src={tel} alt="Telefone"></img>
                    <a
                      className="link"
                      rel="noreferrer"
                      href="tel:+351234370987"
                    >
                      +351 234 370 987
                    </a>
                  </p>
                  <p>
                    <img src={email} alt="Email"></img>
                    <a className="link" href="mailto:provedor@ua.pt">
                      provedor@ua.pt
                    </a>
                  </p>
                
              </div>
            </div>
          </div>
        </div>
        {/* 6 - ADMINISTRAÇÃO */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="administracao">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cAdministracao"
              aria-expanded="true"
              aria-controls="cAdministracao"
            >
              Administração
            </button>
          </h2>
          <div
            id="cAdministracao"
            className="accordion-collapse collapse"
            aria-labelledby="administracao"
            data-bs-parent="#accordionExample_orgaos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234372565">
                    +351 234 372 565
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234372566">
                    +351 234 372 566
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:administracao@ua.pt">
                    administracao@ua.pt
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

export default OrgaosUA;
