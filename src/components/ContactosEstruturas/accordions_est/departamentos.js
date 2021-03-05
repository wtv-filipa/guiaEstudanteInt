import React from "react";
import "../../../styles/contactos.css";
import tel from "../../../imgs/Icons/tel.svg";
import fax from "../../../imgs/Icons/fax.svg";
import email from "../../../imgs/Icons/email.svg";
import morada from "../../../imgs/Icons/morada.svg";

const Departamentos = () => {
  return (
    <>
      <div
        className="accordion accordions_margin"
        id="accordionExample_departamentos"
      >
        {/* 1 - AMBIENTE E ORDENAMENTO */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="ambiente">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cAmbiente"
              aria-expanded="true"
              aria-controls="cAmbiente"
            >
              Ambiente e Ordenamento
            </button>
          </h2>
          <div
            id="cAmbiente"
            className="accordion-collapse collapse"
            aria-labelledby="ambiente"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370349">
                    +351 234 370 349
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234429290">
                    +351 234 429 290
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:dao.secretaria@ua.pt">
                    esan.geral@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 7
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 - BIOLOGIA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="biologia">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cBiologia"
              aria-expanded="true"
              aria-controls="cBiologia"
            >
              Biologia
            </button>
          </h2>
          <div
            id="cBiologia"
            className="accordion-collapse collapse"
            aria-labelledby="biologia"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370350">
                    +351 234 370 350
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234426408">
                    +351 234 426 408
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:bio.geral@ua.pt">
                    bio.geral@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 8
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 - CIENCIAS MEDICAS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="cienciasM">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cCienciasM"
              aria-expanded="true"
              aria-controls="cCienciasM"
            >
              Ciências Médicas
            </button>
          </h2>
          <div
            id="cCienciasM"
            className="accordion-collapse collapse"
            aria-labelledby="cienciasM"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370213">
                    +351 234 370 213
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:cs.secretaria@ua.pt">
                    cs.secretaria@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 30
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 4 - CIENCIAS SOCIAIS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="cienciasS">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cCienciasS"
              aria-expanded="true"
              aria-controls="cCienciasS"
            >
              Ciências Sociais, Políticas e do Território
            </button>
          </h2>
          <div
            id="cCienciasS"
            className="accordion-collapse collapse"
            aria-labelledby="cienciasS"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234372482">
                    +351 234 372 482
                  </a>{" "}
                  /{" "}
                  <a className="link" rel="noreferrer" href="tel:+351234372487">
                    +351 234 372 487
                  </a>{" "}
                  /{" "}
                  <a className="link" rel="noreferrer" href="tel:+351234372489">
                    +351 234 372 489
                  </a>{" "}
                  /{" "}
                  <a className="link" rel="noreferrer" href="tel:+351234372501">
                    +351 234 372 501
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234372500">
                    +351 234 372 500
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:dcspt.secretaria@ua.pt">
                    dcspt.secretaria@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 12
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 5 - COMUNICACAO E ARTE */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="comunicacao">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cComunicacao"
              aria-expanded="true"
              aria-controls="cComunicacao"
            >
              Comunicação e Arte
            </button>
          </h2>
          <div
            id="cComunicacao"
            className="accordion-collapse collapse"
            aria-labelledby="comunicacao"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370389">
                    +351 234 370 389
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234370868">
                    +351 234 370 868
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:cris@ua.pt">
                    cris@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 21
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 6 - ECONOMIA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="economia">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cEconomia"
              aria-expanded="true"
              aria-controls="cEconomia"
            >
              Economia, Gestão e Engenharia Industrial e Turismo
            </button>
          </h2>
          <div
            id="cEconomia"
            className="accordion-collapse collapse"
            aria-labelledby="economia"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370361">
                    +351 234 370 361
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234370215">
                    +351 234 370 215
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:degei@ua.pt">
                    degei@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 10
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 7 - EDUCACAO */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="educacao">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cEducacao"
              aria-expanded="true"
              aria-controls="cEducacao"
            >
              Educação e Psicologia
            </button>
          </h2>
          <div
            id="cEducacao"
            className="accordion-collapse collapse"
            aria-labelledby="educacao"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370352">
                    +351 234 370 352
                  </a>{" "}
                  /{" "}
                  <a className="link" rel="noreferrer" href="tel:+351234370353">
                    +351 234 370 353
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234370640">
                    +351 234 370 640
                  </a>{" "}
                  /{" "}
                  <a className="link" rel="noreferrer" href="fax:+351234370219">
                    +351 234 370 219
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:de-sec@ua.pt">
                    de-sec@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 5
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 8 - ELETRONICA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="eletronica">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cEletronica"
              aria-expanded="true"
              aria-controls="cEletronica"
            >
              Eletrónica, Telecomunicações e Informática
            </button>
          </h2>
          <div
            id="cEletronica"
            className="accordion-collapse collapse"
            aria-labelledby="eletronica"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370355">
                    +351 234 370 355
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234381128">
                    +351 234 381 128
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:sec@det.ua.pt">
                    sec@det.ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 4
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 9 - ENGENHARIA E MATERIAS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="engenhariaMC">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cEngenhariaMC"
              aria-expanded="true"
              aria-controls="cEngenhariaMC"
            >
              Engenharia de Materiais e Cerâmica
            </button>
          </h2>
          <div
            id="cEngenhariaMC"
            className="accordion-collapse collapse"
            aria-labelledby="engenhariaMC"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370354">
                    +351 234 370 354
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234425300">
                    +351 234 425 300
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:sec@civil.ua.pt">
                    sec@civil.ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 9
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 10 - ENGENHARIA CIVIL */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="engenhariaC">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cEngenhariaC"
              aria-expanded="true"
              aria-controls="cEngenhariaC"
            >
              Engenharia Civil
            </button>
          </h2>
          <div
            id="cEngenhariaC"
            className="accordion-collapse collapse"
            aria-labelledby="engenhariaC"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370049">
                    +351 234 370 049
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234370094">
                    +351 234 370 094
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:sec@civil.ua.pt">
                    sec@civil.ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 28
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 11 - ENGENHARIA MECANICA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="engenhariaM">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cEngenhariaM"
              aria-expanded="true"
              aria-controls="cEngenhariaM"
            >
              Engenharia Mecânica
            </button>
          </h2>
          <div
            id="cEngenhariaM"
            className="accordion-collapse collapse"
            aria-labelledby="engenhariaM"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370830">
                    +351 234 370 830
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234370953">
                    +351 234 370 953
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:dem.secretaria@ua.pt">
                    dem.secretaria@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 22
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 12 - FISICA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="fisica">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cFisica"
              aria-expanded="true"
              aria-controls="cFisica"
            >
              Física
            </button>
          </h2>
          <div
            id="cFisica"
            className="accordion-collapse collapse"
            aria-labelledby="fisica"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370356">
                    +351 234 370 356
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234424965">
                    +351 234 424 965
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:fisica@ua.pt">
                    fisica@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 13
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 13 - GEOCIENCIAS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="geociencias">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cGeociencias"
              aria-expanded="true"
              aria-controls="cGeociencias"
            >
              Geociências
            </button>
          </h2>
          <div
            id="cGeociencias"
            className="accordion-collapse collapse"
            aria-labelledby="geociencias"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370357">
                    +351 234 370 357
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234370605">
                    +351 234 370 605
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:geo.secretaria@ua.pt">
                    geo.secretaria@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 16
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 14 - LINGUAS E CULTURAS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="linguas">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cLinguas"
              aria-expanded="true"
              aria-controls="cLinguas"
            >
              Línguas e Culturas
            </button>
          </h2>
          <div
            id="cLinguas"
            className="accordion-collapse collapse"
            aria-labelledby="linguas"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370358">
                    +351 234 370 358
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234370940">
                    +351 234 370 940
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:sec@dlc.ua.pt">
                    sec@dlc.ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 2
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 15 - MATEMATICA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="matematica">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cMatematica"
              aria-expanded="true"
              aria-controls="cMatematica"
            >
              Matemática
            </button>
          </h2>
          <div
            id="cMatematica"
            className="accordion-collapse collapse"
            aria-labelledby="matematica"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370359">
                    +351 234 370 359
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234382014">
                    +351 234 382 014
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:dmat.secretaria@ua.pt">
                    dmat.secretaria@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 11
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 16 - QUIMICA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="quimica">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cQuimica"
              aria-expanded="true"
              aria-controls="cQuimica"
            >
              Química
            </button>
          </h2>
          <div
            id="cQuimica"
            className="accordion-collapse collapse"
            aria-labelledby="quimica"
            data-bs-parent="#accordionExample_departamentos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370360">
                    {" "}
                    +351 234 370 360
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234370084">
                    +351 234 370 084
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:quimica@ua.pt">
                    quimica@ua.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 15
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Departamentos;
