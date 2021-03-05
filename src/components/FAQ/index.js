import React from "react";
import Filter from "./filter";
import AcVisto from "./Accordions/ac_vistos";
import AcTaxas from "./Accordions/ac_taxas";
import AcBolsas from "./Accordions/ac_bolsas";
import AcCusto from "./Accordions/ac_custo";
import AcAlojamento from "./Accordions/ac_alojamento";
import AcViver from "./Accordions/ac_viver";
import AcEstudar from "./Accordions/ac_estudar";
import AcVidaacademica from "./Accordions/ac_vidaacademica";

const FAQ = () => {
  return (
    <>

      <div className="container  mt-4">
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
          </div>
          <div className="col-md-8">
            <Filter />
          </div>
        </div>
        {/* AREA 1 VISTOS E AUTORIZAÇÃO DE RESIDENCIA */}
        <div id="1" className="fantasmaAncora"></div>
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <h2>Vistos e Autorização de Residência</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8 marginB_title">
            <AcVisto />
          </div>
        </div>

        {/* AREA 2 TAXAS DE FREQUÊNCIA E OUTROS CUSTOS */}
        <div id="2" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Taxas de frequência e outros custos</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8 marginB_title">
            <AcTaxas />
          </div>
        </div>

        {/* AREA 3 BOLSAS */}
        <div id="3" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Bolsas</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8 marginB_title">
            <AcBolsas />
          </div>
        </div>

        {/* AREA 4 CUSTO DE VIDA E OUTROS */}
        <div id="4" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Custo de vida e outros</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8 marginB_title">
            <AcCusto />
          </div>
        </div>

        {/* AREA 5 ALOJAMENTO */}
        <div id="5" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Alojamento</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8 marginB_title">
            <AcAlojamento />
          </div>
        </div>

        {/* AREA 6 VIVER EM AVEIRO E PT */}
        <div id="6" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Viver em Aveiro e em Portugal</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8 marginB_title">
            <AcViver />
          </div>
        </div>

        {/* AREA 7 ESTUDAR EM AVEIRO */}
        <div id="7" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Estudar em Aveiro</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8 marginB_title">
            <AcEstudar />
          </div>
        </div>

        {/* AREA 8 VIDA ACADÉMICA */}
        <div id="8" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4 marginB_section">
          <div className="col-md-4 mb-3">
            <h2>Vida académica</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8 marginB_title">
            <AcVidaacademica />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
