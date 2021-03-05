import React from "react";

const AcEstudar = () => {
  return (
    <>
      <div className="accordion" id="accordionExample_estudar">
        {/* 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="estudar_heading1">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#estudar_collapse1"
              aria-expanded="true"
              aria-controls="estudar_collapse1"
            >
              1. A Universidade de Aveiro é uma instituição multicultural?
            </button>
          </h2>
          <div
            id="estudar_collapse1"
            className="accordion-collapse collapse"
            aria-labelledby="estudar_heading1"
            data-bs-parent="#accordionExample_estudar"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <ul>
                  <li>
                    <p className="p_next">
                      <b>Sim</b>. A UA é frequentada por{" "}
                      <b>mais de 2500 estudantes estrangeiros</b>, de{" "}
                      <b>mais de noventa nacionalidades</b>, entre os quais os
                      oriundos dos países pertencentes à Comunidade de Países de
                      Língua Portuguesa (CPLP). A diversidade cultural, muito
                      vincada nos vários campi da UA, enriquece sobremaneira a
                      comunidade académica como um todo e lhe empresta um
                      conjunto de características muito particulares.
                    </p>
                  </li>
                  <li>
                    <p className="p_next">
                      É nesse contexto que{" "}
                      <b>
                        ao longo do ano letivo se realizam diversas atividades
                      </b>{" "}
                      culturais , desportivas, lúdicas, pedagógicas, de
                      intervenção social, envolvendo as comunidades e
                      estimulando a participação ativa dos seus membros. A
                      aposta numa Universidade intercultural e inclusiva, faz do
                      projeto institucional um desafio permanente.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="estudar_heading2">
            <button
              className="accordion-button collapsed text-left"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#estudar_collapse2"
              aria-expanded="true"
              aria-controls="estudar_collapse2"
            >
              2. Os graus portugueses são reconhecidos no resto do mundo?
            </button>
          </h2>
          <div
            id="estudar_collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="estudar_heading2"
            data-bs-parent="#accordionExample_estudar"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                A educação superior portuguesa é reconhecidamente{" "}
                <b>valorizada</b> por todo o mundo muito graças à{" "}
                <b>qualidade da investigação</b> e dos seus{" "}
                <b>programas educativos</b>. Orientada para a pesquisa, a UA
                está consistentemente no topo (3-4%) das listas de ordenação das
                universidades mundiais.
              </p>
              <p className="p_accordion">
                Todos os graus lecionados na UA estão{" "}
                <b>
                  devidamente acreditados na agência nacional de acreditação
                </b>
                , permitindo o reconhecimento necessário à entrada no mercado do
                trabalho ou à continuação dos estudos superiores noutro país.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcEstudar;
