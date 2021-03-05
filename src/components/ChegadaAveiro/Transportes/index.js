import React, { useState } from "react";
import { LinkBTNTransport } from "../../LinkBTN";
import taxi from "../../../imgs/Icons/taxi.svg";
import carro from "../../../imgs/Icons/carro.svg";
import metro from "../../../imgs/Icons/metro.svg";
import comboio from "../../../imgs/Icons/comboio.svg";
import autocarro from "../../../imgs/Icons/autocarro.svg";
import Modal from "../Transportes/modal";

const Transportes = () => {
  const inicialActive = {
    option1: true,
    option2: false,
  };

  const [active, setActive] = useState(inicialActive);
  const toggleMenu = (optionName) => {
    let element_active = {};
    for (const key in active) {
      element_active[key] = key === optionName ? !active[key] : false;
    }
    setActive(element_active);
  };

  return (
    <div className="box-bg">
      <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
        <li
          onClick={() => toggleMenu("option1")}
          className={`nav-item ${active.option1 ? "tab-option" : null}`}
          role="presentation"
        >
          <a
            className={`tab-title ${active.option1 ? "active" : null}`}
            id="home-tab"
            data-bs-toggle="tab"
            href="#porto"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Aeroporto do Porto
          </a>
        </li>
        <li
          onClick={() => toggleMenu("option2")}
          className={`nav-item ${active.option2 ? "tab-option" : null}`}
          role="presentation"
        >
          <a
            className={`tab-title ${active.option2 ? "active" : null}`}
            id="profile-tab"
            data-bs-toggle="tab"
            href="#lisboa"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Aeroporto de Lisboa
          </a>
        </li>
      </ul>

      {/* CONTEUDO */}

      <div className="tab-content" id="myTabContent">
        {/* PORTO */}
        <div className={`tab-pane fade ${active.option1 ? "show active" : null} tab-content`} id="porto" role="tabpanel" aria-labelledby="home-tab">
          <div className="row">
            <div>
              <p className="section-title">Transportes Privados</p>
              <div>
                {/* TAXI-PORTO */}
                <LinkBTNTransport btnName="Táxi/Uber/Similar" icon={taxi} link="#taxip" />
                <Modal id="taxip" icon={taxi} title="Táxi/Uber/Similar" text="Podes optar por fazer todo o caminho de transportes privados (como táxi, Uber ou um serviço similar), ou apenas parte do caminho, por exemplo, até à estação de comboios de Porto-Campanhã, de onde partirá o comboio para Aveiro. O custo da viagem completa de táxi rondará os 75€. Se optares por viajar de táxi apenas até Porto-Campanhã, pagarás cerca de 25€. Serviços como Uber, Bolt ou FreeNow estão disponíveis e apresentam preços mais reduzidos. " euroText="Entre 25 a 75 euros" timeText="Cerca de 1 hora" />

                {/* CARRO-PORTO */}
                <LinkBTNTransport btnName="Carro" icon={carro} link="#carrop" />
                <Modal id="carrop" icon={carro} title="Carro" text="Podes também alugar um carro no aeroporto. Os preços vão variar, consoante a escolha e a empresa de rent-a-car. O caminho mais simples, é pela autoestrada A1 – sentido Lisboa, seguido da A25 – sentido Aveiro. Atenção, nas autoestradas aplicam-se valores de portagens, neste caso, cerca de 5€." euroText="Entre 12 a 15 euros" timeText="Cerca de 1 hora" />

              </div>
              <div>
                <p className="section-title">Transportes Públicos</p>
                <div>
                  {/* METRO-PORTO */}
                  <LinkBTNTransport btnName="Metro" icon={metro} link="#metrop" />
                  <Modal id="metrop" icon={metro} title="Metro" text={["Se optares por viajar de transportes públicos, deverás usar o metro entre o Aeroporto do Porto e a estação de Porto-Campanhã. A viagem (título Z4), custa cerca de 2€ e o metro parte de 30 em 30 minutos. A viagem dura cerca de 45 minutos. Mais informação ", <a className='link' href='https://www.metrodoporto.pt/' target='_blank' rel="noreferrer">aqui</a>, "."]} euroText="2 euros" timeText="45 minutos" />
                  {/* COMBOIO-PORTO */}
                  <LinkBTNTransport btnName="Comboio" icon={comboio} link="#comboiop" />
                  <Modal id="comboiop" icon={comboio} title="Comboio" text={["Em Porto-Campanhã, deverás adquirir um bilhete para Aveiro. Tens várias opções disponíveis, que apresentam tempos de viagem e preços diferentes. O comboio suburbano é o mais acessível: há comboios a partir de hora a hora, a viagem demora cerca de 50 minutos e tem o custo de 3,55€.  Já os comboios rápidos demoram cerca de 30 minutos e os preços variam entre os 12€ e os 20€. Mais informação ", <a className='link' href='https://www.cp.pt/passageiros/pt' target='_blank' rel="noreferrer">aqui</a>, "."]} euroText="Entre 3,55 e 20 euros" timeText="Entre 50 a 30 minutos" />
                  {/* AUTOCARRO-PORTO */}
                  <LinkBTNTransport btnName="Autocarro" icon={autocarro} link="#autocarrop" />
                  <Modal id="autocarrop" icon={autocarro} title="Autocarro" text={["Podes ainda viajar de autocarro. Para isso, deverás viajar de metro até Porto-São Bento (será necessário trocar a linha do metro, na estação da Trindade) e ir a pé até ao terminal de autocarros da Batalha. Aí deverás adquirir o bilhete para Aveiro. A viagem dura entre 1h e 2h e o preço do bilhete varia entre 5€ e 9€.  Mais informação ", <a className='link' href='https://www.rede-expressos.pt/' target='_blank' rel="noreferrer">aqui</a>, "."]} euroText="Entre a 5 a 9 euros" timeText="Entre 1 a 2 horas" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* LISBOA */}
        <div className={`tab-pane fade ${active.option2 ? "show active" : null} tab-content`} id="lisboa" role="tabpanel" aria-labelledby="profile-tab">
          <div className="row">
            <div>
              <p className="section-title">Transportes Privados</p>
              <div>
                {/* TAXI-LISBOA */}
                <LinkBTNTransport btnName="Táxi/Uber/Similar" icon={taxi} link="#taxil" />
                <Modal id="taxil" icon={taxi} title="Táxi/Uber/Similar" text="Uma viagem de táxi, Uber ou outros serviços similares de Lisboa a Aveiro pode ascender às várias centenas de Euros. No entanto, podes optar por usar este transporte, por exemplo, do aeroporto até à estação de comboios ou até ao terminal de autocarros. Esse valor deverá andar entre os 6 e os 20 euros, consoante o destino." euroText="Cerca de 200 euros" timeText="Cerca de 2 horas e 30 minutos" />
                {/* CARRO-LISBOA */}
                <LinkBTNTransport btnName="Carro" icon={carro} link="#carrol" />
                <Modal id="carrol" icon={carro} title="Carro" text="Podes também alugar um carro no aeroporto e viajar até Aveiro. Deverás seguir pela autoestrada A1 – sentido Porto e sair em Aveiro Sul (saída 15). Depois, segue a Estrada Nacional 235 até à UA. Atenção, nas autoestradas aplicam-se valores de portagens, neste caso, cerca de 20€. " euroText="Cerca de 40 euros" timeText="Cerca de 2 horas e 30 minutos" />
              </div>
            </div>
            <div>
              <p className="section-title">Transportes Públicos</p>
              <div>
                {/* METRO-LISBOA */}
                <LinkBTNTransport btnName="Metro" icon={metro} link="#metrol" />
                <Modal id="metrol" icon={metro} title="Metro" text={["Deves deslocar-te até à estação de comboios de metro. O trajeto inicia-se na estação do Aeroporto, com a Linha Vermelha, em direção a São Sebastião. A viagem custa cerca de 1,50€ e dura 15 minutos até Oriente, onde deves deixar o metro. Mais informação ", <a className='link' href='https://www.metrolisboa.pt/' target='_blank' rel="noreferrer">aqui</a>, "."]} euroText="1,50 euros" timeText="15 minutos" />
                {/* COMBOIO-LISBOA */}
                <LinkBTNTransport btnName="Comboio" icon={comboio} link="#comboiol" />
                <Modal id="comboiol" icon={comboio} title="Comboio" text={["O comboio é o transporte mais prático para viajar entre Lisboa e Aveiro. Deverás embarcar em Lisboa – Oriente, a viagem dura cerca de 2h30 e custa entre 21€ e 31€. Se comprares o bilhete com alguma antecedência, podes conseguir preços a partir dos 4€. Mais informação ", <a className='link' href='https://www.cp.pt/passageiros/pt' target='_blank' rel="noreferrer">aqui</a>, "."]} euroText="Entre 4 e 31 euros" timeText="2 horas e 30 minutos" />
                {/* AUTOCARRO-LISBOA */}
                <LinkBTNTransport btnName="Autocarro" icon={autocarro} link="#autocarrol" />
                <Modal id="autocarrol" icon={autocarro} title="Autocarro" text={["Podes ainda viajar de autocarro, embarcando no terminal de autocarro de Lisboa-Oriente. A viagem dura entre 3h e 4h e custa entre 5€ e 20€, consoante a antecedência com que compres a viagem. Mais informações ", <a className='link' href='https://www.rede-expressos.pt/pt' target='_blank' rel="noreferrer">aqui</a>, "."]} euroText="Entre 5 a 20 euros" timeText="Entre 3 a 4 horas" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transportes;
