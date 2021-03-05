import React from "react";

const AcVidaacademica = () => {
  return (
    <>
      <div className="accordion" id="accordionExample_vida">
        {/* 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="vida_heading1">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#vida_collapse1"
              aria-expanded="true"
              aria-controls="vida_collapse1"
            >
              1. Existe alguma estrutura de apoio ao estudante
              estrangeiro/internacional na Universidade de Aveiro?
            </button>
          </h2>
          <div
            id="vida_collapse1"
            className="accordion-collapse collapse"
            aria-labelledby="vida_heading1"
            data-bs-parent="#accordionExample_vida"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Sim. Existe um espaço designado por <b>UA_I</b> (“UA
                Intercultural”) a que os estudantes estrangeiros podem recorrer
                para obterem os esclarecimentos necessários relativos aos
                diversos assuntos do seu interesse.
              </p>
              <p className="p_accordion">
                Na impossibilidade de o concretizar, serão devidamente
                encaminhados para outros serviços da rede de suporte
                institucional. Desta forma, pretende-se contribuir para o bom
                acolhimento e integração académica e social destes estudantes.
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="vida_heading2">
            <button
              className="accordion-button collapsed text-left"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#vida_collapse2"
              aria-expanded="false"
              aria-controls="vida_collapse2"
            >
              2. Existem algumas atividades ou grupos de desporto, cultura,
              ciência ou arte na UA?
            </button>
          </h2>
          <div
            id="vida_collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="vida_heading2"
            data-bs-parent="#accordionExample_vida"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Sim, existem diversas atividades de índole cultural, desportiva,
                pedagógica entre outras. Estas iniciativas{" "}
                <b>
                  enquadram-se num Programa de Atividades Intercultural anual
                </b>
                , promovido pela UA em articulação com um vasto conjunto de
                entidades e organizações parceiras, donde se destaca, por
                exemplo, a Associação Académica da Universidade de Aveiro (AAUAv).
              </p>
            </div>
          </div>
        </div>
        {/* 3*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="vida_heading3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#vida_collapse3"
              aria-expanded="false"
              aria-controls="vida_collapse3"
            >
              3. Como faço para contactar a associação estudantil?
            </button>
          </h2>
          <div
            id="vida_collapse3"
            className="accordion-collapse collapse"
            aria-labelledby="vida_heading3"
            data-bs-parent="#accordionExample_vida"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Além dos contactos indicados em{" "}
                <a
                  href="www.aauav.pt"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.aauav.pt
                </a>{" "}
                e das redes sociais (pesquisa "Associação Académica da
                Universidade de Aveiro"), podes sempre solicitar informações
                sobre as atividades e os contactos dos vários núcleos
                diretamente ao <b>balcão de atendimento da Casa do Estudante</b>{" "}
                (sede da AAUAv).
              </p>
            </div>
          </div>
        </div>
        {/* 4*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="vida_heading4">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#vida_collapse4"
              aria-expanded="false"
              aria-controls="vida_collapse4"
            >
              4. Como faço para me tornar membro da associação estudantil?
            </button>
          </h2>
          <div
            id="vida_collapse4"
            className="accordion-collapse collapse"
            aria-labelledby="vida_heading4"
            data-bs-parent="#accordionExample_vida"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Para te associares à AAUAv basta{" "}
                <b>preencheres um formulário de inscrição</b>, incluindo uma
                foto tipo passaporte, e <b>pagar a respetiva quota anual</b>{" "}
                (ano letivo - setembro a agosto)
              </p>
            </div>
          </div>
        </div>
        {/* 5*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="vida_heading5">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#vida_collapse5"
              aria-expanded="false"
              aria-controls="vida_collapse5"
            >
              5. Existe alguma "semana do caloiro"?
            </button>
          </h2>
          <div
            id="vida_collapse5"
            className="accordion-collapse collapse"
            aria-labelledby="vida_heading5"
            data-bs-parent="#accordionExample_vida"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                A UA organiza todos os anos uma semana de acolhimento aos novos
                estudantes no início de cada ano letivo, em <b>outubro</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcVidaacademica;
