import React from "react";
import OrgaosUA from "./accordions_est/orgaos_ua";
import ServicosUA from "./accordions_est/servicos_ua";
import OutrosServicos from "./accordions_est/outros_servicos";
import EscolasPoli from "./accordions_est/escolas_poli";
import EntidadesParc from "./accordions_est/entidades_parc";
import Departamentos from "./accordions_est/departamentos";

const ContactosEstruturas = () => {
    return (
        <>
            <div className="container">
                <div id="cEstrutura" className="marginB_section mt-4">

                    {/* AREA 1 ORGAOS UA */}
                    <div className="row">
                        <div className="col-md-4 marginB_title">
                            <h2>Órgãos da UA</h2>
                            <div className="orange_line"></div>
                        </div>
                        <div className="col-md-8 mt-2">
                            <OrgaosUA />
                        </div>
                    </div>

                    {/* AREA 2 SERVIÇOS DA UA */}
                    <div className="row">
                        <div className="col-md-4 marginB_title">
                            <h2>Serviços da UA</h2>
                            <div className="orange_line"></div>
                        </div>
                        <div className="col-md-8 mt-2">
                            <ServicosUA />
                        </div>
                    </div>

                    {/* AREA 3 OUTROS SERVIÇOS DE APOIO */}
                    <div className="row">
                        <div className="col-md-4 marginB_title">
                            <h2>Outros Serviços de Apoio</h2>
                            <div className="orange_line"></div>
                        </div>
                        <div className="col-md-8 mt-2">
                            <OutrosServicos />
                        </div>
                    </div>

                    {/* AREA 4 DEPARTAMENTOS */}
                    <div className="row">
                        <div className="col-md-4 marginB_title">
                            <h2>Departamentos</h2>
                            <div className="orange_line"></div>
                        </div>
                        <div className="col-md-8 mt-2">
                            <Departamentos />
                        </div>
                    </div>

                    {/* AREA 5 ESCOLAS POLITÉCNICAS */}
                    <div className="row">
                        <div className="col-md-4 marginB_title">
                            <h2>Escolas Politécnicas</h2>
                            <div className="orange_line"></div>
                        </div>
                        <div className="col-md-8 mt-2">
                            <EscolasPoli />
                        </div>
                    </div>

                    {/* AREA 6 ENTIDADES E ORGANIZAÇÕES PARCEIRAS */}
                    <div className="row">
                        <div className="col-md-4 marginB_title">
                            <h2>Entidades e Organizações Parceiras</h2>
                            <div className="orange_line"></div>
                        </div>
                        <div className="col-md-8 mt-2">
                            <EntidadesParc />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ContactosEstruturas;
