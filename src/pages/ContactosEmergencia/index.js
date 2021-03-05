/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ContactosEmergencia from "../../components/ContactosEmergencia";
import Section from "../../components/Header";
import Emergencia from "../../imgs/header/emergencia.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <div id="start" className="fantasmaAncora"></div>
      <div id="main">
        <Section backgroundImage={Emergencia} title="Contactos de Emergência" />
        <ContactosEmergencia />
      </div>
    </>
  );
};
