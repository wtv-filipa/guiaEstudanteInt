import React from "react";
import { LinkBTNEscolha } from "../../LinkBTN";
import Text from "../../../imgs/Icons/text.svg";
import Audio from "../../../imgs/Icons/audio.svg";
import Video from "../../../imgs/Icons/video.svg";
import { BackBTN } from "../../PrimaryBTN";
import "../../../styles/testemunhos.css";
import { useHistory } from "react-router-dom";

const EscolhaTestemunho = () => {
  let history = useHistory();

  const goToPreviousPath = () => {
    history.goBack()
  }

  return (
    <section className="container mb-5 mt-3 testInd">
      <div className="mt-3 mb-3">
        <BackBTN
          click={goToPreviousPath}
          title="Voltar para trás"
          texto="Voltar"
        />
      </div>
      <h2>Partilhar um testemunho</h2>
      <div className="orange_line"></div>
      <p className="mt-5 p_next">
        Escolhe uma das seguintes opções para publicares o teu testemunho com os
        restantes alunos!
      </p>
      <div className="fundo_escolha">
        <div className="paddingEscolha">
          <LinkBTNEscolha
            link="/testemunhotexto"
            title="Ir para a criação de um testemunho em texto"
            icon={Text}
            iconAlt="Criar um testemunho com texto"
            btnName="Testemunho em texto"
          />
          <LinkBTNEscolha
            link="/construcao#start"
            icon={Audio}
            iconAlt="Criar um testemunho com áudio"
            btnName="Testemunho em áudio"
          />
          <LinkBTNEscolha
            link="/construcao#start"
            icon={Video}
            iconAlt="Criar um testemunho com vídeo"
            btnName="Testemunho em vídeo"
          />
        </div>
      </div>
    </section>
  );
};

export default EscolhaTestemunho;
