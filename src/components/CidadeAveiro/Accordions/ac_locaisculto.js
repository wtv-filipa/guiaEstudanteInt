import React from "react";

const AcLocaisCulto = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        {/* 1 - CATOLICA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Católica
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <p className="p_next">
                  Existem várias opções por toda a cidade de Aveiro,
                  destacando-se:
                </p>
                <ul className="bulletpoint lista">
                  <li>
                    <a
                      className="link"
                      title="Ir para o Google Maps da Sé Catedral"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/S%C3%A9+%2F+Catedral+de+Aveiro/@40.6396443,-8.6524315,17z/data=!3m1!4b1!4m5!3m4!1s0xd239805e01f6703:0xb859d6fba24adf8d!8m2!3d40.6396443!4d-8.6502428?hl=pt-PT&authuser=0"
                    >
                      Sé Catedral
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      title="Ir para o Google Maps da Sé Catedral"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Igreja+da+Miseric%C3%B3rdia+de+Aveiro/@40.6406161,-8.655627,17z/data=!3m1!4b1!4m5!3m4!1s0xd2398046b152567:0x406ee628e84aaf0a!8m2!3d40.6406161!4d-8.6534383?hl=pt-PT&authuser=0"
                    >
                      Igreja da Misericórdia
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Convento+Do+Carmo/@40.6445138,-8.6503939,17z/data=!3m1!4b1!4m5!3m4!1s0xd23980fe3067fb1:0xa4739e3cc94b0869!8m2!3d40.6445138!4d-8.6482052?hl=pt-PT&authuser=0"
                    >
                      Igreja do Carmo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 2 - PROTESTANTE */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Protestante
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <p className="p_next">Em Aveiro poderás encontrar:</p>
                <ul className="bulletpoint lista">
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Igreja+Evang%C3%A9lica+Baptista+de+Aveiro/@40.6406962,-9.5417358,8z/data=!4m8!1m2!2m1!1sIgreja+Evang%C3%A9lica+Batista+!3m4!1s0xd2398037d87598f:0x7eedd8ee3df2be5e!8m2!3d40.6421561!4d-8.6545799?hl=pt-PT&authuser=0"
                    >
                      Igreja Evangélica Batista
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Igreja+Evangelica+Assembleia+de+Deus/@40.6454627,-8.6520249,17z/data=!3m1!4b1!4m5!3m4!1s0xd23981abb867bc5:0xd1ebdaacb68c00b3!8m2!3d40.6454587!4d-8.6498362?hl=pt-PT&authuser=0"
                    >
                      Igreja Evangélica Assembleia de Deus
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Igreja+Pentecostal+Das+Miss%C3%B5es/@40.6455005,-8.6472873,17z/data=!4m8!1m2!2m1!1sIgreja+Evang%C3%A9lica+Pentecostal+aveiro!3m4!1s0x0:0x58cc90b62be7aad1!8m2!3d40.6438072!4d-8.6452518?hl=pt-PT&authuser=0"
                    >
                      Igreja Evangélica Pentecostal
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Igreja+Evang%C3%A9lica+Metodista+de+Aveiro/@40.679098,-8.9413904,9z/data=!4m8!1m2!2m1!1sIgreja+Evang%C3%A9lica+Metodista!3m4!1s0xd23980fd83eff97:0x8d48e1e1bd1f0bfc!8m2!3d40.6446596!4d-8.6470576?hl=pt-PT&authuser=0"
                    >
                      Igreja Evangélica Metodista
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Igreja+Adventista+do+S%C3%A9timo+Dia+de+Aveiro/@40.6797243,-8.9413858,9z/data=!4m8!1m2!2m1!1sIgreja+Adventista+do+S%C3%A9timo+Dia!3m4!1s0xd2398873e536705:0x309546f8e2017d73!8m2!3d40.6434894!4d-8.6145825?hl=pt-PT&authuser=0"
                    >
                      Igreja Adventista do Sétimo Dia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 3 - JUDAICA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Judaíca
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <p className="p_next">
                  Não existem Sinagogas na cidade de Aveiro nem na região, mas
                  existem várias opções no país:{" "}
                </p>
                <ul className="bulletpoint lista">
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Sinagoga+Kadoorie/@41.1559831,-8.6391765,17z/data=!3m1!4b1!4m5!3m4!1s0xd24650ac0915cc9:0x5a4999976beba15e!8m2!3d41.1559791!4d-8.6369878?hl=pt-PT&authuser=0"
                    >
                      Sinagoga Kadoorie - Mekor Haim (Porto)
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Igreja+da+Miseric%C3%B3rdia+de+Aveiro/@40.6406161,-8.655627,17z/data=!3m1!4b1!4m5!3m4!1s0xd2398046b152567:0x406ee628e84aaf0a!8m2!3d40.6406161!4d-8.6534383?hl=pt-PT&authuser=0"
                    >
                      Sinagogas Shaare Tikvah (Lisboa)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 4 - MUÇULMANA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Muçulmana
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <p className="p_next">
                  A maior Mesquita de Portugal situa-se em Lisboa. Em Aveiro não
                  existem, mas existem várias opções no país:
                </p>
                <ul className="bulletpoint lista">
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Mesquita+de+Viseu/@40.6607851,-7.9108933,17z/data=!4m8!1m2!2m1!1smesquita+viseu!3m4!1s0xd23364eea4b9191:0x74e7b63f80e71a98!8m2!3d40.6611436!4d-7.9087237?hl=pt-PT&authuser=0"
                    >
                      Mesquita de Viseu
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Mesquita+de+Coimbra/@40.2205094,-8.4639049,13z/data=!4m8!1m2!2m1!1sDelega%C3%A7%C3%A3o+da+Comunidade+Isl%C3%A2mica+de+Coimbra!3m4!1s0xd22fed0dd19635f:0x7aceb102ea55efaa!8m2!3d40.2540824!4d-8.4336442?hl=pt-PT&authuser=0"
                    >
                      Mesquita de Coimbra
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Centro+Cultural+Isl%C3%A2mico+do+Porto/@41.1463374,-8.5953697,17z/data=!3m1!4b1!4m5!3m4!1s0xd246493445aa4a5:0xca3eb0d22f6ae707!8m2!3d41.1463334!4d-8.593181?hl=pt-PT&authuser=0"
                    >
                      Mesquita Hazrat Bilal (Porto)
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Cil+-+Comunidade+Islamica+De+Lisboa/@38.7355202,-9.1672563,15z/data=!4m8!1m2!2m1!1sMesquitas+de+Lisboa!3m4!1s0xd1933140531eb3b:0x1fd91861288561a7!8m2!3d38.7355202!4d-9.1585016?hl=pt-PT&authuser=0"
                    >
                      Mesquita de Lisboa (CIL)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 5 - HINDU */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Hindu
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <p className="p_next">
                  Apenas em Lisboa se pode encontrar o Templo Hindu Radha
                  Krishna como lugar de culto;
                </p>
                <ul className="bulletpoint lista">
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Comunidade+Hindu+de+Portugal/@38.7502568,-9.1755246,14z/data=!4m8!1m2!2m1!1sTemplo+Hindu+Radha+Krishna!3m4!1s0xd1932c6d698cacf:0x20cccdbabf664285!8m2!3d38.7701179!4d-9.1736375?hl=pt-PT&authuser=0"
                    >
                      Templo Hindu Radha Krishna
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 6 - BUDISTA */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Budista
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <p className="p_next">
                  O Mosteiro Budista Sumedhārāma localiza-se no Concelho de
                  Mafra (Distrito de Lisboa).
                </p>
                <ul className="bulletpoint lista">
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.pt/maps/place/Mosteiro+Budista+Sumedharama/@38.9784161,-9.3925235,17z/data=!3m1!4b1!4m5!3m4!1s0xd1f27db74e997d9:0xfb7af1655ddfc958!8m2!3d38.978412!4d-9.3903348?hl=pt-PT&authuser=0"
                    >
                      Mosteiro Budista Sumedharama
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcLocaisCulto;
