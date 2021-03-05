import React from "react";
import { PrimaryBTN } from "../../../PrimaryBTN";
import "../../../../styles/testemunhos.css";
import aspa from "../../../../imgs/Icons/aspa.svg"


const CardGeral = ({ id, frase, nome, curso, img, timestamp }) => {
  let fullName;
  if (nome && nome.length) {
    const splitName = nome.split(' ');
    fullName = splitName.length > 1 ? `${splitName[0]} ${splitName[splitName.length - 1]}` : splitName[0];
  }
  return (
    <div className="col-sm-12 col-md-6 cardG-margins" key={id}>
      <div className="card tGeral">

        <div className="card-body">
          <h4 className="card-title">
            <img src={aspa} alt="Aspa" className="aspaT"></img>
            <div className="quadrado-vazio"></div>
            {frase}
          </h4>
          <div className="userInfo-cards">
            <p className=" timeG">
              {new Date(timestamp).toLocaleDateString()}
            </p>
            <p>{fullName}</p>
            <p>
              {curso}
            </p>
            <PrimaryBTN
              link={`/testemunhoInd/${id}#start`}
              title="Ir para o testemunho individual"
              texto="Ver mais"
            />
          </div>
        </div>
        <div className="round-image">
          <div
            className="img-fluid"
            dangerouslySetInnerHTML={{ __html: img }}
            title="Imagem de perfil"
            style={{ display: 'inline' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CardGeral;