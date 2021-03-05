import React from "react";
import {useSelector} from "react-redux";
import "../../../styles/testemunhos.css";
import CardPessoal from "./Card_pessoal";
import {selectGetTestemunhos} from "../../../store/testemunhos/selectors";

const renderCardPessoal = ({ id, frase, tipo, timestamp }) =>
  <CardPessoal key={id} id={id} frase={frase} tipo={tipo} timestamp={timestamp} />;

const MeusTestemunhos = () => {
  const testemunhos = useSelector(state => selectGetTestemunhos(state));
  return (
    <section className="container marginB_section mt-3 heightT">
      <h2>Os meus Testemunhos</h2>
      <div className="orange_line"></div>
      {/*cards*/}
      <div className="row">
        {testemunhos.length >=1 ?
          testemunhos.map(renderCardPessoal):
          <h4 className="mt-4">Não tem testemunhos associados</h4>
        }
      </div>
    </section>
  );
};

export default MeusTestemunhos;
