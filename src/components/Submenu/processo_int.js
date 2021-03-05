import React, { useState } from "react";
import "../../styles/submenu.css";

const Submenu = () => {

    const [isOpenGeral, setIsOpenGeral] = useState(false);


    const inicialMenu = {
        option1: false,
        option2: false,
        option3: false,
        option4: false,

    };
    const inicialActive = {
        option1: false,
        option2: false,
        option3: false,
        option4: false,
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
                <h3 className="page-title processo-int">Processo de Integração</h3>
                <button id="processoint" onClick={() => setIsOpenGeral(!isOpenGeral)} className="submenu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#processo-submenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className={`fas fa-chevron-${isOpenGeral ? 'up' : 'down'}`}></i>
                </button>
                <div className={`collapse navbar-collapse ${isOpenGeral ? 'show' : ''}`} id="processo-submenu">
                    <ul className="navbar-nav page-subtitles">
                        <li>
                            <a href="#1" className={`submenu-link ${active.option1 ? "active" : null}`} onClick={()=>setIsOpenGeral(false)} >Apoio ao estudante internacional</a>
                            <button onClick={() => toogleMenu("option1")} className={`arrow-btn-submenu submenu-dropdown-btn ${active.option1 ? "active" : null}`} type="button" data-bs-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className={`fas fa-chevron-${menu.option1 ? 'up' : 'down'} fa-xs`}></i>
                            </button>
                            {
                                menu.option1 && (
                                    <ul className="navbar-nav page-subtitles submenu-option">
                                        <li>
                                            <a href="#ua_intercultural" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>UA_Intercultural</a>
                                        </li>
                                        <li>
                                            <a href="#claim_ua" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>CLAIM_UA</a>
                                        </li>
                                        <li>
                                            <a href="#comunidades_estudantes" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Comunidades de estudantes internacionais</a>
                                        </li>
                                        <li>
                                            <a href="#esn_aveiro" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>ESN Aveiro</a>
                                        </li>
                                        <li>
                                            <a href="#programa_buddy" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Programa Buddy</a>
                                        </li>
                                    </ul>
                                )}
                        </li>
                        <li>
                            <a href="#2" className={`submenu-link ${active.option2 ? "active" : null}`}  onClick={()=>setIsOpenGeral(false)}>Apoio pedagógico</a>
                            <button onClick={() => toogleMenu("option2")} className={`arrow-btn-submenu submenu-dropdown-btn ${active.option2 ? "active" : null}`} type="button" data-bs-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className={`fas fa-chevron-${menu.option2 ? 'up' : 'down'} fa-xs`}></i>
                            </button>
                            {
                                menu.option2 && (
                                    <ul className="navbar-nav page-subtitles submenu-option">
                                        <li>
                                            <a href="#curso_nivelamento" className="drop-link" onClick={()=>collapseOnClickItem("option2")}>Cursos de nivelamento</a>
                                        </li>
                                        <li>
                                            <a href="#gabinete_pedagogico" className="drop-link" onClick={()=>collapseOnClickItem("option2")}>Gabinete pedagógico</a>
                                        </li>
                                    </ul>
                                )}
                        </li>
                        <li>
                            <a href="#3" className={`submenu-link ${active.option3 ? "active" : null}`} onClick={()=>setIsOpenGeral(false)} >Apoio académico</a>
                            <button onClick={() => toogleMenu("option3")} className={`arrow-btn-submenu submenu-dropdown-btn ${active.option3 ? "active" : null}`} type="button" data-bs-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className={`fas fa-chevron-${menu.option3 ? 'up' : 'down'} fa-xs`}></i>
                            </button>
                            {
                                menu.option3 && (
                                    <ul className="navbar-nav page-subtitles submenu-option">
                                        <li>
                                            <a href="#provedor_estudante" className="drop-link" onClick={()=>collapseOnClickItem("option3")}>Provedor do estudante</a>
                                        </li>
                                        <li>
                                        </li>
                                        <li>
                                            <a href="#sessoes_orientacao" className="drop-link" onClick={()=>collapseOnClickItem("option3")}>Sessões de orientação tutorial</a>
                                        </li>
                                        <li>
                                            <a href="#diretores_curso_coordenadores_dep" className="drop-link" onClick={()=>collapseOnClickItem("option3")}>Diretores de curso e coordenadores Departamentais</a>
                                        </li>
                                        <li>
                                            <a href="#nucleos_curso" className="drop-link" onClick={()=>collapseOnClickItem("option3")}>Núcleos de curso</a>
                                        </li>
                                        <li>
                                            <a href="#associacao_academica" className="drop-link" onClick={()=>collapseOnClickItem("option3")}>Associação Académica da UA</a>
                                        </li>
                                    </ul>
                                )}
                        </li>
                        <li>
                            <a href="#4" className={`submenu-link ${active.option4 ? "active" : null}`} onClick={()=>setIsOpenGeral(false)} >Apoio social</a>
                            <button onClick={() => toogleMenu("option4")} className={`arrow-btn-submenu submenu-dropdown-btn ${active.option4 ? "active" : null}`} type="button" data-bs-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className={`fas fa-chevron-${menu.option4 ? 'up' : 'down'} fa-xs`}></i>
                            </button>
                            {
                                menu.option4 && (
                                    <ul id="dropLua" className="navbar-nav page-subtitles submenu-option">
                                        <li>
                                            <a href="#lua" className="drop-link" onClick={()=>collapseOnClickItem("option4")}>LUA- Linha de Apoio UA</a>
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
