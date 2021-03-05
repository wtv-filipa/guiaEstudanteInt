/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-pascal-case */
// eslint-disable-next-line import/no-anonymous-default-export
import React from "react";
import "../../styles/chegadaAveiro.css";
import Universidade from "../../imgs/ChegadaAveiro/uni_aereo.jpg";
import Transportes from "./Transportes";
import Residencias from "../../imgs/ChegadaAveiro/residencias.jpeg";
import { PrimaryBTN } from "../PrimaryBTN";
import Regularizacao_Portugal from "./Regularizacao_Portugal";

import Ponto_1 from "../../imgs/ChegadaAveiro/ponto_1.svg";
import Ponto_2 from "../../imgs/ChegadaAveiro/ponto_2.svg";
import Ponto_3 from "../../imgs/ChegadaAveiro/ponto_3.svg";
import Ponto_4 from "../../imgs/ChegadaAveiro/ponto_4.svg";
import Ponto_5 from "../../imgs/ChegadaAveiro/ponto_5.svg";
import Ponto_6 from "../../imgs/ChegadaAveiro/ponto_6.svg";

const ChegadaAveiro = () => {
  return (
    <>
      <div className="container">
        {/* AREA 1 COMO CHEGAR À UNIVERSIDADE */}
        <div id="1" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Como Chegar à Universidade</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <img
              src={Universidade}
              alt="Vista aerea da Universidade de Aveiro"
              className="img_only_next"
            />
            <p className="p_next">
              <b>O aeroporto mais próximo da UA é o Aeroporto do Porto</b>{" "}
              (Aeroporto Francisco Sá Carneiro), a cerca de 80km a norte de
              Aveiro. Tem ainda o Aeroporto da Portela, em Lisboa, a cerca de
              250km.
            </p>
            <Transportes />
          </div>
        </div>
        {/* AREA 2 ALOJAMENTO */}
        <div id="2" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Alojamento</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <p className="p_next">
              É aconselhável chegares a Aveiro com alguma antecedência para
              procurares o alojamento adequado. Poderás procurar um quarto ou
              apartamento na{" "}
              <b>
                internet, imobiliárias, anúncios de jornais ou em espaços
                públicos
              </b>
              .
            </p>
            <p className="p_next">
              <b>Residências Universitárias</b>: a UA dispõe de mais de mil
              camas nas suas várias residências universitárias. Podes
              candidatar-te a um desses lugares contactando o{" "}
              <b>Serviço de Ação Social</b> através do email{" "}
              <a className="link" href="mailto:accommodation@ua.pt">
                accommodation@ua.pt
              </a>
              . O número de quartos é limitado e as candidaturas são muitas,
              pelo que a UA nunca pode garantir a atribuição de um lugar nas
              suas residências.
            </p>
            <p className="p_next">
              <b>Alojamento na cidade</b>: se não conseguires um lugar nas
              residências ou se preferires morar noutro sítio, facilmente
              encontrarás um espaço na cidade. Podes optar por alugar um{" "}
              <b>quarto</b> ou um <b>apartamento</b> e os preços poderão variar
              entre os <b>200-350 euros</b> (quarto) e os <b>400-600 euros</b>{" "}
              (apartamento de um a três quartos). Poderás encontrar muitos
              anúncios de espaços para alugar em grupos do Facebook, sites para
              o efeito (Uniplaces ou Idealista), agências imobiliárias, anúncios
              nos jornais ou em espaços da universidade ou outros espaços
              públicos, como cafés. <b>Tem atenção</b>: nunca faças pagamentos
              online a pessoas individuais, referentes a alojamento.
            </p>
            <img
              src={Residencias}
              alt="Residencias da Universidade de Aveiro"
              className="img_only"
            />
          </div>
        </div>

        {/* AREA 3 UA_INTERCULTURAL */}
        <div id="3" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>UA_Intercultural</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <p className="p_next">
              Nos <b>primeiros dias em Aveiro</b>, deves deslocar-te ao UA_I (em
              frente à livraria da UA). Ali, vais conhecer as diversas{" "}
              <b>respostas e serviços de acolhimento e integração</b> dos
              estudantes internacionais e poderás conhecer as pessoas que, na
              linha da frente, vão prestar apoio ao longo da tua estadia na UA.
            </p>
            <p className="p_next">
              O UA_I realiza um conjunto de <b>sessões de acolhimento</b> no
              início do ano letivo. Estas sessões serão divulgadas junto dos
              estudantes internacionais e estes podem inscrever-se para
              participação.
            </p>
            <PrimaryBTN
              alinhar="text-end mb-4"
              link="/processointegracao#ua_intercultural"
              title="Ver mais informação relativamente ao UA_I"
              texto="Saber mais"
            />
          </div>
        </div>

        {/* AREA 4 CLAIM_UA */}
        <div id="4" className="fantasmaAncora"></div>
        <div className="row mb-3">
          <div className="col-md-4 mb-3" id="1">
            <h2>CLAIM_UA</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <p className="p_next">
              O CLAIM_UA partilha o espaço com o UA_Intercultural, por isso, na
              sua ida ao UA_I deverás, também, marcar presença no CLAIM_UA. Ali,
              poderás receber apoio com todas as <b>questões burocráticas</b>,
              como vistos, marcações com o Serviço de Estrangeiros e Fronteiras,
              Número de Identificação Fiscal (NIF), entre outros.
            </p>
            <p className="p_next">
              Por exemplo, nos três primeiros dias, deverás dar conhecimento da
              tua chegada e marcar uma entrevista com o SEF (link para o SEF).
              Se preferires, podes pedir apoio com esta questão no CLAIM_UA.
            </p>
            <PrimaryBTN
              alinhar="text-end mb-4"
              link="/processointegracao#claim_ua"
              title="Ver mais informação relativamente ao ClAIM_UA"
              texto="Saber mais"
            />
          </div>
        </div>

        {/* AREA 5 FORMALIDADES ACADEMICAS */}
        <div id="5" className="fantasmaAncora"></div>
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <h2>Formalidades Académicas</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <div id="paco" className="fantasmaAncora"></div>
            <h3>PACO - Secretaria Virtual</h3>
            <p>
              Depois da matrícula estar concluída, é importante{" "}
              <b>
                aceder ao{" "}
                <a
                  className="link"
                  href="https://paco.ua.pt/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PACO
                </a>
              </b>{" "}
              - Portal Académico da UA. Este é o rosto virtual dos Serviços de
              Gestão Académica e permite a consulta do perfil pessoal do
              estudante, fazer inscrições online, aceder ao plano curricular e
              historial de notas, exames e estado de pagamento de propinas. No
              PACO, os estudantes podem ainda fazer inscrições para exames,
              pedir certidões, apresentar requerimentos, entre muitas outras
              operações académicas.
            </p>
            <div id="turmas_horarios" className="fantasmaAncora"></div>
            <h3>Escolha de Turmas e Horários</h3>
            <p className="p_next">
              Após os primeiros passos, será ainda necessário{" "}
              <b>escolher as turmas teórico-práticas e práticas</b> em que o
              estudante está inscrito. Este procedimento deverá ser realizado
              no{" "}
              <a
                className="link"
                href="https://paco.ua.pt/"
                target="_blank"
                rel="noreferrer"
              >
                PACO
              </a>{" "}
              no período indicado para cada ano letivo e resultará na
              organização do horário do aluno.
            </p>
            <p>
              Para esclarecer qualquer dúvida relacionada com turmas, unidades
              curriculares (disciplinas), número de créditos, entre outros,
              contacta a secretaria do teu Departamento/Escola/Instituto.
            </p>
          </div>
        </div>

        {/* AREA 6 REGULARIZACAO EM PORTUGAL */}
        <div id="6" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Regularização em Portugal</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <Regularizacao_Portugal
              id="sef"
              img={Ponto_1}
              alt="Número 1"
              title="Serviços de Estrangeiros e Fronteiras"
              text={[
                "É obrigatório declarares a tuua chegada ao país ao Serviço de " +
                  "Estrangeiros e Fronteiras, no prazo de ",
                <b>três dias úteis </b>,
                "a contar da " +
                  "data de chegada a Portugal. Se não o fizeres, poderás receber uma " +
                  "multa. Para declarar a entrada, deverás agendar uma entrevista com " +
                  "o SEF, por telefone (",
                <a className="link" href="tel:808202653">
                  808 202 653
                </a>,
                ") ou ",
                <a
                  className="link"
                  href="https://www.sef.pt/pt/Pages/pre-­‐marcacao-­‐online.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  online
                </a>,
                ". Podes ainda, se assim preferires, recorrer ao CLAIM-UA, para te " +
                  "ajudar neste processo.",
              ]}
            />

            <Regularizacao_Portugal
              id="comprovativo_morada"
              img={Ponto_2}
              alt="Número 2"
              title="Comprovativo de Morada"
              text={[
                "Se estiveres numa ",
                <b>residência universitária</b>,
                ", solicita o comprovativo",
                "junto dos ",
                <b>Serviços de Ação Social</b>,
                ". Se estiveres a morar numa ",
                <b>casa/apartamento/quarto privado</b>,
                ", terás de pedir uma certidão na ",
                <b>Junta de Freguesia de residência</b>,
                ". Para isso, terás de levar o ",
                "contrato de arrendamento, um recibo de um qualquer serviço onde ",
                "tenhas a morada e o teu nome como titular (por exemplo, um recibo ",
                "de energia). Em alternativa, deverás levar contigo duas testemunhas ",
                "residentes na mesma freguesia que confirmem a informação.",
              ]}
            />

            <Regularizacao_Portugal
              id="nif"
              img={Ponto_3}
              alt="Número 3"
              title="NIF - Número de Identificação Fiscal"
              text={[
                "O Número de Identificação Fiscal (NIF) é atribuído pela ",
                <b> Autoridade Tributária e Aduaneira</b>,
                " e destina-se ao tratamento de informação ",
                "fiscal e aduaneira. É necessário, por exemplo, para ",
                <b> abrir uma conta bancária</b>,
                " ou para ",
                <b>contratar serviços de internet, telefone ou outros</b>,
                ". Este número e respetivo cartão pode ser adquirido no ",
                "balcão da Autoridade Tributária, na Loja do Cidadão de Aveiro. ",
                "Para o pedido, deverás fazer-te acompanhar de um ",
                <b>representante fiscal com domicílio em Portugal</b>,
                " (português ou estrangeiro com ",
                "título de residência), que deverá preencher o formulário previsto ",
                "para o efeito. O pedido deve ainda ser acompanhado de alguns ",
                "documentos, entre os quais, um documento de identificação e prova ",
                "de residência.",
              ]}
            />

            <Regularizacao_Portugal
              id="abertura_conta"
              img={Ponto_4}
              alt="Número 4"
              title="Abertura de Conta Bancária"
              text={[
                "Podes abrir conta num banco à tua escolha, desde que a tua ",
                <b>estadia seja superior a três meses</b>,
                ". Para abrir conta, terás de apresentar ",
                <b>
                  um documento de identificação (passaporte), um comprovativo de
                  residência e o NIF
                </b>,
                ". Se desejares que o teu cartão de estudante tenha ",
                "a funcionalidade de cartão bancário, deverás abrir conta na Caixa ",
                "Geral de Depósitos, na agência Glicínias-Aveiro, na Rua Dr. Mário ",
                "Sacramento e levar os documentos para abertura de conta. Em ",
                "alternativa, poderás fazê-lo na UA, durante a sessão de ",
                "acolhimento.",
              ]}
            />

            <Regularizacao_Portugal
              id="cartao_estudante"
              img={Ponto_5}
              alt="Número 5"
              title="Cartão de Estudante"
              text="Após a tua inscrição, deverás solicitar o teu cartão de estudante,
              junto da Caixa Geral de Depósitos. Terás de levar contigo a
              declaração de matrícula e os documentos de identificação. Se
              quiseres que este cartão seja também o teu cartão bancário, consulta
              o ponto Abertura de Conta Bancária."
            />

            <Regularizacao_Portugal
              id="inscricao_sns"
              img={Ponto_6}
              alt="Número 6"
              title="Inscrição no Sistema Nacional de Saúde"
              text="Para ter um cartão de utente do Sistema Nacional de Saúde (SNS)
              deverás entregar no Centro de Saúde da tua área de residência, o
              documento comprovativo do visto ou a autorização de residência, o
              comprovativo de morada, documento de identificação e, se
              necessário, o comprovativo de matrícula. Existem vários países com
              acordos com Portugal para a prestação de cuidados médicos. Poderás
              obter esta informação junto do teu Centro de Saúde."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChegadaAveiro;
