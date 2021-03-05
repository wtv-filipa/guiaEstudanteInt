import React from "react";
import ChegadaAveiro from "../../components/ChegadaAveiro";
import Submenu from "../../components/Submenu/chegada_aveiro.js";
import CreateBTN from "../../components/CreateBTN"
import CheckList_Icon from "../../imgs/Icons/checklist_icon.svg"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {  
  return (
    <>
      <div id="start" className="fantasmaAncora"></div>
      <div id="main">
        <Submenu />
        <CreateBTN link='/todolist' icon={CheckList_Icon} iconAlt='Ícon To Do List' btnName='Ir para a To Do List personalizada' />
        <ChegadaAveiro />
      </div>
    </>
  );
};