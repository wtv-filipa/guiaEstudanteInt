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
                <h3 className="page-title">Cidade de Aveiro</h3>
                <button id="cidadeaveiro" onClick={() => setIsOpenGeral(!isOpenGeral)} className="submenu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#cidade-submenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className={`fas fa-chevron-${isOpenGeral ? 'up' : 'down'}`}></i>
                </button>
                <div className={`collapse navbar-collapse ${isOpenGeral ? 'show' : ''}`} id="cidade-submenu">
                    <ul className="navbar-nav page-subtitles">
                        <li>
                            <a href="#1" className="submenu-link" onClick={() => setIsOpenGeral(false)}>Sobre Aveiro</a>
                        </li>
                        <li>
                            <a href="#2" className={`submenu-link ${active.option1 ? "active" : null}`} onClick={() => setIsOpenGeral(false)} >Vida do quotidiano</a>
                            <button onClick={() => toogleMenu("option1")} className={`arrow-btn-submenu submenu-dropdown-btn ${active.option1 ? "active" : null}`} type="button" data-bs-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className={`fas fa-chevron-${menu.option1 ? 'up' : 'down'} fa-xs`}></i>
                            </button>
                            {
                                menu.option1 && (
                                    <ul className="navbar-nav page-subtitles submenu-option">
                                        <li>
                                            <a href="#saude_bemEstar" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Saúde e bem-estar</a>
                                        </li>
                                        <li>
                                            <a href="#transportes" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Transportes</a>
                                        </li>
                                        <li>
                                            <a href="#clima" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Clima</a>
                                        </li>
                                        <li>
                                            <a href="#trabalhar_portugal" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Trabalhar em Portugal</a>
                                        </li>
                                        <li>
                                            <a href="#locais_culto" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Locais de culto</a>
                                        </li>
                                        <li>
                                            <a href="#custo_vida" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Custo de vida</a>
                                        </li>
                                        <li>
                                            <a href="#seguranca_aveiro" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Segurança em Aveiro</a>
                                        </li>
                                    </ul>
                                )}
                        </li>
                        <li>
                            <a href="#3" className="submenu-link" onClick={() => setIsOpenGeral(false)}>Feriados importantes</a>
                        </li>
                        <li>
                            <a href="#4" className="submenu-link" onClick={() => setIsOpenGeral(false)}>Sobre Portugal</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Submenu;
