import React, { useState } from "react";
import "../../styles/submenu.css";

const Submenu = () => {

    const [isOpenGeral, setIsOpenGeral] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg submenu-geral position-sticky">
            <div className="container">
                <h3 className="page-title">Preparar a Viagem</h3>
                <button id="prepararviagem" onClick={() => setIsOpenGeral(!isOpenGeral)} className="submenu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#preparar-submenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className={`fas fa-chevron-${isOpenGeral ? 'up' : 'down'}`}></i>
                </button>
                <div className={`collapse navbar-collapse ${isOpenGeral ? 'show' : ''}`} id="preparar-submenu">
                    <ul className="navbar-nav page-subtitles">
                        <li>
                            <a href="#1" className="submenu-link" onClick={()=>setIsOpenGeral(false)}>Declaração de matrícula</a>
                        </li>
                        <li>
                            <a href="#2" className="submenu-link" onClick={()=>setIsOpenGeral(false)}>Visto de estudo</a>
                        </li>
                        <li>
                            <a href="#3" className="submenu-link" onClick={()=>setIsOpenGeral(false)}>Documentos necessários</a>
                        </li>
                        <li>
                            <a href="#4" className="submenu-link" onClick={()=>setIsOpenGeral(false)}>Apostila de Haia</a>
                        </li>
                        <li>
                            <a href="#5" className="submenu-link" onClick={()=>setIsOpenGeral(false)}>Pagamentos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Submenu;
