import React from "react";
import "../../../styles/contactos.css";
import tel from "../../../imgs/Icons/tel.svg";
import fax from "../../../imgs/Icons/fax.svg";
import email from "../../../imgs/Icons/email.svg";
import morada from "../../../imgs/Icons/morada.svg";

const EscolasPoli = () => {
  return (
    <>
      <div
        className="accordion accordions_margin"
        id="accordionExample_escolas"
      >
        {/* 1 - ESAN */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="esan">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cEsan"
              aria-expanded="true"
              aria-controls="cEsan"
            >
              Escola Superior de Design, Gestão e Tecnologias da Produção Aveiro
              Norte (ESAN)
            </button>
          </h2>
          <div
            id="cEsan"
            className="accordion-collapse collapse"
            aria-labelledby="esan"
            data-bs-parent="#accordionExample_escolas"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351256666960">
                    +351 256 666 960
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351256666970">
                    +351 256 666 970
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:esan.geral@ua.pt">
                    esan.geral@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 34
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 - ESSUA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="essua">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cEssua"
              aria-expanded="true"
              aria-controls="cEssua"
            >
              Escola Superior de Saúde da Universidade de Aveiro (ESSUA)
            </button>
          </h2>
          <div
            id="cEssua"
            className="accordion-collapse collapse"
            aria-labelledby="essua"
            data-bs-parent="#accordionExample_escolas"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234401558">
                    +351 234 401 558
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234401597">
                    +351 234 401 597
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:essua.secretaria@ua.pt">
                    essua.secretaria@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 30
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 - ESTGA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="estga">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cEstga"
              aria-expanded="true"
              aria-controls="cEstga"
            >
              Escola Superior de Tecnologia e Gestão de Águeda (ESTGA)
            </button>
          </h2>
          <div
            id="cEstga"
            className="accordion-collapse collapse"
            aria-labelledby="estga"
            data-bs-parent="#accordionExample_escolas"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234611500">
                    +351 234 611 500
                  </a>{" "}
                  /{" "}
                  <a className="link" rel="noreferrer" href="tel:+351234611501">
                    +351 234 611 501
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234611540">
                    +351 234 611 540
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:estga.geral@ua.pt">
                    estga.geral@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 20
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 4 - ISCA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="isca">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cIsca"
              aria-expanded="true"
              aria-controls="cIsca"
            >
              Instituto Superior de Contabilidade e Administração da
              Universidade de Aveiro (ISCA)
            </button>
          </h2>
          <div
            id="cIsca"
            className="accordion-collapse collapse"
            aria-labelledby="isca"
            data-bs-parent="#accordionExample_escolas"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234380110">
                    +351 234 380 110
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234380111">
                    +351 234 380 111
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:isca.geral@ua.pt">
                    isca.geral@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 35
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EscolasPoli;
