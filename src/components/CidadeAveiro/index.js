import React from "react";
import ImgCarousel from "./ImgCarousel";
import AcLocaisCulto from "./Accordions/ac_locaisculto";
import AcSaude from "./Accordions/ac_saude";
import SliderFeriados from "./SliderFeriados";
import Weather from "./Weather";
import "../../styles/cidadeAveiro.css";
import Transportes from "../../imgs/CidadeAveiro/autocarros.png";
import Seguranca from "../../imgs/CidadeAveiro/seguranca.jpg";
import MoneyBag from "../../imgs/Icons/money_bag.svg";
import Restaurant from "../../imgs/Icons/restaurant.svg";
import Home from "../../imgs/Icons/home.svg";

const CidadeAveiro = () => {
  return (
    <>
      <div className="container">
        {/* AREA 1 SOBRE AVEIRO */}
        <div id="1" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Sobre Aveiro</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <p className="p_next">
              Aveiro é uma das regiões mais bonitas de Portugal e tem tudo para
              agradar a (quase) toda a gente. É um distrito (estado) riquíssimo
              e muito completo, com cidade muito diferentes entre si. Aveiro tem{" "}
              <b>praia, mar, rio, serra e ainda a ria de Aveiro</b> que nos
              abraça ao longo de <b>45 km de costa</b>, algo que transformou o
              litoral do país e moldou a forma como os rios encontraram o
              Atlântico.
            </p>
            <p className="p_next">
              Em Aveiro, vai encontrar indústria, serviços, património
              arquitetónico e natural, turismo, desporto e, claro, a sua
              universidade, de braços abertos.
            </p>
            <ImgCarousel />
          </div>
        </div>
        {/* AREA 2 VIDA DO QUOTIDIANO */}
        <div id="2" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Vida do Quotidiano</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <div id="saude_bemEstar" className="fantasmaAncora"></div>
            <h3>Saúde e Bem-estar</h3>
            <p className="p_next">
              Vamos esperar que não aconteça, mas se ficares doente e precisares
              de uma <b>consulta médica</b> ou de recorrer a{" "}
              <b>serviços de enfermagem</b>, terás o apoio necessário na
              Universidade de Aveiro (UA). Para além disso, terás{" "}
              <b>acesso gratuito</b> a várias especialidades médicas para que te
              mantenhas saudável e em forma.
            </p>
            <p className="p_next">
              Toda a informação aqui:{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://www.ua.pt/pt/saude-bem-estar"
              >
                https://www.ua.pt/pt/saude-bem-estar
              </a>
            </p>
            <div className="accordions_margin">
              <AcSaude />
            </div>

            <div id="transportes" className="fantasmaAncora"></div>
            <h3>Transportes</h3>
            <img
              src={Transportes}
              alt="Autocarros da AveiroBus"
              className="img_only_next"
            />
            <p className="p_next">
              Aveiro é uma cidade muito plana e de tamanho médio, o que quer
              dizer que é muito fácil e prático andar a pé ou de bicicleta. No
              entanto, podes precisar ou preferir andar de transportes e, nesse
              caso, tens também ótimas opções.
            </p>
            <p className="p_next">
              A região de Aveiro é servida por vários meios de transporte, que
              vão do <b>comboio</b> (trem) ao <b>barco</b>. As três cidades UA
              estão ligadas por uma excelente rede de estradas, bem como
              autocarros e comboios.
            </p>
            <p className="p_next">
              Na empresa <b>AveiroBus</b>, o <b>Passe Estudante</b> destina-se a
              estudantes da cidade de Aveiro (secundário e universitário). O
              Passe é <b>válido de setembro a julho</b> e deve ser requisitado
              nos pontos de venda ou online.
            </p>
            <p>
              Toda a informação aqui:{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://www.ua.pt/pt/transportes"
              >
                https://www.ua.pt/pt/transportes
              </a>
            </p>

            <div id="clima" className="fantasmaAncora"></div>
            <h3>Clima</h3>
            <p className="p_next">
              Não sabes que roupa deves trazer quando vieres para Aveiro? Nós
              damos uma ajuda! O clima português varia ligeiramente de norte a
              sul, sendo o <b>norte mais frio</b> do que o sul.
            </p>
            <p className="p_next">
              Em Aveiro, as temperaturas médias variam entre os{" "}
              <b>8 e 14 graus em janeiro</b> - considerado o mês mais frio - e
              entre os <b>17 e 30 graus em agosto</b>. Os meses mais chuvosos
              são, normalmente, março e abril. Aveiro tem também uma brisa
              marítima todo o ano e, portanto, o melhor conselho que te podemos
              dar é para não te esqueceres de um casaco para o vento!
            </p>
            <div className="box_weather marginB_section">
              <Weather />
            </div>

            <div id="trabalhar_portugal" className="fantasmaAncora"></div>
            <h3>Trabalhar em Portugal</h3>
            <p className="p_next">
              Muitas vezes os estudantes internacionais perguntam “posso
              trabalhar em Portugal?”. A resposta rápida é: sim, podes!
            </p>
            <p className="p_next">
              Nos termos da legislação em vigor, os estudantes com Autorização
              de Residência <b>podem exercer uma atividade profissional</b>{" "}
              subordinada ou independente, desde que{" "}
              <b>notifiquem o Serviço de Estrangeiros e Fronteiras</b>,
              acompanhado de contrato de trabalho ou de declaração de início de
              atividade junto da administração fiscal, bem como comprovativo de
              inscrição na Segurança Social.
            </p>
            <p>
              O exercício da atividade profissional{" "}
              <b>requer a substituição do título de residência</b>, devendo o
              interessado agendar atendimento com o SEF e apresentar os
              documentos acima.
            </p>

            <div id="locais_culto" className="fantasmaAncora"></div>
            <h3>Locais de Culto</h3>
            <p className="p_next">
              Embora a maior parte da população portuguesa seja católica,
              existem em Aveiro comunidades de muitas outras confissões
              religiosas. Existe em Portugal uma grande rede de suporte
              religioso/espiritual e um conjunto de locais de culto:
            </p>
            <div className="accordions_margin">
              <AcLocaisCulto />
            </div>

            <div id="custo_vida" className="fantasmaAncora"></div>
            <h3>Custo de Vida</h3>
            {/*ICONS + TEXTO */}
            <div className="row">
              <div className="col-2 col-xl-1 mb-4">
                <img src={MoneyBag} alt="" className="icon_size" />
              </div>
              <div className="col-9 col-xl-11">
                <p className="p_next title_custo">Custo médio por mês</p>
                <p>500€ - 600€</p>
              </div>
              <div className="col-2 col-xl-1 mb-4">
                <img src={Restaurant} alt="" className="icon_size" />
              </div>
              <div className="col-9 col-xl-11">
                <p className="p_next title_custo">Alimentação</p>
                <p>100€ - 200€</p>
              </div>
              <div className="col-2 col-xl-1 marginB_section">
                <img src={Home} alt="" className="icon_size" />
              </div>
              <div className="col-9 col-xl-11">
                <p className="p_next title_custo">Alojamento</p>
                <p>160€ - 200€</p>
              </div>
            </div>

            <div id="seguranca_aveiro" className="fantasmaAncora"></div>
            <h3>Segurança em Aveiro</h3>
            <p className="p_next">
              Aveiro é uma cidade de média dimensão e bastante segura para
              viver, sem especiais registos de criminalidade ou ameaça de
              violência. De qualquer forma,{" "}
              <b>
                aconselhamos os nossos estudantes a tomar as precauções normais
              </b>
              , como não andar a pé sozinho até muito tarde, não aceitar boleia
              de desconhecidos ou não deixar os pertences pessoais sem
              vigilância.
            </p>
            <img
              src={Seguranca}
              alt="Uma das vistas da Ria de Aveiro"
              className="img_only_next"
            />
          </div>
        </div>

        {/* AREA 3 FERIADOS IMPORTANTES */}
        <div id="3" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Feriados Importantes</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8 p-0">
            <SliderFeriados />
          </div>
        </div>

        {/* AREA 4 SOBRE PORTUGAL */}
        <div id="4" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3" id="1">
            <h2>Sobre Portugal</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rqWdEUbKlgA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Vídeo da VisitPortugal"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GU5W1LecyXw"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Vídeo da VisitPortugal"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/6JhRMryTqMo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Vídeo Top 7 lugares a visitar"
            ></iframe>
            {/*VIDEOS PT*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default CidadeAveiro;
