import React from "react";
import Preparar from "../../components/Preparar";
import CreateBTN from "../../components/CreateBTN";
import CheckList_Icon from "../../imgs/Icons/checklist_icon.svg";
import Submenu from "../../components/Submenu/preparar_viagem.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <div id="start" className="fantasmaAncora"></div>
      <div id="main">
        <Submenu />
        <CreateBTN
          link="/todolist#start"
          icon={CheckList_Icon}
          iconAlt="Ícon To Do List"
          btnName="Ir para a To Do List personalizada"
        />
        <Preparar />
      </div>
    </>
  );
};
