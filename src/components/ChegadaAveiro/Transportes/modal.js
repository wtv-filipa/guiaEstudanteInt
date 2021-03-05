
import React from "react";
import euro from "../../../imgs/Icons/euro.svg";
import time from "../../../imgs/Icons/time.svg";

const Modal = (props) => {
    return (
        <div className="modal fade" id={props.id} tabIndex="-1"  aria-labelledby="exampleModalLabel"  aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="align-line">
                            <img src={props.icon} className="icon-color" alt={props.icon} height="40" width="auto"></img>
                            <h4 className="m-title-size">{props.title}</h4>
                        </div>
                        <p>{props.text}</p>
                        <div className="align-line">
                            <img src={euro} className="icon-color" alt="euro" height="35" width="auto"></img>
                            <p>{props.euroText}</p>
                        </div>
                        <div className="align-line">
                            <img src={time} className="icon-color" alt="tempo" height="35" width="auto"></img>
                            <p>{props.timeText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
