import React from "react";

const AcSaude = () => {
  return (
    <>
      <div className="accordion" id="accordionExample2">
        {/* 1 - UNIDADES DE SAÚDE */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading1">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-expanded="true"
              aria-controls="collapse2"
            >
              Unidades de saúde
            </button>
          </h2>
          <div
            id="collapse1"
            className="accordion-collapse collapse"
            aria-labelledby="heading1"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <ul className="bulletpoint">
                  <li>
                    <p className="p_next">
                      O <b>Centro de Saúde de Aveiro</b> é uma unidade do
                      Sistema Nacional de Saúde que presta cuidados de saúde
                      genéricos e está localizado{" "}
                      <b>perto do Campus de Santiago</b>. Esta unidade tem um
                      serviço de atendimento permanente (SAP). Em caso de
                      doença, é aqui que te deves dirigir.
                    </p>
                  </li>
                  <li>
                    <p className="p_next">
                      Em caso de <b>emergência maior</b>, o{" "}
                      <b>Hospital de Aveiro</b> é ao lado do Campus principal da
                      UA, em frente ao Departamento de Línguas e Culturas ou nas
                      traseiras do Seminário Santa Joana Princesa. Esta unidade
                      conta com um <b>serviço de urgência aberto 24 horas</b>{" "}
                      por dia.
                    </p>
                  </li>
                  <li>
                    <p className="p_next">
                      Se estiveres a viver em <b>Águeda</b>, poderás recorrer ao{" "}
                      <b>Hospital de Águeda</b> e se estiveres em{" "}
                      <b>Oliveira de Azeméis</b>, ao <b>Hospital da cidade</b>.
                      Também estes fazem parte do Sistema Nacional de Saúde.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 2 - PAGAMENTOS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading2">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="false"
              aria-controls="collapse2"
            >
              Pagamentos
            </button>
          </h2>
          <div
            id="collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="heading2"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <ul className="bulletpoint">
                  <li>
                    <p className="p_next">
                      Os cuidados e serviços de saúde são sempre pagos
                      diretamente pelo <b>utente</b> ou, então, através de um{" "}
                      <b>seguro de saúde</b>.
                    </p>
                  </li>
                  <li>
                    <p className="p_next">
                      Os cidadãos da União Europeia podem apresentar o Cartão
                      Europeu de Seguro de Doença.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 3 - VACINAS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3"
              aria-expanded="false"
              aria-controls="collapse3"
            >
              Vacinas
            </button>
          </h2>
          <div
            id="collapse3"
            className="accordion-collapse collapse"
            aria-labelledby="heading3"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <ul className="bulletpoint">
                  <li>
                    <p className="p_next">
                      Não há exigências legais relativamente a vacinas para
                      poder entrar e residir no território português. No
                      entanto, o Ministério da Saúde recomenda que todos os
                      cidadãos sejam vacinados contra o <b>tétano</b> e que
                      façam a renovação desta vacina <b>a cada 10 anos</b>.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 4 - FARMÁCIAS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading4">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-expanded="false"
              aria-controls="collapse4"
            >
              Farmácias
            </button>
          </h2>
          <div
            id="collapse4"
            className="accordion-collapse collapse"
            aria-labelledby="heading4"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <ul className="bulletpoint">
                  <li>
                    <p className="p_next">
                      As farmácias estão abertas, geralmente, de{" "}
                      <b>segunda a sexta-feira</b>, das <b>9h às 13h</b> e das{" "}
                      <b>15h às 19h</b>, e ao <b>sábado</b>, das{" "}
                      <b>9h às 13h</b>.
                    </p>
                  </li>
                  <li>
                    <p className="p_next">
                      No entanto, o acesso a uma farmácia está sempre assegurado
                      pelo funcionamento do sistema <b>"Farmácias de Serviço"</b>.
                      Todos os dias, existe, pelo menos, uma farmácia que está
                      <b>aberta 24 horas</b>, segundo um sistema rotativo. Os endereços
                      e números de telefone da farmácia de serviço está
                      disponível na internet, na aplicação Farmácias
                      Portuguesas, nos jornais e ainda nas montras de todas as
                      farmácias.
                    </p>
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

export default AcSaude;
