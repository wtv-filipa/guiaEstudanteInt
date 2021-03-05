import React from "react";
import "../../styles/linkbtn.css";

const LinkBTNImg = (props) => {
  return (
    <a href={props.link} className="link-btn" target="_blank" rel="noreferrer">
      <div className="container pad_link">
        <div className="row link-btn-container">
          <div className="col-3 col-md-2 col-lg-2">
            <img
              className="link-btn-img"
              src={props.icon}
              alt={props.iconAlt}
            />
          </div>
          <div className="col-7 col-md-8 col-lg-9">
            <p className="link-btn-title">{props.btnName}</p>
          </div>
          <div className="col-2 col-md-2 col-lg-1 link-align">
            <i className="fas fa-chevron-right link-btn-arrow"></i>
          </div>
        </div>
        <hr className="divider"></hr>
      </div>
    </a>
  );
};

const LinkBTNTransport = (props) => {
  return (
    <div
      type="button"
      className="link-btn-transport"
      data-bs-toggle="modal"
      data-bs-target={props.link}
    >
      <div className="container pad_link">
        <div className="row link-btn-container">
          <div className="col-3 col-md-2  col-lg-2">
            <img
              className="link-btn-img"
              src={props.icon}
              alt={props.iconAlt}
            />
          </div>
          <div className="col-7 col-md-8 col-lg-9">
            <p className="link-btn-title">{props.btnName}</p>
          </div>
          <div className="col-2 col-md-2 col-lg-1 link-align">
            <i className="fas fa-chevron-right link-btn-arrow"></i>
          </div>
        </div>
        <hr className="divider"></hr>
      </div>
    </div>
  );
};

const LinkBTNEscolha = (props) => {
  return (
    <a href={props.link} className="link-btn-escolha" title={props.title}>
      <div className="container pad_link">
        <div className="row link-btn-container">
          <div className="col-3 col-md-2 col-lg-2">
            <img
              className="link-btn-img"
              src={props.icon}
              alt={props.iconAlt}
            />
          </div>
          <div className="col-7 col-md-8 col-lg-9">
            <p className="link-btn-title">{props.btnName}</p>
          </div>
          <div className="col-2 col-md-2 col-lg-1 link-align">
            <i className="fas fa-chevron-right link-btn-arrow"></i>
          </div>
        </div>
        <hr className="divider"></hr>
      </div>
    </a>
  );
};

export { LinkBTNImg, LinkBTNTransport, LinkBTNEscolha };
