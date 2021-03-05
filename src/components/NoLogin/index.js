import React from "react";
import { PrimaryBTN } from "../PrimaryBTN";
import "../../styles/nologin.css";

const NoLogin = () => {
  return (
    <section className="fundoNologin">
      <div className="container posicionarCard">
        <div class="card">
          <div class="card-body">
            <p className="p_next">
              Para acederes à página selecionada deves iniciar sessão através do
              teu email da Universidade de Aveiro. Lembra-te que ao iniciar
              sessão tens a posíbilidade de criar os teus próprios testemunhos e
              ainda aceder a uma To Do List com todos os passos desde a saída do
              teu país de origem até à Chegada à UA!
            </p>
            <PrimaryBTN
              novaClass="iniciaSessao"
              link="https://wso2-gw.ua.pt/authorize?response_type=code&scope=openid&redirect_uri=http://localhost:3000/&client_id=IfLufdLinMxBrXfX3laC8sSi2pYa"
              title="iniciar sessão"
              texto="Iniciar sessão"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoLogin;
