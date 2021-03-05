import React from "react";
import { useSelector } from "react-redux";
import { BackBTN } from "../../PrimaryBTN";
import aspa from "../../../imgs/Icons/aspa.svg";
import "../../../styles/testemunhos.css";
import { selectGetTestemunhos } from "../../../store/testemunhos/selectors";
import { useHistory } from "react-router-dom";

const TestemunhoIndividual = ({ id }) => {
  const testemunhoInfo = useSelector((state) => selectGetTestemunhos(state));
  let fullName;
  if(testemunhoInfo.nome && testemunhoInfo.nome.length) {
      const splitName = testemunhoInfo.nome.split(' ');
      fullName = splitName.length > 1 ? `${splitName[0]} ${splitName[splitName.length - 1]}` : splitName[0];
  }
  const goToPreviousPath = () => {
    history.goBack()
  }
  let history = useHistory();

  return (
    <section className="container mt-3 marginB_section testInd" key={id}>
      <div className="mt-3 mb-3">
        <BackBTN click={goToPreviousPath} title="Voltar para trás" texto="Voltar" />
      </div>
      <div className="mb-3">
        <h2>Testemunho Individual</h2>
        <div className="orange_line"></div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-md-4 col-xxl-3">
          <div className="box-invisible">
            <div className="round-image">
              <div
                className="img-fluid"
                dangerouslySetInnerHTML={{ __html: testemunhoInfo.img }}
                title="Imagem de perfil"
                style={{ display: "inline" }}>
              </div>
            </div>
          </div>
          <div className="userInfo-tI">
            <h3 className="testIndTitulo">
              {fullName}
            </h3>
            <p className="ICurso">
              {testemunhoInfo.curso}</p>
            <p className="IDate">
              {new Date(testemunhoInfo.timestamp).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-8 col-xxl-9">
          <p>
            <span className="aspaLolc">
              <img src={aspa} alt="Aspa" className="aspaT"></img>
            </span>
            <span className="quadrado-vazio"></span>
            {testemunhoInfo.testemunho}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestemunhoIndividual;
