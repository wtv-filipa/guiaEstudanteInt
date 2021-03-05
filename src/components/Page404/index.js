import React from "react";
import { PrimaryBTN } from "../PrimaryBTN";
import "../../styles/page404.css";

const Page404 = () => {
  return (
    <section className="container page404 marginB_section">
      <div className="row">
        <div className="col-5 text-end">
          <div className="err">4</div>
        </div>
        <div className="col-2 my-auto text-center">
          <i className="far fa-question-circle fa-spin"></i>
        </div>
        <div className="col-5 text-start">
          <div className="err2">4</div>
        </div>
      </div>
      <p className="text-center text404">
        Oops, aconteceu um erro a processar o teu pedido. Talvez a página que
        procuras não exista...
      </p>

      <PrimaryBTN
        alinhar="text-center"
        novaClass="testemunho"
        link="/"
        title="Ir para a página inicial"
        texto="Voltar à página inicial"
      />
    </section>
  );
};

export default Page404;
