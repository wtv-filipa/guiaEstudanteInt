import React from "react";

const AcCusto = () => {
  return (
    <>
      <div className="accordion" id="accordionExample_custo">
        {/* 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="custo_heading1">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#custo_collapse1"
              aria-expanded="true"
              aria-controls="custo_collapse1"
            >
              1. Qual é o custo de vida em Portugal?
            </button>
          </h2>
          <div
            id="custo_collapse1"
            className="accordion-collapse collapse"
            aria-labelledby="heading1"
            data-bs-parent="#accordionExample_custo"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Em termos médios, um estudante em Portugal gastará{" "}
                <b>entre 500€ e 600€ por mês</b> em alojamento, alimentação,
                transportes e outras despesas básicas.
              </p>
              <p className="p_accordion">
                Apesar do normal aumento dos preços, viver em Portugal continua
                a ser mais barato do que em muitos outros países Europeus. As{" "}
                <b>refeições no Campus</b> custam cerca de <b>€2,55</b>. Os
                <b>transportes públicos</b> são muito acessíveis (menos de 1€
                por cada 10km em comboio). Para mais informações, consulta o{" "}
                <a
                  href="https://studyinportugalnetwork.com/"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  portal Study in Portugal
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="custo_heading2">
            <button
              className="accordion-button collapsed text-left"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#custo_collapse2"
              aria-expanded="false"
              aria-controls="custo_collapse2"
            >
              2. Que quantia de dinheiro é aconselhável que eu leve comigo para
              Portugal?
            </button>
          </h2>
          <div
            id="custo_collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="heading2"
            data-bs-parent="#accordionExample_custo"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Um estudante em Portugal gasta normalmente{" "}
                <b>entre €500 e €600 por mês</b> para alojamento, comida,
                transporte e outras necessidades básicas. Por favor providencia{" "}
                <b>algum dinheiro extra</b> para despesas de instalação (por
                exemplo para pagar a caução do seu alojamento).
              </p>
            </div>
          </div>
        </div>
        {/* 3*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="custo_heading3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#custo_collapse3"
              aria-expanded="false"
              aria-controls="custo_collapse3"
            >
              3. Posso proceder à abertura de uma conta bancária em Portugal?
            </button>
          </h2>
          <div
            id="custo_collapse3"
            className="accordion-collapse collapse"
            aria-labelledby="heading3"
            data-bs-parent="#accordionExample_custo"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                <b>Sim</b>. Podes abrir uma conta em qualquer banco da sua
                escolha. O sistema bancário em Portugal é um sistema sólido e de
                uso fácil. Recomendamos que, antes de te deslocares para
                Portugal, <b>contactes o teu próprio banco</b>, no teu país,
                para conselhos relativamente a transferências bancárias e também
                para o uso de cartões de débito e crédito.
              </p>
            </div>
          </div>
        </div>
        {/* 4*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="custo_heading4">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#custo_collapse4"
              aria-expanded="false"
              aria-controls="custo_collapse4"
            >
              4. Sou obrigado a depositar dinheiro num banco em Portugal antes
              da minha entrada no país?
            </button>
          </h2>
          <div
            id="custo_collapse4"
            className="accordion-collapse collapse"
            aria-labelledby="custo_heading4"
            data-bs-parent="#accordionExample_custo"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                <b>Não</b>. Não há qualquer obrigatoriedade de depositar
                dinheiro num banco em Portugal antes da sua chegada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcCusto;
