import React from "react";
import EstudarUA from "../../components/EstudarUA";
import Submenu from "../../components/Submenu/estudar_ua.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <div id="start" className="fantasmaAncora"></div>
      <div id="main">
      <Submenu />
      <EstudarUA/>
      </div>
    </>
  );
};
