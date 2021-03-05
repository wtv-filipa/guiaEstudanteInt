import React from "react";

const AcAlojamento = () => {
  return (
    <>
      <div className="accordion" id="accordionExample_alojamento">
        {/* 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="alojamento_heading1">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#alojamento_collapse1"
              aria-expanded="true"
              aria-controls="alojamento_collapse1"
            >
              1. Como posso candidatar-me a um quarto nas Residências de
              Estudantes da Universidade?
            </button>
          </h2>
          <div
            id="alojamento_collapse1"
            className="accordion-collapse collapse"
            aria-labelledby="alojamento_heading1"
            data-bs-parent="#accordionExample_alojamento"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Os estudantes internacionais, que ingressem na UA por via do
                Concurso Especial de Acesso e Ingresso ou por outra via, podem
                candidatar-se a alojamento em residência universitária{" "}
                <b>entrando em contacto com os Serviços de Ação Social</b> (
                <a className="link" href="mailto:accommodation@ua.pt">
                  accommodation@ua.pt
                </a>
                ). A seleção dos estudantes{" "}
                <b>está sujeita à disponibilidade de vagas</b>.
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="alojamento_heading2">
            <button
              className="accordion-button collapsed text-left"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#alojamento_collapse2"
              aria-expanded="false"
              aria-controls="alojamento_collapse2"
            >
              2. Quais as instalações (comodidades) oferecidas pelas Residências
              Universitárias da Universidade de Aveiro?
            </button>
          </h2>
          <div
            id="alojamento_collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="alojamento_heading2"
            data-bs-parent="#accordionExample_alojamento"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                As Residências Universitárias são constituídas por um conjunto
                de <b>35 blocos residenciais</b> com um total de{" "}
                <b>1.076 camas</b>, distribuídas por quartos individuais ou
                partilhados. As residências contemplam salas de estudo,
                cozinhas, lavandarias e quartos para estudantes com necessidades
                educativas especiais. Dispõem ainda de roupa de cama e
                atoalhados.
              </p>
            </div>
          </div>
        </div>
        {/* 3*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="alojamento_heading3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#alojamento_collapse3"
              aria-expanded="false"
              aria-controls="alojamento_collapse3"
            >
              3. Como posso arrendar um apartamento no mercado privado?
            </button>
          </h2>
          <div
            id="alojamento_collapse3"
            className="accordion-collapse collapse"
            aria-labelledby="alojamento_heading3"
            data-bs-parent="#accordionExample_alojamento"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Existem outras opções para os estudantes para além das
                Residências Universitárias. Muitos estudantes partilham
                apartamentos, localizados nas redondezas da Universidade ou no
                centro da cidade. Normalmente estes apartamentos estão equipados
                com o mobiliário básico e roupa de cama.
              </p>
              <p className="p_accordion">
                Para além de uma quantidade enorme de informação disponível
                através das redes sociais e publicidade na internet sobre
                alojamento, <b>a fonte mais segura e atualizada sobre o tema</b>{" "}
                pode ser encontrada nos seguintes endereços:
              </p>
              <ul>
                <li>
                  <p className="p_next">
                    A <b>página dos Serviços de Ação Social</b> da Universidade
                    tem listas de alojamento privado certificado;
                  </p>
                </li>
                <li>
                  <p className="p_next">
                    Existem vários <b>grupos no Facebook</b> dedicados ao
                    arrendamento (aluguer) de quartos e apartamentos;
                  </p>
                </li>
                <li>
                  <p className="p_next">
                    Pode procurar em <b>websites</b> como Idealista, OLX,
                    Uniplaces, entre muitos outros. <b>Atenção</b>: nunca faças
                    nenhum pagamento ou transferência de dinheiro sem ter a
                    certeza de que estes são fidedignos;
                  </p>
                </li>
                <li>
                  <p className="p_next">
                    Os <b>painéis de avisos na Universidade e nos cafés</b> da
                    cidade são fontes informais mas eficazes de saber o que está
                    disponível no mercado do arrendamento;
                  </p>
                </li>
                <li>
                  <p className="p_next">
                    As{" "}
                    <b>secções de publicidade disponíveis nos jornais locais</b>{" "}
                    publicam anúncios para arrendamento de quartos e
                    apartamentos a estudantes, (por exemplo Diário de Aveiro,
                    Notícias de Aveiro).
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 4*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="alojamento_heading4">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#alojamento_collapse4"
              aria-expanded="false"
              aria-controls="alojamento_collapse4"
            >
              4. Quais são os preços comuns do alojamento para Estudantes em
              Aveiro?
            </button>
          </h2>
          <div
            id="alojamento_collapse4"
            className="accordion-collapse collapse"
            aria-labelledby="alojamento_heading4"
            data-bs-parent="#accordionExample_alojamento"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Nas <b>Residências Universitárias</b>, o{" "}
                <b>preço mínimo é de 160€ por mês</b> (despesas de eletricidade,
                água e internet incluídas). Num apartamento de estudantes podes
                pagar <b>entre 150€ e 250€ por mês</b> por um{" "}
                <b>quarto individual</b>, podendo as despesas de eletricidade e
                água ser cobradas à parte. <b>Quartos partilhados</b> são menos
                dispendiosos (cerca de <b>130€ por mês</b>).{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcAlojamento;
