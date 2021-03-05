import React from "react";

const AcBolsas = () => {
  return (
    <>
      <div className="accordion" id="accordionExample2">
        {/* 1 */}
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
              1. Posso candidatar-me a uma bolsa de estudo do Estado português?
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
                <ul>
                  <li>
                    <p className="p_next">
                      O estudante enquadrado pelo “Concursos Especial de Acesso
                      e Ingresso do Estudante Internacional”{" "}
                      <b>não poderá candidatar-se</b> a uma bolsa de estudo do
                      Estado português. Todavia poderá, se cumprir com os
                      requisitos previstos para o efeito, beneficiar da
                      atribuição pela Universidade de Aveiro da designada{" "}
                      <b>Bolsa Incentivo</b> (
                      <a
                        href="http://www.ua.pt/internationalstudent/PageText.aspx?id=20985"
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        http://www.ua.pt/internationalstudent/PageText.aspx?id=20985
                      </a>
                      ).
                    </p>
                  </li>
                  <li>
                    <p className="p_next">
                      Este apoio permite aos estudantes internacionais o{" "}
                      <b>pagamento de uma taxa de frequência anual</b>{" "}
                      (anuidade) de montante equivalente à suportada pelo
                      estudante nacional, de acordo com os mecanismos de
                      incentivo à inscrição de estudantes internacionais
                      previstos pela Direção Geral do Ensino Superior. Caso seja
                      atribuída a referida Bolsa, e para o{" "}
                      <b>ano letivo 2019/2020</b>, o valor máximo a pagar pela
                      anuidade será de <b>€871,52</b>.
                    </p>
                  </li>
                  <li>
                    <p className="p_next">
                      De referir que a Bolsa Incentivo será atribuída{" "}
                      <b>automaticamente</b> a todos os candidatos selecionados
                      com uma nota final de candidatura{" "}
                      <b>igual ou superior a 14 valores</b> (de 0 a 20). De
                      notar que a manutenção da Bolsa de Incentivo nos anos
                      letivos subsequentes depende da inscrição em regime de
                      tempo integral e da obtenção de aproveitamento escolar no
                      ano letivo anterior.
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

export default AcBolsas;
