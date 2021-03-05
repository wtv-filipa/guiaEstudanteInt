import React from "react";
import "../../../styles/ToDoList.css";

const Chegada = (props) => {
  return (
    <>
      <div className="col-12 col-lg">
        <div id="2" className="fantasmaAncora"></div>
        <div className="card">
          <div id="chegada" className="card-body">
            {/* superior */}

            <div className="info">
              <h4 className="title">Chegada a Aveiro</h4>
              <div className="info-bottom">
                <div className="left">
                  <p id="count">{props.totalToDoChe}</p>
                  <p id="tasks">Total</p>
                </div>
                <div className="middle">
                  <p id="remaining_done">{props.ToDoChe}</p>
                  <p id="remaining_tasks">Por Fazer</p>
                </div>
                <div className="right">
                  <p id="count_done">{props.doneToDoChe}</p>
                  <p id="tasks_done">Feitas</p>
                </div>
              </div>
            </div>

            {/* inferior */}

            <ul>
              <hr className="divider"></hr>
              <li>
                <button
                  onClick={props.handleChegada1}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoChegada1 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a href="/chegadaAveiro#3" className="right mx-auto">
                  <p className="mt-1">UA_Intercultural e CLAIM</p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleChegada2}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoChegada2 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a href="/chegadaAveiro#2" className="right mx-auto">
                  <p className="mt-1">Alojamento em Aveiro</p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleChegada3}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoChegada3 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a
                  href="/chegadaAveiro#comprovativo_morada"
                  className="right mx-auto"
                >
                  <p className="mt-1">Comprovativo de morada</p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleChegada4}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoChegada4 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a href="/chegadaAveiro#nif" className="right mx-auto">
                  <p className="mt-1">NIF - Número de Identificação Fiscal</p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleChegada5}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoChegada5 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a
                  href="/chegadaAveiro#turmas_horarios"
                  className="right mx-auto"
                >
                  <p className="mt-1">
                    Secretaria Virtual: escolha de turma e horário
                  </p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleChegada6}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoChegada6 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a
                  href="/chegadaAveiro#abertura_conta"
                  className="right mx-auto"
                >
                  <p className="mt-1">Abertura de conta bancária</p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleChegada7}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoChegada7 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a
                  href="/chegadaAveiro#cartao_estudante"
                  className="right mx-auto"
                >
                  <p className="mt-1">Cartão de estudante</p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleChegada8}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoChegada8 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a
                  href="/chegadaAveiro#inscricao_sns"
                  className="right mx-auto"
                >
                  <p className="mt-1">Sistema Nacional de Saúde</p>
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
export default Chegada;
