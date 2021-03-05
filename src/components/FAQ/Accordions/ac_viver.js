import React from "react";

const AcViver = () => {
  return (
    <>
      <div className="accordion" id="accordionExample_viver">
        {/* 1*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="viver_heading1">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#viver_collapse1"
              aria-expanded="true"
              aria-controls="viver_collapse1"
            >
              1. Aveiro é uma cidade segura?
            </button>
          </h2>
          <div
            id="viver_collapse1"
            className="accordion-collapse collapse"
            aria-labelledby="viver_heading1"
            data-bs-parent="#accordionExample_viver"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                <b>Sim</b>. Com cerca de 80 mil habitantes, Aveiro é uma pequena
                cidade bastante segura para se viver, sem qualquer ameaça de
                violência ou criminalidade em especial.
              </p>
              <p className="p_accordion">
                De qualquer forma, aconselhamos os nossos estudantes a{" "}
                <b>tomar as precauções normais</b> que qualquer um tomaria em
                qualquer lugar da Europa, como não andar a pé sozinho até muito
                tarde de noite, não aceitar boleia/carona de desconhecidos, não
                deixar os haveres pessoais sem vigilância, guardar a carteira
                quando não necessitar dela e por aí em diante.
              </p>
            </div>
          </div>
        </div>
        {/* 2*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="viver_heading2">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#viver_collapse2"
              aria-expanded="true"
              aria-controls="viver_collapse2"
            >
              2. Quais são os serviços de assistência médica disponíveis?
            </button>
          </h2>
          <div
            id="viver_collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="viver_heading2"
            data-bs-parent="#accordionExample_viver"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                O <b>centro de saúde</b> é uma unidade do Sistema Nacional de
                Saúde que presta cuidados de saúde genéricos e está localizado
                junto ao Campus da UA. Em caso de doença, é aqui que te deves
                dirigir. O <b>Hospital Distrital de Aveiro</b>, também
                integrante do Sistema Nacional de Saúde, está localizado em
                frente à UA e conta com um serviço de urgência aberto 24 horas
                por dia.
              </p>
              <p className="p_accordion">
                Existe também o <b>Centro de Saúde Universitário</b> localizado
                no próprio campus, onde é possível aceder a cuidados de saúde,
                nomeadamente de clínica geral, enfermagem, psicologia ou
                ginecologia. Além dos serviços públicos referidos, existem em
                Aveiro diversos <b>serviços de saúde privados</b> (clínica
                geral, dentistas, etc.), com descontos para estudantes e
                funcionários da UA.
              </p>
            </div>
          </div>
        </div>
        {/* 3*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="viver_heading3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#viver_collapse3"
              aria-expanded="true"
              aria-controls="viver_collapse3"
            >
              3. É necessária vacinação para entrar em Portugal?
            </button>
          </h2>
          <div
            id="viver_collapse3"
            className="accordion-collapse collapse"
            aria-labelledby="viver_heading3"
            data-bs-parent="#accordionExample_viver"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Não existem requisitos especiais de vacinação para a entrada ou
                permanência em território Português.
              </p>
            </div>
          </div>
        </div>
        {/* 4*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="viver_heading4">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#viver_collapse4"
              aria-expanded="false"
              aria-controls="viver_collapse4"
            >
              4. Portugal está envolvido em qualquer conflito militar?
            </button>
          </h2>
          <div
            id="viver_collapse4"
            className="accordion-collapse collapse"
            aria-labelledby="viver_heading4"
            data-bs-parent="#accordionExample_viver"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                <b>Não</b>. Além de manter uma relação pacífica com os países
                vizinhos, Portugal participa em diversos{" "}
                <b>
                  programas de cooperação para o desenvolvimento cultural e
                  económico
                </b>
                , participando na OTAN (Organização do Tratado do Atlântico
                Norte), União Europeia (UE) e Comunidade de Países de Língua
                Portuguesa (CPLP).
              </p>
            </div>
          </div>
        </div>
        {/* 5*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="viver_heading5">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#viver_collapse5"
              aria-expanded="false"
              aria-controls="viver_collapse5"
            >
              5. Existem algumas restrições à prática religiosa em Portugal?
            </button>
          </h2>
          <div
            id="viver_collapse5"
            className="accordion-collapse collapse"
            aria-labelledby="viver_heading5"
            data-bs-parent="#accordionExample_viver"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                <b>Não</b>. Em Portugal existem muitos locais de culto das
                diversas confissões religiosas e a sua prática é, naturalmente,
                livre.
              </p>
            </div>
          </div>
        </div>

        {/* 6*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="viver_heading6">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#viver_collapse6"
              aria-expanded="false"
              aria-controls="viver_collapse6"
            >
              6. Qual é a qualidade do ar e da água?
            </button>
          </h2>
          <div
            id="viver_collapse6"
            className="accordion-collapse collapse"
            aria-labelledby="viver_heading6"
            data-bs-parent="#accordionExample_viver"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Mesmo nas maiores cidades, Portugal usufrui de uma{" "}
                <b>qualidade do ar muito boa e reduzidos níveis de poluição</b>.
                Localizada junto à costa atlântica, Aveiro tem um clima
                tipicamente costeiro, dominado pelas <b>brisas marítimas</b>.
              </p>
              <p className="p_accordion">
                O fornecimento público de água potável é abundante e de
                excelente qualidade. Tanto as praias, como os rios e os lagos
                proporcionam uma{" "}
                <b>
                  água de boa qualidade para a prática de atividades aquáticas
                </b>
                , com mais de 95% dos locais oficiais de banho cumprindo a
                regulamentação Europeia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcViver;
