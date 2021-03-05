import React from "react";
import "../../../styles/ToDoList.css";

const Locais = (props) => {
  return (
    <>
      <div className="col-12 col-lg locaisCard">
        <div id="3" className="fantasmaAncora"></div>
        <div className="card">
          <div id="locais" className="card-body">
            {/* superior */}

            <div className="info">
              <h4 className="title">Locais a Visitar em Aveiro</h4>
              <div className="info-bottom">
                <div className="left">
                  <p id="count">{props.totalToDoLocal}</p>
                  <p id="tasks">Total</p>
                </div>
                <div className="middle">
                  <p id="remaining_done">{props.ToDoLocal}</p>
                  <p id="remaining_tasks">Por Fazer</p>
                </div>
                <div className="right">
                  <p id="count_done">{props.doneToDoLocal}</p>
                  <p id="tasks_done">Feitas</p>
                </div>
              </div>
            </div>

            {/* inferior */}

            <ul>
              <hr className="divider"></hr>
              <li>
                <button
                  onClick={props.handleAveiro1}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoAveiro1 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a
                  href="https://goo.gl/maps/kSNtmC6e74gFR7U28"
                  target="_blank"
                  rel="noreferrer"
                  className="right mx-auto"
                >
                  <p className="mt-1">Museu de Aveiro</p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleAveiro2}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoAveiro2 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a
                  href="https://goo.gl/maps/TUJKAwXNzftLFDB18"
                  target="_blank"
                  rel="noreferrer"
                  className="right mx-auto"
                >
                  <p className="mt-1">Oficina do Doce</p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleAveiro3}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoAveiro3 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a
                  href="https://goo.gl/maps/qQVqEKxRVGjMWkcM6"
                  target="_blank"
                  rel="noreferrer"
                  className="right mx-auto"
                >
                  <p className="mt-1">Sé de Aveiro</p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleAveiro4}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoAveiro4 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a
                  href="https://goo.gl/maps/AVJdUSXp16cMfabr8"
                  target="_blank"
                  rel="noreferrer"
                  className="right mx-auto"
                >
                  <p className="mt-1">Museu de Arte Nova</p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleAveiro5}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoAveiro5 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a
                  href="https://goo.gl/maps/XqRLCZkkPeWbhe176"
                  target="_blank"
                  rel="noreferrer"
                  className="right mx-auto"
                >
                  <p className="mt-1">Passadiços Ria de Aveiro</p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleAveiro6}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoAveiro6 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a
                  href="https://goo.gl/maps/baqjwe8M1iU6NPp6A"
                  target="_blank"
                  rel="noreferrer"
                  className="right mx-auto"
                >
                  <p className="mt-1">Ecomuseu Marinha da Troncalhada</p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleAveiro7}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoAveiro7 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a
                  href="https://goo.gl/maps/zrwxbJbYYtooaygX6"
                  target="_blank"
                  rel="noreferrer"
                  className="right mx-auto"
                >
                  <p className="mt-1">Praia da Costa Nova</p>
                  <div className="arrow-color">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </li>

              <hr className="divider"></hr>

              <li>
                <button
                  onClick={props.handleAveiro8}
                  className="check_button"
                  type="button"
                >
                  <i
                    className={`${
                      props.todoAveiro8 === false
                        ? "far fa-circle corPreto"
                        : "fas fa-check-circle"
                    }`}
                  ></i>
                </button>
                <a
                  href="https://goo.gl/maps/oHaeNwJb8ztwcEnd9"
                  target="_blank"
                  rel="noreferrer"
                  className="right mx-auto"
                >
                  <p className="mt-1">
                    Reserva Natural das Dunas de São Jacinto
                  </p>
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
export default Locais;
