import React from "react";
import "../../../styles/filter.css"

const Filter = () => {
    return (
        <>
            <div className="marginB_title">
                <div className="dropdown filter_todo">
                    <button
                        className="btn dropdown-toggle col-12"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <p className="text-filter">Selecionar um tópico</p>
                    </button>
                    <ul
                        className="dropdown-menu col-12"
                        aria-labelledby="dropdownMenuButton1"
                    >
                        <li>
                            <a className="dropdown-item todo_option" href="#1">
                                Vistos e autorização de residência
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item todo_option" href="#2">
                                Taxas de frequência e outros custos
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item todo_option" href="#3">
                                Bolsas
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item todo_option" href="#4">
                                Custo de vida e outros
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item todo_option" href="#5">
                                Alojamento
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item todo_option" href="#6">
                                Viver em Aveiro e em Portugal
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item todo_option" href="#7">
                                Estudar em Aveiro
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item todo_option" href="#8">
                                Vida académica
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Filter;
