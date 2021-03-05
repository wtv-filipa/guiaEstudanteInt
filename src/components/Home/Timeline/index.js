import React from "react";
import { PrimaryBTNWhite } from "../../PrimaryBTN";
import Timeline_1 from "../../../imgs/timeline/timeline_1.svg";
import Timeline_2 from "../../../imgs/timeline/timeline_2.svg";
import Timeline_3 from "../../../imgs/timeline/timeline_3.svg";
import "../../../styles/timeline.css";

const FirstSection = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <h2 className="title_white">Entrei na UA... E agora?</h2>
        <div className="orange_line"></div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src={Timeline_1}
                alt="Número 1"
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="title_timeline">Preparar</h4>
              </div>
              <div className="timeline-body">
                <div>
                  Não sabes o que tens de fazer para preparar a tua viagem até
                  Aveiro? Aqui tens todas as informações que precisas!
                  <PrimaryBTNWhite
                    texto="Sabe mais"
                    alinhar="mt-3 text-sm-left text-md-right"
                    link="/prepararviagem"
                    title="Ir para a página Preparar a Viagem"
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src={Timeline_2}
                alt="Número 2"
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="title_timeline">Acolher</h4>
              </div>
              <div className="timeline-body">
                <div>
                  Acabaste de chegar a Aveiro e não sabes o que fazer? Nós temos
                  as respostas para todas as tuas perguntas!
                  <PrimaryBTNWhite
                    texto="Sabe mais"
                    alinhar="mt-3 text-start"
                    link="/chegadaaveiro"
                    title="Ir para a página Chegada a Aveiro"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src={Timeline_3}
                alt="Número 3"
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="title_timeline">Integrar</h4>
              </div>
              <div className="timeline-body">
                <div>
                  O processo da tua integração começa já no teu país de origem,
                  mas acontece maioritariamente quando chegas à UA.
                  <PrimaryBTNWhite
                    texto="Sabe mais"
                    alinhar="mt-3 text-sm-left text-md-right"
                    link="/processointegracao"
                    title="Ir para a página Processo de Integração"
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FirstSection;
