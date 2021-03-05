import React, { useState } from "react";
import "../../styles/submenu.css";

const Submenu = () => {

    const [isOpenGeral, setIsOpenGeral] = useState(false);


    const inicialMenu = {
        option1: false,
        option2: false,

    };
    const inicialActive = {
        option1: false,
        option2: false,
    };

    const [menu, setMenu] = useState(inicialMenu);
    const [active, setActive] = useState(inicialActive);
    const toogleMenu = (optionName) => {
        let menu_aux = {};
        let element_active = {};
        for (const key in menu) {
            menu_aux[key] = key === optionName ? !menu[key] : false;
        }
        for (const key in active) {
            element_active[key] = key === optionName ? !menu[key] : false;
        }
        setMenu(menu_aux);
        setActive(element_active);
    };

    const collapseOnClickItem = (optionName) => {
        setIsOpenGeral(false);
        toogleMenu(optionName)
    };

    return (
        <nav className="navbar navbar-expand-lg submenu-geral position-sticky">
            <div className="container">
                <h3 className="page-title">Estudar na UA</h3>
                <button id="estudarua" onClick={() => setIsOpenGeral(!isOpenGeral)} className="submenu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#estudar-submenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className={`fas fa-chevron-${isOpenGeral ? 'up' : 'down'}`}></i>
                </button>
                <div className={`collapse navbar-collapse ${isOpenGeral ? 'show' : ''}`} id="estudar-submenu">
                    <ul className="navbar-nav page-subtitles">
                        <li>
                            <a href="#1" className="submenu-link" onClick={()=>setIsOpenGeral(false)}>Sobre a UA</a>
                        </li>
                        <li>
                            <a href="#2" className={`submenu-link ${active.option1 ? "active" : null}`} onClick={()=>setIsOpenGeral(false)} >Informações académicas complementares</a>
                            <button onClick={() => toogleMenu("option1")} className={`arrow-btn-submenu submenu-dropdown-btn ${active.option1 ? "active" : null}`} type="button" data-bs-toggle="collapse" data-bs-target="#formalidades-drop" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className={`fas fa-chevron-${menu.option1 ? 'up' : 'down'} fa-xs`}></i>
                            </button>
                            {
                                menu.option1 && (
                                    <ul className="navbar-nav page-subtitles submenu-option">
                                        <li>
                                            <a href="#frequencia_assiduidade" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Frequência e assiduidade</a>
                                        </li>
                                        <li>
                                            <a href="#creditos_ects" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Créditos ECTS</a>
                                        </li>
                                        <li>
                                            <a href="#avalicao" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Avaliação</a>
                                        </li>
                                        <li>
                                            <a href="#aproveitamento_escolar" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Aproveitamento escolar</a>
                                        </li>
                                        <li>
                                            <a href="#epoca_exames" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Época de exames</a>
                                        </li>
                                    </ul>
                                )}
                        </li>
                        <li>
                            <a href="#3" className={`submenu-link ${active.option2 ? "active" : null}`} onClick={()=>setIsOpenGeral(false)} >Serviços de apoio</a>
                            <button onClick={() => toogleMenu("option2")} className={`arrow-btn-submenu submenu-dropdown-btn ${active.option2 ? "active" : null}`} type="button" data-bs-toggle="collapse" data-bs-target="#formalidades-drop" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className={`fas fa-chevron-${menu.option2 ? 'up' : 'down'} fa-xs`}></i>
                            </button>
                            {
                                menu.option2 && (
                                    <ul className="navbar-nav page-subtitles submenu-option">
                                        <li>
                                            <a href="#serviços_gestao" className="drop-link" onClick={()=>collapseOnClickItem("option2")}>Serviços de gestão académica</a>
                                        </li>
                                        <li>
                                            <a href="#servicos_acao" className="drop-link" onClick={()=>collapseOnClickItem("option2")}>Serviços de ação social</a>
                                        </li>
                                        <li>
                                            <a href="#servicos_tecnologias" className="drop-link" onClick={()=>collapseOnClickItem("option2")}>Serviços e tecnologias da informação e comunicação</a>
                                        </li>
                                        <li>
                                            <a href="#bibliotecas_info" className="drop-link" onClick={()=>collapseOnClickItem("option2")}>Bibliotecas, informação documental e museologia</a>
                                        </li>
                                    </ul>
                                )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Submenu;
