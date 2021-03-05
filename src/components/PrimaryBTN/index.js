
import React from "react";
import "../../styles/PrimaryBTN.css";

const PrimaryBTN = (props) => {
  return (
    <div className={props.alinhar}>
      <button className={"learn-more " + (props.novaClass || "")}>
        <a href={props.link} title={props.title}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">{props.texto}</span>
        </a>
      </button>
    </div>
  );
};

const CarouselBtn = (props) => {
  return (
    <div className="text-start">
      <button className="learn-more_carousel">
        <a href={props.link} title={props.title}>
          <span className="circle_carousel" aria-hidden="true">
            <span className="icon arrow carousel"></span>
          </span>
          <span className="button-text_carousel">Sabe mais</span>
        </a>
      </button>
    </div>
  );
};

const PrimaryBTNWhite = (props) => {
  return (
    <div className={props.alinhar}>
      <button className="learn-more_white">
        <a href={props.link} title={props.title}>
          <span className="circle_white" aria-hidden="true">
            <span className="icon arrow white"></span>
          </span>
          <span className="button-text_white">{props.texto}</span>
        </a>
      </button>
    </div>
  );
};

const PrimaryBTNTestemunhos = (props) => {
  return (
    <div className={props.alinhar}>
      <button className="learn-more_test">
        <a href={props.link} title={props.title}>
          <span className="circle_test" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text_test">{props.texto}</span>
        </a>
      </button>
    </div>
  );
};

const BackBTN = (props) => {
  return (
    <div className="text-start" onClick={props.click}>
      <button className="BTNback">
        <a href={props.link} title={props.title}>
          <span className="circle_BTNback" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text_BTNback">{props.texto}</span>
        </a>
      </button>
    </div>
  );
};

export { PrimaryBTN, CarouselBtn, PrimaryBTNWhite, PrimaryBTNTestemunhos, BackBTN };
