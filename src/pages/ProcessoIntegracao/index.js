import React from "react";
import ProcessoIntegracao from "../../components/ProcessoIntegracao";
import Submenu from "../../components/Submenu/processo_int";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <div id="start" className="fantasmaAncora"></div>
      <div id="main">
        <Submenu />
        <ProcessoIntegracao />
      </div>
    </>
  );
};
