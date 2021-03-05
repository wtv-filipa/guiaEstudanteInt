import React from "react";
import "../../styles/section.css";

const Section = (props) => {
    return (
        <header className="masthead">
            <img className="section-bg-img" src={props.backgroundImage} alt={props.title} />
            <div className="container h-100">
                <h1 className="title">{props.title}</h1>
            </div>
        </header>
    );
};

export default Section;