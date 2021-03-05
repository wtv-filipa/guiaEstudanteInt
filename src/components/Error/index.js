import React from "react";
import { PrimaryBTN } from "../PrimaryBTN";
import dashedLine from "../../imgs/error/dashed_line.svg"
import airplane from "../../imgs/error/airplane.svg"
import smile from "../../imgs/error/sad.svg";
import "../../styles/error_page.css";

const ErrorPage = () => {
    return (
        <section className="container marginB_section">
            <div className="error-page">
                <div className="img-position">
                    <img
                        src={dashedLine}
                        alt="Linha tracejada"
                        className="img-line"
                    />
                    <div className="img-animation">
                        <img
                            src={airplane}
                            alt="Avião"
                            className="img-plane"
                        />
                    </div>
                </div>
                <div className="txt-position">
                    <h2 className="text-sub p-next">
                        Oops, aconteceu um erro a processar o teu pedido 
                        <img
                        src={smile}
                        alt="Cara confusa"
                        className="smile-img"
                    />
                    </h2>
                    <PrimaryBTN
                        novaClass="testemunho"
                        link="/"
                        title="Ir para a página inicial"
                        texto="Voltar à página inicial"
                    />
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
