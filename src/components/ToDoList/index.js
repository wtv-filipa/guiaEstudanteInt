import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToDo } from "../../store/toDoList/selectors";
import { updateToDoList1 } from "../../store/toDoList/actions";
import PrepararToDo from "./Checklists/preparar";
import ChegadaToDo from "./Checklists/chegada";
import LocaisToDo from "./Checklists/locais";
import { BackBTN } from "../PrimaryBTN";
import { useHistory } from "react-router-dom";

const ToDoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => selectToDo(state));

  let totalToDoPre;
  let doneToDoPre;
  let ToDoPre;
  let Preparar1;
  if (todo && todo.preparar) {
    totalToDoPre = todo.preparar.length;
    doneToDoPre = todo.preparar.filter(Boolean).length;
    ToDoPre = todo.preparar.filter((value) => value === false).length;
    Preparar1 = [
      todo.preparar[0],
      todo.preparar[1],
      todo.preparar[2],
      todo.preparar[3],
      todo.preparar[4],
      todo.preparar[5],
      todo.preparar[6],
      todo.preparar[7],
    ];
  }

  let totalToDoChe;
  let doneToDoChe;
  let ToDoChe;
  let chegada;
  if (todo && todo.chegada) {
    totalToDoChe = todo.chegada.length;
    doneToDoChe = todo.chegada.filter(Boolean).length;
    ToDoChe = todo.chegada.filter((value) => value === false).length;
    chegada = [
      todo.chegada[0],
      todo.chegada[1],
      todo.chegada[2],
      todo.chegada[3],
      todo.chegada[4],
      todo.chegada[5],
      todo.chegada[6],
      todo.chegada[7],
    ];
  }

  let totalToDoAv;
  let doneToDoAv;
  let ToDoAv;
  let Aveiro;
  if (todo && todo.aveiro) {
    totalToDoAv = todo.aveiro.length;
    doneToDoAv = todo.aveiro.filter(Boolean).length;
    ToDoAv = todo.aveiro.filter((value) => value === false).length;
    Aveiro = [
      todo.aveiro[0],
      todo.aveiro[1],
      todo.aveiro[2],
      todo.aveiro[3],
      todo.aveiro[4],
      todo.aveiro[5],
      todo.aveiro[6],
      todo.aveiro[7],
    ];
  }

  /*PREPARAR*/
  /*update preparar 1*/
  const updateTodo1 = () => {
    if (todo && todo.preparar) {
      if (todo.preparar[0] === false) {
        let Preparar = [
          true,
          todo.preparar[1],
          todo.preparar[2],
          todo.preparar[3],
          todo.preparar[4],
          todo.preparar[5],
          todo.preparar[6],
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      } else if (todo.preparar[0] === true) {
        let Preparar = [
          false,
          todo.preparar[1],
          todo.preparar[2],
          todo.preparar[3],
          todo.preparar[4],
          todo.preparar[5],
          todo.preparar[6],
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      }
    }
  };
  /*update preparar 2*/
  const updateTodo2 = () => {
    if (todo && todo.preparar) {
      if (todo.preparar[1] === false) {
        let Preparar = [
          todo.preparar[0],
          true,
          todo.preparar[2],
          todo.preparar[3],
          todo.preparar[4],
          todo.preparar[5],
          todo.preparar[6],
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      } else if (todo.preparar[1] === true) {
        let Preparar = [
          todo.preparar[0],
          false,
          todo.preparar[2],
          todo.preparar[3],
          todo.preparar[4],
          todo.preparar[5],
          todo.preparar[6],
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      }
    }
  };
  /*update preparar 3*/
  const updateTodo3 = () => {
    if (todo && todo.preparar) {
      if (todo.preparar[2] === false) {
        let Preparar = [
          todo.preparar[0],
          todo.preparar[1],
          true,
          todo.preparar[3],
          todo.preparar[4],
          todo.preparar[5],
          todo.preparar[6],
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      } else if (todo.preparar[2] === true) {
        let Preparar = [
          todo.preparar[0],
          todo.preparar[1],
          false,
          todo.preparar[3],
          todo.preparar[4],
          todo.preparar[5],
          todo.preparar[6],
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      }
    }
  };
  /*update preparar 4*/
  const updateTodo4 = () => {
    if (todo && todo.preparar) {
      if (todo.preparar[3] === false) {
        let Preparar = [
          todo.preparar[0],
          todo.preparar[1],
          todo.preparar[2],
          true,
          todo.preparar[4],
          todo.preparar[5],
          todo.preparar[6],
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      } else if (todo.preparar[3] === true) {
        let Preparar = [
          todo.preparar[0],
          todo.preparar[1],
          todo.preparar[2],
          false,
          todo.preparar[4],
          todo.preparar[5],
          todo.preparar[6],
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      }
    }
  };
  /*update preparar 5*/
  const updateTodo5 = () => {
    if (todo && todo.preparar) {
      if (todo.preparar[4] === false) {
        let Preparar = [
          todo.preparar[0],
          todo.preparar[1],
          todo.preparar[2],
          todo.preparar[3],
          true,
          todo.preparar[5],
          todo.preparar[6],
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      } else if (todo.preparar[4] === true) {
        let Preparar = [
          todo.preparar[0],
          todo.preparar[1],
          todo.preparar[2],
          todo.preparar[3],
          false,
          todo.preparar[5],
          todo.preparar[6],
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      }
    }
  };
  /*update preparar 6*/
  const updateTodo6 = () => {
    if (todo && todo.preparar) {
      if (todo.preparar[5] === false) {
        let Preparar = [
          todo.preparar[0],
          todo.preparar[1],
          todo.preparar[2],
          todo.preparar[3],
          todo.preparar[4],
          true,
          todo.preparar[6],
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      } else if (todo.preparar[5] === true) {
        let Preparar = [
          todo.preparar[0],
          todo.preparar[1],
          todo.preparar[2],
          todo.preparar[3],
          todo.preparar[4],
          false,
          todo.preparar[6],
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      }
    }
  };
  /*update preparar 7*/
  const updateTodo7 = () => {
    if (todo && todo.preparar) {
      if (todo.preparar[6] === false) {
        let Preparar = [
          todo.preparar[0],
          todo.preparar[1],
          todo.preparar[2],
          todo.preparar[3],
          todo.preparar[4],
          todo.preparar[5],
          true,
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      } else if (todo.preparar[6] === true) {
        let Preparar = [
          todo.preparar[0],
          todo.preparar[1],
          todo.preparar[2],
          todo.preparar[3],
          todo.preparar[4],
          todo.preparar[5],
          false,
          todo.preparar[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      }
    }
  };
  /*update preparar 8*/
  const updateTodo8 = () => {
    if (todo && todo.preparar) {
      if (todo.preparar[7] === false) {
        let Preparar = [
          todo.preparar[0],
          todo.preparar[1],
          todo.preparar[2],
          todo.preparar[3],
          todo.preparar[4],
          todo.preparar[5],
          todo.preparar[6],
          true,
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      } else if (todo.preparar[7] === true) {
        let Preparar = [
          todo.preparar[0],
          todo.preparar[1],
          todo.preparar[2],
          todo.preparar[3],
          todo.preparar[4],
          todo.preparar[5],
          todo.preparar[6],
          false,
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada, Preparar));
        window.location.reload();
      }
    }
  };
  /*********************/
  /*CHEGADA*/
  /*update chegada 1*/
  const updateChegada1 = () => {
    if (todo && todo.chegada) {
      if (todo.chegada[0] === false) {
        let chegada1 = [
          true,
          todo.chegada[1],
          todo.chegada[2],
          todo.chegada[3],
          todo.chegada[4],
          todo.chegada[5],
          todo.chegada[6],
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      } else if (todo.chegada[0] === true) {
        let chegada1 = [
          false,
          todo.chegada[1],
          todo.chegada[2],
          todo.chegada[3],
          todo.chegada[4],
          todo.chegada[5],
          todo.chegada[6],
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      }
    }
  };
   /*update chegada 2*/
   const updateChegada2 = () => {
    if (todo && todo.chegada) {
      if (todo.chegada[1] === false) {
        let chegada1 = [
          todo.chegada[0],
          true,
          todo.chegada[2],
          todo.chegada[3],
          todo.chegada[4],
          todo.chegada[5],
          todo.chegada[6],
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      } else if (todo.chegada[1] === true) {
        let chegada1 = [
          todo.chegada[0],
          false,
          todo.chegada[2],
          todo.chegada[3],
          todo.chegada[4],
          todo.chegada[5],
          todo.chegada[6],
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      }
    }
  };
   /*update chegada 3*/
   const updateChegada3 = () => {
    if (todo && todo.chegada) {
      if (todo.chegada[2] === false) {
        let chegada1 = [
          todo.chegada[0],
          todo.chegada[1],
          true,
          todo.chegada[3],
          todo.chegada[4],
          todo.chegada[5],
          todo.chegada[6],
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      } else if (todo.chegada[2] === true) {
        let chegada1 = [
          todo.chegada[0],
          todo.chegada[1],
          false,
          todo.chegada[3],
          todo.chegada[4],
          todo.chegada[5],
          todo.chegada[6],
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      }
    }
  };
   /*update chegada 4*/
   const updateChegada4 = () => {
    if (todo && todo.chegada) {
      if (todo.chegada[3] === false) {
        let chegada1 = [
          todo.chegada[0],
          todo.chegada[1],
          todo.chegada[2],
          true,
          todo.chegada[4],
          todo.chegada[5],
          todo.chegada[6],
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      } else if (todo.chegada[3] === true) {
        let chegada1 = [
          todo.chegada[0],
          todo.chegada[1],
          todo.chegada[2],
          false,
          todo.chegada[4],
          todo.chegada[5],
          todo.chegada[6],
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      }
    }
  };
   /*update chegada 5*/
   const updateChegada5 = () => {
    if (todo && todo.chegada) {
      if (todo.chegada[4] === false) {
        let chegada1 = [
          todo.chegada[0],
          todo.chegada[1],
          todo.chegada[2],
          todo.chegada[3],
          true,
          todo.chegada[5],
          todo.chegada[6],
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      } else if (todo.chegada[4] === true) {
        let chegada1 = [
          todo.chegada[0],
          todo.chegada[1],
          todo.chegada[2],
          todo.chegada[3],
          false,
          todo.chegada[5],
          todo.chegada[6],
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      }
    }
  };
   /*update chegada 6*/
   const updateChegada6 = () => {
    if (todo && todo.chegada) {
      if (todo.chegada[5] === false) {
        let chegada1 = [
          todo.chegada[0],
          todo.chegada[1],
          todo.chegada[2],
          todo.chegada[3],
          todo.chegada[4],
          true,
          todo.chegada[6],
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      } else if (todo.chegada[5] === true) {
        let chegada1 = [
          todo.chegada[0],
          todo.chegada[1],
          todo.chegada[2],
          todo.chegada[3],
          todo.chegada[4],
          false,
          todo.chegada[6],
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      }
    }
  };
   /*update chegada 7*/
   const updateChegada7 = () => {
    if (todo && todo.chegada) {
      if (todo.chegada[6] === false) {
        let chegada1 = [
          todo.chegada[0],
          todo.chegada[1],
          todo.chegada[2],
          todo.chegada[3],
          todo.chegada[4],
          todo.chegada[5],
          true,
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      } else if (todo.chegada[6] === true) {
        let chegada1 = [
          todo.chegada[0],
          todo.chegada[1],
          todo.chegada[2],
          todo.chegada[3],
          todo.chegada[4],
          todo.chegada[5],
          false,
          todo.chegada[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      }
    }
  };
   /*update chegada 8*/
   const updateChegada8 = () => {
    if (todo && todo.chegada) {
      if (todo.chegada[7] === false) {
        let chegada1 = [
          todo.chegada[0],
          todo.chegada[1],
          todo.chegada[2],
          todo.chegada[3],
          todo.chegada[4],
          todo.chegada[5],
          todo.chegada[6],
          true,
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      } else if (todo.chegada[7] === true) {
        let chegada1 = [
          todo.chegada[0],
          todo.chegada[1],
          todo.chegada[2],
          todo.chegada[3],
          todo.chegada[4],
          todo.chegada[5],
          todo.chegada[6],
          false,
        ];

        dispatch(updateToDoList1(todo.id, Aveiro, chegada1, Preparar1));
        window.location.reload();
      }
    }
  };
  /*********************/
  /*LOCAIS*/
  /*update aveiro 1*/
  const updateAveiro1 = () => {
    if (todo && todo.aveiro) {
      if (todo.aveiro[0] === false) {
        let Aveiro1 = [
          true,
          todo.aveiro[1],
          todo.aveiro[2],
          todo.aveiro[3],
          todo.aveiro[4],
          todo.aveiro[5],
          todo.aveiro[6],
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      } else if (todo.aveiro[0] === true) {
        let Aveiro1 = [
          false,
          todo.aveiro[1],
          todo.aveiro[2],
          todo.aveiro[3],
          todo.aveiro[4],
          todo.aveiro[5],
          todo.aveiro[6],
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      }
    }
  };
  /*update aveiro 2*/
  const updateAveiro2 = () => {
    if (todo && todo.aveiro) {
      if (todo.aveiro[1] === false) {
        let Aveiro1 = [
          todo.aveiro[0],
          true,
          todo.aveiro[2],
          todo.aveiro[3],
          todo.aveiro[4],
          todo.aveiro[5],
          todo.aveiro[6],
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      } else if (todo.aveiro[1] === true) {
        let Aveiro1 = [
          todo.aveiro[0],
          false,
          todo.aveiro[2],
          todo.aveiro[3],
          todo.aveiro[4],
          todo.aveiro[5],
          todo.aveiro[6],
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      }
    }
  };
  /*update aveiro 3*/
  const updateAveiro3 = () => {
    if (todo && todo.aveiro) {
      if (todo.aveiro[2] === false) {
        let Aveiro1 = [
          todo.aveiro[0],
          todo.aveiro[1],
          true,
          todo.aveiro[3],
          todo.aveiro[4],
          todo.aveiro[5],
          todo.aveiro[6],
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      } else if (todo.aveiro[2] === true) {
        let Aveiro1 = [
          todo.aveiro[0],
          todo.aveiro[1],
          false,
          todo.aveiro[3],
          todo.aveiro[4],
          todo.aveiro[5],
          todo.aveiro[6],
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      }
    }
  };
  /*update aveiro 4*/
  const updateAveiro4 = () => {
    if (todo && todo.aveiro) {
      if (todo.aveiro[3] === false) {
        let Aveiro1 = [
          todo.aveiro[0],
          todo.aveiro[1],
          todo.aveiro[2],
          true,
          todo.aveiro[4],
          todo.aveiro[5],
          todo.aveiro[6],
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      } else if (todo.aveiro[3] === true) {
        let Aveiro1 = [
          todo.aveiro[0],
          todo.aveiro[1],
          todo.aveiro[2],
          false,
          todo.aveiro[4],
          todo.aveiro[5],
          todo.aveiro[6],
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      }
    }
  };
  /*update aveiro 5*/
  const updateAveiro5 = () => {
    if (todo && todo.aveiro) {
      if (todo.aveiro[4] === false) {
        let Aveiro1 = [
          todo.aveiro[0],
          todo.aveiro[1],
          todo.aveiro[2],
          todo.aveiro[3],
          true,
          todo.aveiro[5],
          todo.aveiro[6],
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      } else if (todo.aveiro[4] === true) {
        let Aveiro1 = [
          todo.aveiro[0],
          todo.aveiro[1],
          todo.aveiro[2],
          todo.aveiro[3],
          false,
          todo.aveiro[5],
          todo.aveiro[6],
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      }
    }
  };
  /*update aveiro 6*/
  const updateAveiro6 = () => {
    if (todo && todo.aveiro) {
      if (todo.aveiro[5] === false) {
        let Aveiro1 = [
          todo.aveiro[0],
          todo.aveiro[1],
          todo.aveiro[2],
          todo.aveiro[3],
          todo.aveiro[4],
          true,
          todo.aveiro[6],
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      } else if (todo.aveiro[5] === true) {
        let Aveiro1 = [
          todo.aveiro[0],
          todo.aveiro[1],
          todo.aveiro[2],
          todo.aveiro[3],
          todo.aveiro[4],
          false,
          todo.aveiro[6],
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      }
    }
  };
  /*update aveiro 7*/
  const updateAveiro7 = () => {
    if (todo && todo.aveiro) {
      if (todo.aveiro[6] === false) {
        let Aveiro1 = [
          todo.aveiro[0],
          todo.aveiro[1],
          todo.aveiro[2],
          todo.aveiro[3],
          todo.aveiro[4],
          todo.aveiro[5],
          true,
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      } else if (todo.aveiro[6] === true) {
        let Aveiro1 = [
          todo.aveiro[0],
          todo.aveiro[1],
          todo.aveiro[2],
          todo.aveiro[3],
          todo.aveiro[4],
          todo.aveiro[5],
          false,
          todo.aveiro[7],
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      }
    }
  };
  /*update aveiro 8*/
  const updateAveiro8 = () => {
    if (todo && todo.aveiro) {
      if (todo.aveiro[7] === false) {
        let Aveiro1 = [
          todo.aveiro[0],
          todo.aveiro[1],
          todo.aveiro[2],
          todo.aveiro[3],
          todo.aveiro[4],
          todo.aveiro[5],
          todo.aveiro[6],
          true,
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      } else if (todo.aveiro[7] === true) {
        let Aveiro1 = [
          todo.aveiro[0],
          todo.aveiro[1],
          todo.aveiro[2],
          todo.aveiro[3],
          todo.aveiro[4],
          todo.aveiro[5],
          todo.aveiro[6],
          false,
        ];

        dispatch(updateToDoList1(todo.id, Aveiro1, chegada, Preparar1));
        window.location.reload();
      }
    }
  };
  /*********************/

  const goToPreviousPath = () => {
    history.goBack()
  }
  let history = useHistory();

  return (
    <div className="container ToDoList">
            <div className="mt-3 mb-3">
        <BackBTN click={goToPreviousPath} title="Voltar para trás" texto="Voltar" />
      </div>
      <div className="mt-4 marginB_title">
        <div className="col-12">
          <h2>To Do List</h2>
          <div className="orange_line"></div>
        </div>
      </div>
      <div className="marginB_title todo_filter">
        <div className="dropdown filter_todo">
          <button
            className="btn dropdown-toggle col-12"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <p className="text-filter">Selecionar uma lista</p>
          </button>
          <ul
            className="dropdown-menu col-12"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a className="dropdown-item todo_option" href="#1">
                Preparar a Viagem
              </a>
            </li>
            <li>
              <a className="dropdown-item todo_option" href="#2">
                Chegada a Aveiro
              </a>
            </li>
            <li>
              <a className="dropdown-item todo_option" href="#3">
                Locais a Visitar em Aveiro
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="checkslists-section" className="row marginB_section">
        {todo && todo.preparar && (
          <PrepararToDo
            totalToDoPrep={totalToDoPre}
            ToDoPrep={ToDoPre}
            doneToDoPrep={doneToDoPre}
            handleClick1={updateTodo1}
            handleClick2={updateTodo2}
            handleClick3={updateTodo3}
            handleClick4={updateTodo4}
            handleClick5={updateTodo5}
            handleClick6={updateTodo6}
            handleClick7={updateTodo7}
            handleClick8={updateTodo8}
            todoPreparar1={todo.preparar[0]}
            todoPreparar2={todo.preparar[1]}
            todoPreparar3={todo.preparar[2]}
            todoPreparar4={todo.preparar[3]}
            todoPreparar5={todo.preparar[4]}
            todoPreparar6={todo.preparar[5]}
            todoPreparar7={todo.preparar[6]}
            todoPreparar8={todo.preparar[7]}
          />
        )}
        {todo && todo.chegada && (
          <ChegadaToDo
            totalToDoChe={totalToDoChe}
            ToDoChe={ToDoChe}
            doneToDoChe={doneToDoChe}
            handleChegada1={updateChegada1}
            handleChegada2={updateChegada2}
            handleChegada3={updateChegada3}
            handleChegada4={updateChegada4}
            handleChegada5={updateChegada5}
            handleChegada6={updateChegada6}
            handleChegada7={updateChegada7}
            handleChegada8={updateChegada8}
            todoChegada1={todo.chegada[0]}
            todoChegada2={todo.chegada[1]}
            todoChegada3={todo.chegada[2]}
            todoChegada4={todo.chegada[3]}
            todoChegada5={todo.chegada[4]}
            todoChegada6={todo.chegada[5]}
            todoChegada7={todo.chegada[6]}
            todoChegada8={todo.chegada[7]}
          />
        )}
        {todo && todo.aveiro && (
          <LocaisToDo
            totalToDoLocal={totalToDoAv}
            ToDoLocal={ToDoAv}
            doneToDoLocal={doneToDoAv}
            handleAveiro1={updateAveiro1}
            handleAveiro2={updateAveiro2}
            handleAveiro3={updateAveiro3}
            handleAveiro4={updateAveiro4}
            handleAveiro5={updateAveiro5}
            handleAveiro6={updateAveiro6}
            handleAveiro7={updateAveiro7}
            handleAveiro8={updateAveiro8}
            todoAveiro1={todo.aveiro[0]}
            todoAveiro2={todo.aveiro[1]}
            todoAveiro3={todo.aveiro[2]}
            todoAveiro4={todo.aveiro[3]}
            todoAveiro5={todo.aveiro[4]}
            todoAveiro6={todo.aveiro[5]}
            todoAveiro7={todo.aveiro[6]}
            todoAveiro8={todo.aveiro[7]}
          />
        )}
      </div>
    </div>
  );
};
export default ToDoList;
