import React from "react";

const Preparar = () => {
  return (
    <>
      <div className="container">
        {/* AREA 1 DECLARAÇÃO DE MATRÍCULA */}
        <div id="1" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Declaração de Matrícula</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <p>
              Após a matrícula, receberás por <b>correio eletrónico</b> a
              Declaração de Matrícula. Este documento deverá ser utilizado como
              prova no processo de <b>solicitação de visto de estudo</b>.
            </p>
          </div>
        </div>
        {/* AREA 2 VISTO DE ESTUDO */}
        <div id="2" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Visto de Estudo</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <p className="p_next">
              Necessitas de ter um visto de estudo e um passaporte válido para{" "}
              <b>viajar para Portugal</b> e para entrar em território português.
            </p>
            <p>
              Se entrares em território europeu por outro país da zona Schengen
              (por exemplo, numa escala aeroportuária), és obrigado a{" "}
              <b>declarar ao Serviço de Estrangeiros e Fronteiras</b>, no prazo
              de três dias úteis a contar da tua entrada em Portugal, a tua{" "}
              <b>chegada ao país</b> – no passaporte será apenas registado o
              país de entrada na União Europeia.
            </p>
          </div>
        </div>
        {/* AREA 3 DOCUMENTOS NECESSÁRIOS */}
        <div id="3" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Documentos Necessários</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <p className="p_next">
              Vais precisar de trazer contigo os seguintes documentos válidos:
            </p>
            <ul className="bulletpoint lista">
              <li>
                Documento de identificação pessoal (documento nacional ou
                passaporte);
              </li>
              <li>
                Diplomas ou certidões comprovativas das habilitações indicadas
                na candidatura devidamente autenticadas pelos serviços oficiais
                de educação do país de origem;
              </li>
              <li>Apostila de Haia;</li>
              <li>Boletim de vacinas atualizado (vacina do tétano).</li>
            </ul>

            <p>
              Vais ainda necessitar de trazer uma{" "}
              <b>fotografia (tamanho tipo passaporte)</b> para entregar nos
              Serviços de Gestão Académica da UA, à chegada, pelo que podes
              tratar disso antes da viagem, se assim preferires.
            </p>
          </div>
        </div>
        {/* AREA 4 APOSTILA DE HAIA */}
        <div id="4" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Apostila de Haia</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <p className="p_next">
              Parte da{" "}
              <b>documentação que submeteste no processo de candidatura</b> terá
              de ser <b>apostilada junto das entidades competentes</b>, antes de
              viajares para Portugal.
            </p>
            <p className="p_next">
              A Apostila de Haia é um <b>certificado de autenticidade</b> que é
              colocado num documento público para atestar a sua origem
              (assinatura, cargo de agente público, selo ou carimbo da
              instituição) e deverá ser entregue quando precisares de apresentar
              um destes documentos num outro país que não aquele onde foi
              emitido.{" "}
            </p>
            <p className="p_next">
              Por exemplo, se o país de origem for o Brasil, a apostila de Haia
              é emitida pelo cartório aprovado pelo Conselho Nacional de Justiça
              e não pelos consulados ou embaixada de Portugal.{" "}
            </p>
            <p className="p_next">
              No caso de um estudante que vai estudar para outro país, os
              documentos a apostilar são os <b>diplomas</b> (graduação
              secundária ou superior) e, se aplicável, os{" "}
              <b>históricos escolares</b>. Os resultados do ENEM não precisam
              ser apostilados.
            </p>
          </div>
        </div>
        {/* AREA 5 PAGAMENTOS */}
        <div id="5" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Pagamentos</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <p className="p_next">
              Durante o mês de <b>setembro</b>, será emitida uma{" "}
              <b>referência multibanco</b> para o pagamento da{" "}
              <b>taxa de matrícula</b> e da <b>primeira prestação da propina</b>{" "}
              (anuidade). Essa informação será enviada para o teu novo email da
              UA e poderá também ser consultada no espaço pessoal do Portal
              Académico da UA (
              <a
                className="link"
                href="https://paco.ua.pt/"
                target="_blank"
                rel="noreferrer"
              >
                PACO
              </a>
              ) . Este pagamento pode ser feito usando um terminal{" "}
              <b>multibanco (ATM)</b> ou diretamente num{" "}
              <b>balcão dos Serviços de Gestão Académica</b>.
            </p>
            <p>
              O não pagamento da propina nos prazos estabelecidos implica a
              nulidade de todos os atos curriculares praticados pelo estudante
              nesse ano letivo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preparar;
