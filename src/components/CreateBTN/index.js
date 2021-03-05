import React from "react";
import {NavHashLink} from 'react-router-hash-link';
import "../../styles/createbtn.css";


const CreateBtn = (props) => {
    return (
        <NavHashLink to={props.link} className={"create-btn-bg-orange "+ (props.fixTopClass || "")}>
            <div className="container">
                <div className="row create-btn-container">
                    <div className="col-10 col-md-11">
                        <img className="create-btn-icon" src={props.icon} alt={props.iconAlt} />
                        <p className="create-btn-title ms-3">{props.btnName}</p>
                    </div>
                
                    <div className="col-2 col-md-1 link-align">
                        <i className="fas fa-chevron-right create-btn-arrow"></i>
                    </div>
                </div>
            </div>
        </NavHashLink>
    );
};

export default CreateBtn;

