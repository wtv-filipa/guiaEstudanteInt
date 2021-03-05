import React from "react";
import "../../../styles/contactos.css";
import site from "../../../imgs/Icons/site.svg";
import tel from "../../../imgs/Icons/tel.svg";
import fax from "../../../imgs/Icons/fax.svg";
import email from "../../../imgs/Icons/email.svg";
import morada from "../../../imgs/Icons/morada.svg";
import time from "../../../imgs/Icons/time_black.svg";

const ServicosUA = () => {
  return (
    <>
      <div
        className="accordion accordions_margin"
        id="accordionExample_servicos"
      >
        {/* 1 - SERVIÇOS DE ACAO SOCIAL */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="sAcaoSocial">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cSAcaoSocial"
              aria-expanded="true"
              aria-controls="cSAcaoSocial"
            >
              Serviços de Ação Social
            </button>
          </h2>
          <div
            id="cSAcaoSocial"
            className="accordion-collapse collapse"
            aria-labelledby="sAcaoSocial"
            data-bs-parent="#accordionExample_servicos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370348">
                    +351 234 370 348
                  </a>{" "}
                  (geral)
                </p>
                <p className="p-bold marginT-p">
                  Secretaria de Apoio ao Estudante:
                </p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370310">
                    +351 234 370 310
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234429116">
                    +351 234 429 116
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifício 6
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:sas@ua.pt">
                    sas@ua.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ua.pt/sas/"
                  >
                    https://www.ua.pt/sas/
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>09:00 às 16:00
                </p>
                <p className="p-bold marginT-p">
                  Núcleo de Cooperação e Mobilidade Internacional:
                </p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370348">
                    +351 234 370 348
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link text-wrap"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ua.pt/sas/page/8363?ref=ID0ECCA"
                  >
                    https://www.ua.pt/sas/page/8363?ref=ID0ECCA
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>Apoios Sociais:{" "}
                  <a className="link" href="mailto:emoreira@ua.pt">
                    emoreira@ua.pt
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>Alojamento Universitário:{" "}
                  <a className="link" href="mailto:accommodation@ua.pt">
                    accommodation@ua.pt
                  </a>
                </p>
                <p className="p-bold marginT-p">
                  Centro de Saúde Universitário:
                </p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234372513">
                    +351 234 372 513
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:csu@ua.pt">
                    csu@ua.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ua.pt/sas/page/4549?ref=ID0EGCA/ID0EEGCA"
                  >
                    https://www.ua.pt/sas/page/4549?ref=ID0EGCA/ID0EEGCA
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>Variável (ver link
                  anterior)
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Edifícios 6 e 30
                </p>
                <p className="p-bold marginT-p">
                  Linha Universitária de Aveiro:
                </p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351800208448">
                    +351 800 208 448
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:gustavo.vasconcelos@ua.pt">
                    gustavo.vasconcelos@ua.pt
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>21:00 à 01:00
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 - SERVICOS BIBLIOTECA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="sBiblioteca">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cSBiblioteca"
              aria-expanded="true"
              aria-controls="cSBiblioteca"
            >
              Serviços de Biblioteca, Informação Documental e Museologia
            </button>
          </h2>
          <div
            id="cSBiblioteca"
            className="accordion-collapse collapse"
            aria-labelledby="sBiblioteca"
            data-bs-parent="#accordionExample_servicos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234370346">
                    +351 234 370 346
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234370997">
                    +351 234 370 997
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:sbidm-biblioteca@ua.pt">
                    sbidm-biblioteca@ua.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ua.pt/sbidm/"
                  >
                    https://www.ua.pt/sbidm/
                  </a>
                </p>
                <p className="break_line">
                  <img src={time} alt="Horário"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ua.pt/sbidm/biblioteca/horario"
                  >
                    https://www.ua.pt/sbidm/biblioteca/horariobiblioteca/horario
                  </a>{" "}
                  (verificar aqui)
                </p>
                <p>
                  <img src={morada} alt="Localização"></img>Edifício 17
                </p>
                <p className="p-bold marginT-p">Bibliotecas da UA:</p>
                <p className="break_line">
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ua.pt/sbidm/biblioteca/page/14470"
                  >
                    https://www.ua.pt/sbidm/biblioteca/page/14470
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 - SERVICOS GESTAO */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="sGestao">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cSGestao"
              aria-expanded="true"
              aria-controls="cSGestao"
            >
              Serviços de Gestão Académica
            </button>
          </h2>
          <div
            id="cSGestao"
            className="accordion-collapse collapse"
            aria-labelledby="sGestao"
            data-bs-parent="#accordionExample_servicos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p className="p-bold">Área dos Registos Académicos:</p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" href="tel:+351234370347">
                    +351 234 370 347
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:academicos@ua.pt">
                    academicos@ua.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ua.pt/sga/"
                  >
                    https://www.ua.pt/sga/
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>09:00 às 16:00
                </p>
                <p>
                  <img src={morada} alt="Localização"></img>Edifício 25
                </p>
                <p className="p-bold marginT-p">
                  Gabinete de Relações Internacionais (GRI):
                </p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" href="tel:+351234370060">
                    +351 234 370 060
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:gri@ua.pt">
                    gri@ua.pt
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>10:00 às 12:00
                </p>
                <p>
                  <img src={morada} alt="Localização"></img>Edifício 25
                </p>
                <p className="p-bold marginT-p">
                  Gabinete de Estágios e Saídas Profissionais:
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:estagios@ua.pt">
                    estagios@ua.pt
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 4 - SERVICOS TECNOLOGIAS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="sTecnologias">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cSTecnologias"
              aria-expanded="true"
              aria-controls="cSTecnologias"
            >
              Serviços de Tecnologias de Informação e Comunicação
            </button>
          </h2>
          <div
            id="cSTecnologias"
            className="accordion-collapse collapse"
            aria-labelledby="sTecnologias"
            data-bs-parent="#accordionExample_servicos"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" href="tel:+351234372469">
                    +351 234 372 469
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" href="fax:+351234370214">
                    +351 234 370 214
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:stic@ua.pt">
                    stic@ua.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ua.pt/stic/"
                  >
                    https://www.ua.pt/stic/
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>(helpdesk) 09:00 às 12:30
                  / 14:00 às 17:30
                </p>
                <p>
                  <img src={morada} alt="Localização"></img>Edifício 27
                </p>
                <p>
                  <img src={time} alt="Horário"></img>(atendimento via web) 24
                  horas por dia
                </p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" href="tel:+351234370099">
                    +351 234 370 099
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:stic-helpdesk@ua.pt">
                    stic-helpdesk@ua.pt
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

export default ServicosUA;
