import React from "react";
import ServicosUrgencia from "./accordions_emerg/servicosUrgencia";
import ServicosSaude from "./accordions_emerg/servicosSaude";
import BombeirosAveiro from "./accordions_emerg/bombeirosAveiro";
import SegurancaPublica from "./accordions_emerg/segurancaPublica";
import LinhasApoio from "./accordions_emerg/linhasApoio";

const ContactosEmergencia = () => {
  return (
    <>
      <div className="container">
        <div id="cEmergencia" className="marginB_section mt-4">

          {/* AREA 1 SERVICOS NACIONAIS DE URGENCIA */}
          <div className="row">
            <div className="col-md-4 marginB_title">
              <h2>Serviços Nacionais de Urgência</h2>
              <div className="orange_line"></div>
            </div>
            <div className="col-md-8 mt-2">
              <ServicosUrgencia />
            </div>
          </div>

          {/* AREA 2 SERVIÇOS DE SAUDE */}
          <div className="row">
            <div className="col-md-4 marginB_title">
              <h2>Serviços de Saúde</h2>
              <div className="orange_line"></div>
            </div>
            <div className="col-md-8 mt-2">
              <ServicosSaude />
            </div>
          </div>

          {/* AREA 3 BOMBEIROS DE AVEIRO */}
          <div className="row">
            <div className="col-md-4 marginB_title">
              <h2>Bombeiros de Aveiro</h2>
              <div className="orange_line"></div>
            </div>
            <div className="col-md-8 mt-2">
            <BombeirosAveiro />
            </div>
          </div>

          {/* AREA 4 SEGURANÇA PUBLICA */}
          <div className="row">
            <div className="col-md-4 marginB_title">
              <h2>Segurança Pública</h2>
              <div className="orange_line"></div>
            </div>
            <div className="col-md-8 mt-2">
            <SegurancaPublica />
            </div>
          </div>

          {/* AREA 5 LINHAS DE APOIO */}
          <div className="row">
          <div id="linhasApoio" className="fantasmaAncora"></div>
            <div className="col-md-4 marginB_title">
              <h2>Linhas de Apoio</h2>
              <div className="orange_line"></div>
            </div>
            <div className="col-md-8 mt-2">
            <LinhasApoio />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactosEmergencia;
