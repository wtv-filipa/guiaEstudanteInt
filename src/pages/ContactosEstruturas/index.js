import React from "react";
import ContactosEstruturas from "../../components/ContactosEstruturas";
import Section from "../../components/Header";
import Estruturas from "../../imgs/header/estruturas.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <div id="start" className="fantasmaAncora"></div>
      <div id="main">
        <Section backgroundImage={Estruturas} title="Contactos de Estruturas e Serviços de Apoio" />
        <ContactosEstruturas />
      </div>
    </>
  );
};
