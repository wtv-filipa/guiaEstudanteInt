import React from "react";
import "../../../styles/ToDoList.css";

const Preparar = (props) => {


  return (
    <>
        <div className="col-12 col-lg prepararCard">
          <div id="1" className="fantasmaAncora"></div>
          <div className="card">
            <div id="preparar" className="card-body">
              {/* superior */}

              <div className="info">
                <h4 className="title">Preparar a Viagem</h4>
                <div className="info-bottom">
                  <div className="left">
                    <p id="count">{props.totalToDoPrep}</p>
                    <p id="tasks">Total</p>
                  </div>
                  <div className="middle">
                    <p id="remaining_done">{props.ToDoPrep}</p>
                    <p id="remaining_tasks">Por Fazer</p>
                  </div>
                  <div className="right">
                    <p id="count_done">{props.doneToDoPrep}</p>
                    <p id="tasks_done">Feitas</p>
                  </div>
                </div>
              </div>

              {/* inferior */}

              <ul>
                <hr className="divider"></hr>
                <li>
                  <button
                  onClick={props.handleClick1}
                   className="check_button" 
                   type="button">
                    <i
                      className={`${
                        props.todoPreparar1 === false
                          ? "far fa-circle corPreto"
                          : "fas fa-check-circle"
                      }`}
                    ></i>
                  </button>
                  <a href="/prepararviagem#1" className="right mx-auto">
                    <p className="mt-1">Receber declaração de matrícula</p>
                    <div className="arrow-color">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </a>
                </li>

                <hr className="divider"></hr>

                <li>
                  <button 
                  onClick={props.handleClick2}
                  className="check_button" 
                  type="button">
                    <i
                      className={`${
                        props.todoPreparar2 === false
                          ? "far fa-circle corPreto"
                          : "fas fa-check-circle"
                      }`}
                    ></i>
                  </button>
                  <a href="/prepararviagem#2" className="right mx-auto">
                    <p className="mt-1">Obter visto de estudo</p>
                    <div className="arrow-color">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </a>
                </li>

                <hr className="divider"></hr>

                <li>
                  <button 
                  onClick={props.handleClick3} 
                  className="check_button" 
                  type="button">
                    <i
                      className={`${
                        props.todoPreparar3 === false
                          ? "far fa-circle corPreto"
                          : "fas fa-check-circle"
                      }`}
                    ></i>
                  </button>
                  <a href="/prepararviagem#3" className="right mx-auto">
                    <p className="mt-1">
                      Obter a certidão de habilitações académicas
                    </p>
                    <div className="arrow-color">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </a>
                </li>

                <hr className="divider"></hr>

                <li>
                  <button 
                  onClick={props.handleClick4}
                  className="check_button" 
                  type="button">
                    <i
                      className={`${
                        props.todoPreparar4 === false
                          ? "far fa-circle corPreto"
                          : "fas fa-check-circle"
                      }`}
                    ></i>
                  </button>
                  <a href="/prepararviagem#4" className="right mx-auto">
                    <p className="mt-1">Obter a Apostila de Haia</p>
                    <div className="arrow-color">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </a>
                </li>

                <hr className="divider"></hr>

                <li>
                  <button 
                  onClick={props.handleClick5}
                  className="check_button" 
                  type="button">
                    <i
                      className={`${
                        props.todoPreparar5 === false
                          ? "far fa-circle corPreto"
                          : "fas fa-check-circle"
                      }`}
                    ></i>
                  </button>
                  <a href="/prepararviagem#5" className="right mx-auto">
                    <p className="mt-1">Pagar a taxa de matrícula</p>
                    <div className="arrow-color">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </a>
                </li>

                <hr className="divider"></hr>

                <li>
                  <button
                  onClick={props.handleClick6}
                  className="check_button" 
                  type="button">
                    <i
                      className={`${
                        props.todoPreparar6 === false
                          ? "far fa-circle corPreto"
                          : "fas fa-check-circle"
                      }`}
                    ></i>
                  </button>
                  <a href="/prepararviagem#5" className="right mx-auto">
                    <p className="mt-1">
                      Pagar a primeira prestação da propina
                    </p>
                    <div className="arrow-color">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </a>
                </li>

                <hr className="divider"></hr>

                <li>
                  <button 
                  onClick={props.handleClick7}
                  className="check_button" 
                  type="button">
                    <i
                      className={`${
                        props.todoPreparar7 === false
                          ? "far fa-circle corPreto"
                          : "fas fa-check-circle"
                      }`}
                    ></i>
                  </button>
                  <div className="right mx-auto">
                    <p className="mt-1">
                      Conferir estado do boletim de vacinas
                    </p>
                  </div>
                </li>

                <hr className="divider"></hr>

                <li>
                  <button 
                  onClick={props.handleClick8}
                  className="check_button" 
                  type="button">
                    <i
                      className={`${
                        props.todoPreparar8 === false
                          ? "far fa-circle corPreto"
                          : "fas fa-check-circle"
                      }`}
                    ></i>
                  </button>
                  <a
                    href="https://www.google.com/flights"
                    rel="noreferrer"
                    className="right mx-auto"
                    target="_blank"
                  >
                    <p className="mt-1">Comprar a viagem para Portugal</p>
                    <div className="arrow-color">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
};
export default Preparar;
