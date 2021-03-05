import React from "react";
import "../../../styles/cards_testemunhos.css";
import aspa from "../../../imgs/Icons/aspa.svg";

const TestemunhosHome = ({ id, frase, nome, curso, img, timestamp }) => {
  let fullName;
  if (nome && nome.length) {
    const splitName = nome.split(' ');
    fullName = splitName.length > 1 ? `${splitName[0]} ${splitName[splitName.length - 1]}` : splitName[0];
  }
  return (
    <a href={`/testemunhoInd/${id}#start`} className="TestCarHome">
      <div className="cardG-margins" key={id}>
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
    </a>
  );
};

export default TestemunhosHome;
