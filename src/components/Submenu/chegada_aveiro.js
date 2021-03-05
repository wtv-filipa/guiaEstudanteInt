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
        <nav className="navbar navbar-expand-lg submenu-geral position-sticky overflow auto">
            <div className="container">
                <h3 className="page-title">Chegada a Aveiro</h3>
                <button id="chegadaaveiro" onClick={() => setIsOpenGeral(!isOpenGeral)} className="submenu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#chegada-submenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className={`fas fa-chevron-${isOpenGeral ? 'up' : 'down'}`}></i>
                </button>
                <div className={`collapse navbar-collapse ${isOpenGeral ? 'show' : ''}`} id="chegada-submenu">
                    <ul className="navbar-nav page-subtitles">
                        <li>
                            <a href="#1" className="submenu-link" onClick={() => setIsOpenGeral(false)}>Chegar à UA</a>
                        </li>
                        <li>
                            <a href="#2" className="submenu-link" onClick={() => setIsOpenGeral(false)}>Alojamento</a>
                        </li>
                        <li>
                            <a href="#3" className="submenu-link" onClick={() => setIsOpenGeral(false)}>UA_Intercultural</a>
                        </li>
                        <li>
                            <a href="#4" className="submenu-link" onClick={() => setIsOpenGeral(false)}>Claim_UA</a>
                        </li>
                        <li>
                            <a href="#5" className={`submenu-link ${active.option1 ? "active" : null}`} onClick={() => setIsOpenGeral(false)}>Formalidades académicas</a>
                            <button onClick={() => toogleMenu("option1")} className={`arrow-btn-submenu ${active.option1 ? "active" : null}`} type="button" data-bs-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className={`fas fa-chevron-${menu.option1 ? 'up' : 'down'} fa-xs`}></i>
                            </button>
                            {
                                menu.option1 && (
                                    <ul className="navbar-nav page-subtitles submenu-option">
                                        <li>
                                            <a href="#paco" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>PACO - Secretaria virtual</a>
                                        </li>
                                        <li>
                                            <a href="#turmas_horarios" className="drop-link" onClick={()=>collapseOnClickItem("option1")}>Escolha de turmas e horários</a>
                                        </li>
                                    </ul>
                                )}
                        </li>

                        <li>
                            <a href="#6" className={`submenu-link ${active.option2 ? "active" : null}`} onClick={() => setIsOpenGeral(false)}>Regularização em Portugal</a>
                            <button onClick={() => toogleMenu("option2")} className={`arrow-btn-submenu ${active.option2 ? "active" : null}`} type="button" data-bs-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className={`fas fa-chevron-${menu.option2 ? 'up' : 'down'} fa-xs`}></i>
                            </button>
                            {
                                menu.option2 && (
                                    <ul id="lastDrop" className="navbar-nav page-subtitles submenu-option">
                                        <li>
                                            <a href="#sef" className="drop-link" onClick={()=>collapseOnClickItem("option2")}>Serviços de estrangeiros e fronteiras</a>
                                        </li>
                                        <li>
                                            <a href="#comprovativo_morada" className="drop-link" onClick={()=>collapseOnClickItem("option2")}>Comprovativo de morada</a>
                                        </li>
                                        <li>
                                            <a href="#nif" className="drop-link" onClick={()=>collapseOnClickItem("option2")}>NIF - Número de Identificação Fiscal</a>
                                        </li>
                                        <li>
                                            <a href="#abertura_conta" className="drop-link" onClick={()=>collapseOnClickItem("option2")}>Abertura de conta bancária</a>
                                        </li>
                                        <li>
                                            <a href="#cartao_estudante" className="drop-link" onClick={()=>collapseOnClickItem("option2")}>Cartão de estudante</a>
                                        </li>
                                        <li>
                                            <a href="#inscricao_sns" className="drop-link" onClick={()=>collapseOnClickItem("option2")}>Inscriçao no sistema nacional de saúde</a>
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
