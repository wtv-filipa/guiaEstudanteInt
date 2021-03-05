import React from "react";

const AcTaxas = () => {
  return (
    <>
      <div className="accordion" id="accordionExample_taxas">
        {/* 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="taxas_heading1">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#taxas_collapse1"
              aria-expanded="true"
              aria-controls="taxas_collapse1"
            >
              1. Que taxas de frequência (anuidade) e de matrícula terei de
              pagar?
            </button>
          </h2>
          <div
            id="taxas_collapse1"
            className="accordion-collapse collapse"
            aria-labelledby="taxas_heading1"
            data-bs-parent="#accordionExample_taxas"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <ul>
                  <li className="p_accordion">
                    <p className="p_next">
                      A taxa de frequência (anuidade) para estudantes
                      internacionais (admitidos na UA para Licenciatura ou
                      Mestrado Integrado através do Concurso Especial de Acesso
                      e Ingresso do Estudante Internacional) é: <b>€5,500.00</b>{" "}
                      para cursos nas áreas de artes, ciências e engenharias;
                      <b>€4,650.00</b> para cursos nas áreas de economia,
                      gestão, matemática e ciências da educação;{" "}
                      <b>€4,000.00</b> para cursos nas áreas de humanidades,
                      ciências políticas e sociais.
                    </p>
                  </li>
                  <li className="p_accordion">
                    <p className="p_next">
                      Para além disso, os estudantes devem{" "}
                      <b>pagar uma taxa de matrícula por cada ano</b> que
                      corresponde a 2% sobre o valor da taxa de frequência. A
                      taxa de frequência <b>pode ser paga em prestações</b>.
                      Pormenores acerca da forma de pagamento em prestações
                      ser-te-ão facultados por correio electrónico aquando da
                      tua admissão na UA.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="taxas_heading2">
            <button
              className="accordion-button collapsed text-left"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#taxas_collapse2"
              aria-expanded="false"
              aria-controls="taxas_collapse2"
            >
              2. Existem outras taxas para além das taxas de frequência e de
              matrícula?
            </button>
          </h2>
          <div
            id="taxas_collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="taxas_heading2"
            data-bs-parent="#accordionExample_taxas"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Todos os estudantes que se encontram matriculados na UA são
                solicitados a pagar outras taxas a que se chamam{" "}
                <b>emolumentos</b>, para a{" "}
                <b>obtenção de certificados e diplomas</b> e também para os{" "}
                <b>pedidos de creditações e equivalências</b>. A lista completa
                de emolumentos está publicada em{" "}
                <a
                  href="www.ua.pt/sga"
                  target="_blank"
                  rel="noreferer"
                  className="link"
                >
                  www.ua.pt/sga
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        {/* 3*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="taxas_heading3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#taxas_collapse3"
              aria-expanded="false"
              aria-controls="taxas_collapse3"
            >
              3. Terei direito a seguro de acidentes pessoais ou de saúde na UA?
            </button>
          </h2>
          <div
            id="taxas_collapse3"
            className="accordion-collapse collapse"
            aria-labelledby="taxas_heading3"
            data-bs-parent="#accordionExample_taxas"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Quando fizeres o pagamento das taxas de frequência e de
                matrícula ficas{" "}
                <b>
                  automaticamente abrangido por um seguro de acidentes pessoais
                </b>
                . Este seguro dá cobertura a danos corporais sofridos no âmbito
                de atividade escolar e circum-escolar. Em caso de acidente
                deverás contactar a Universidade de imediato, de forma a poder
                ativar o seguro. <b>A UA não providencia o seguro de saúde</b>.
                Este é da total responsabilidade do estudante.
              </p>
            </div>
          </div>
        </div>
        {/* 4*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="taxas_heading4">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#taxas_collapse4"
              aria-expanded="false"
              aria-controls="taxas_collapse4"
            >
              4. Onde e como poderei proceder ao pagamento das taxas de
              frequência e matrícula?
            </button>
          </h2>
          <div
            id="taxas_collapse4"
            className="accordion-collapse collapse"
            aria-labelledby="taxas_heading4"
            data-bs-parent="#accordionExample_taxas"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <ul>
                  <li className="p_accordion">
                    <p className="p_next">
                      Normalmente não existe a necessidade de fazer o pagamento
                      das taxas antes da chegada a Portugal. As aulas têm início
                      em meados de setembro e tens até ao último dia desse mês
                      para proceder ao pagamento da primeira prestação da taxa
                      de frequência. Os pagamentos são{" "}
                      <b>
                        feitos através das caixas automáticas Multibanco em
                        Portugal
                      </b>
                      . As referências para pagamento são enviadas por{" "}
                      <b>correio eletrónico</b> com a notificação da sua
                      matrícula.
                    </p>
                  </li>
                  <li className="p_accordion">
                    <p className="p_next">
                      Se preferires poderás efetuar o pagamento das taxas por{" "}
                      <b>cheque</b>, <b>vale postal</b> ou ainda{" "}
                      <b>
                        em dinheiro nos balcões dos Serviços de Gestão Académica
                      </b>{" "}
                      que se situam no edifício central da Reitoria (edifício
                      n.º 25 do mapa do Campus). Por razões de logística, não é
                      possível receber o pagamento das taxas através de
                      transferência bancária internacional, mas poderão existir
                      exceções. Informa-te através do endereço{" "}
                      <a className="link" href="mailto:academicos@ua.pt">
                        academicos@ua.pt
                      </a>
                      .
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 5*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="taxas_heading5">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#taxas_collapse5"
              aria-expanded="false"
              aria-controls="taxas_collapse5"
            >
              5. Tenho direito a um recibo aquando do pagamento das taxas?
            </button>
          </h2>
          <div
            id="taxas_collapse5"
            className="accordion-collapse collapse"
            aria-labelledby="taxas_heading5"
            data-bs-parent="#accordionExample_taxas"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Poderás obter o teu recibo de pagamento nos Serviços de Gestão
                Académica que se situam no edifício central da Reitoria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcTaxas;
