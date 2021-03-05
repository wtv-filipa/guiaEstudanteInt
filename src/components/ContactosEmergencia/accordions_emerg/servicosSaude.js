import React from "react";
import "../../../styles/contactos.css";
import site from "../../../imgs/Icons/site.svg";
import tel from "../../../imgs/Icons/tel.svg";
import fax from "../../../imgs/Icons/fax.svg";
import email from "../../../imgs/Icons/email.svg";
import morada from "../../../imgs/Icons/morada.svg";
import time from "../../../imgs/Icons/time_black.svg";

const ServicosSaude = () => {
  return (
    <>
      <div className="accordion accordions_margin" id="accordionExample_sSaude">
        {/* 1 - HOSPITAL PUBLICO */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="hPublico">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cHPublico"
              aria-expanded="true"
              aria-controls="cHPublico"
            >
              Hospital Público - Centro Hospitalar Baixo Vouga Aveiro
            </button>
          </h2>
          <div
            id="cHPublico"
            className="accordion-collapse collapse"
            aria-labelledby="hPublico"
            data-bs-parent="#accordionExample_sSaude"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p className="p-bold">Geral</p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234378300">
                    +351 234 378 300
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234378395">
                    +351 234 378 395
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a className="link" href="mailto:sec-geral@chbv.min-saude.pt">
                    sec-geral@chbv.min-saude.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.chbv.min-saude.pt"
                  >
                    http://www.chbv.min-saude.pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Avenida Artur Ravara
                  3810-501 Aveiro
                </p>
                <p className="p-bold marginT-p">Urgência</p>
                <p>
                  <img src={tel} alt="Telefone"></img>(Saúde 24 ou Número
                  Europeu de Emergência)
                </p>
                <p>
                  <img src={time} alt="Horário"></img>24 horas por dia
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Avenida Artur Ravara
                  3810-501 Aveiro
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 - HOSPITAL PRIVADO */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="hPrivado">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cHPrivado"
              aria-expanded="true"
              aria-controls="cHPrivado"
            >
              Hospital Privado - Hospital da Luz Aveiro
            </button>
          </h2>
          <div
            id="cHPrivado"
            className="accordion-collapse collapse"
            aria-labelledby="hPrivado"
            data-bs-parent="#accordionExample_sSaude"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p className="p-bold">Geral</p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234400700">
                    +351 234 400 700
                  </a>
                </p>
                <p>
                  <img src={fax} alt="Fax"></img>
                  <a className="link" rel="noreferrer" href="fax:+351234400739">
                    +351 234 400 739
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a
                    className="link"
                    href="mailto:geral.aveiro@hospitaldaluz.pt "
                  >
                    geral.aveiro@hospitaldaluz.pt{" "}
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>(clientes internacionais){" "}
                  <a
                    className="link"
                    href="mailto:intlpatientservices.aveiro@hospitaldaluz.pt"
                  >
                    intlpatientservices.aveiro@hospitaldaluz.pt
                  </a>
                </p>
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.hospitaldaluz.pt/aveiro/pt"
                  >
                    https://www.hospitaldaluz.pt/aveiro/pt
                  </a>
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Rua do Brasil 21,
                  3800-009 Aveiro
                </p>
                <p>
                  <img src={time} alt="Horário"></img>(marcações por telefone)
                  Segunda a sexta: 08:00 às 20:00 | (marcações presenciais)
                  Todos os dias: 08:00 às 22:00
                </p>
                <p className="p-bold marginT-p">Urgência</p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351217104424">
                    +351 217 104 424
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>24 horas por dia
                </p>
                <p>
                  <img src={morada} alt="Morada"></img>Avenida Artur Ravara
                  3810-501 Aveiro
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 - CENTRO DE SAUDE */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="centroSaude">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cCentroSaude"
              aria-expanded="true"
              aria-controls="cCentroSaude"
            >
              Centro de Saúde - USF Aveiro-Aradas
            </button>
          </h2>
          <div
            id="cCentroSaude"
            className="accordion-collapse collapse"
            aria-labelledby="centroSaude"
            data-bs-parent="#accordionExample_sSaude"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234891200">
                    +351 234 891 200
                  </a>
                </p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" rel="noreferrer" href="tel:+351234891213">
                    +351 234 891 213
                  </a>
                </p>
                <p>
                  <img src={email} alt="Email"></img>
                  <a
                    className="link"
                    href="mailto:usf.aveiroaradas@arscentro.min-saude.pt"
                  >
                    usf.aveiroaradas@arscentro.min-saude.pt
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>Segunda a sexta: 08:00 às
                  20:00 | Domingos e feriados: encerrado
                </p>
                <p>
                  <img src={morada} alt="Localização"></img>Praça Rainha D.
                  Leonor 3810-042 Aveiro
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 4 - FARMACIAS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="farmacias">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cFarmacias"
              aria-expanded="true"
              aria-controls="cFarmacias"
            >
              Fármacias
            </button>
          </h2>
          <div
            id="cFarmacias"
            className="accordion-collapse collapse"
            aria-labelledby="farmacias"
            data-bs-parent="#accordionExample_sSaude"
          >
            <div className="accordion-body">
              <div className="p_accordion marginB-p">
                <p>
                  <img src={site} alt="Website"></img>
                  <a
                    className="link"
                    href="https://www.farmaciasdeservico.net/localidade/aveiro/aveiro"
                  >
                    https://www.farmaciasdeservico.net/localidade/aveiro/aveiro
                  </a>
                </p>
                <p className="p-bold">Farmácia Moura</p>
                <p>
                  <img src={tel} alt="Telefone"></img>
                  <a className="link" href="tel:+351234422014">
                    +351 234 422 014
                  </a>
                </p>
                <p>
                  <img src={time} alt="Horário"></img>09:00 às 21:00
                </p>
                <p>
                  <img src={morada} alt="Localização"></img>Glicínias Plaza -
                  Rua D. Manuel Barbuda e Vasconcelos, Loja 40 Aradas
                </p>
                <p className="p-bold marginT-p">Farmácia de Serviço</p>
                <p>
                  <img src={time} alt="Horário"></img>24 horas por dia
                </p>
                <p>
                  <img src={tel} alt="Telefone"></img>(varia consoante a
                  farmácia de serviço - consultar website acima)
                </p>

                <p>
                  <img src={morada} alt="Localização"></img>(varia consoante a
                  farmácia de serviço - consultar website acima)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicosSaude;
