import React from "react";

const Regularizacao_Portugal = ({ id = '', img = '', alt = '', title = '', text = '' }) => {
    return (
        <div>
            <div id={id} className="fantasmaAncora"></div>
            <div className="bg-circle">
                <img className="number-size" src={img} alt={alt} />
            </div>
            <h3 className="text-width">{title}</h3>
            <p>
                {text}
            </p>
        </div>
    );
};

export default Regularizacao_Portugal;