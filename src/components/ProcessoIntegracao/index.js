/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { PrimaryBTN } from "../PrimaryBTN";
import ComunidadesEstudantes from "../../imgs/ProcessoIntegracao/comunidades_estudantes.jpg";
import SessoesOrientacao from "../../imgs/ProcessoIntegracao/sessoes_orientacao.jpg";
import LUA from "../../imgs/ProcessoIntegracao/lua.jpg";

const ProcessoIntegracao = () => {
  return (
    <>
      <div className="container">
        {/* AREA 1 APOIO AO ESTUDANTE INTERNACIONAL */}
        <div id="1" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Apoio ao Estudante Internacional</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <div id="ua_intercultural" className="fantasmaAncora"></div>
            <h3>UA_Intercultural</h3>
            <p className="p_next">
              O UA_Intercultural (UA_I) é um{" "}
              <b>
                espaço central no acolhimento e integração dos Estudantes
                Internacionais
              </b>
              . Está situado em frente à Livraria da UA e ali os estudantes
              podem encontrar uma equipa que apoia nas mais diversas questões da
              internacionalização e, além disso, dinamiza diversas atividades
              interculturais ao longo de todo o ano.
            </p>
            <p className="p_next">
              O UA_I presta um apoio personalizado no{" "}
              <b>esclarecimento de dúvidas</b>, ajuda na{" "}
              <b>resolução de questões académicas e sociais</b> e trabalha em
              articulação com outros parceiros institucionais, internos e
              externos à UA.
            </p>
            <iframe
              src="https://www.youtube.com/embed/ds6rjLQqeVo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="next"
              title="Vídeo da UA_Intercultural"
            ></iframe>
            <p className="p_next">
              O UA_I desenvolve ainda um programa anual de atividades
              interculturais que promovem a diversidade e mobilizam a comunidade
              em torno da internacionalização. Estas iniciativas{" "}
              <b>aproximam os estudantes e as suas comunidades</b> e aprofundam
              as redes de cooperação com parceiros institucionais, envolvendo a
              comunidade local e académica. A participação nestas atividades é
              livre e serão divulgadas nos canais da UA.
            </p>
            <PrimaryBTN
              alinhar="text-end mb-4"
              link="/chegadaaveiro#3"
              title="Vê mais sobre a UA_I"
              texto="Vê também"
            />

            <div id="claim_ua" className="fantasmaAncora"></div>
            <h3 className="">CLAIM_UA</h3>
            {/* VIDEO */}
            <p className="p_next">
              O CLAIM_UA tem a missão de{" "}
              <b>prestar informação geral e apoio especializado</b> em áreas
              como a regularização da situação em Portugal, a atribuição da
              nacionalidade, reagrupamento familiar, esclarecimento de questões
              profissionais, acesso a serviços públicos, apoio ao
              empreendedorismo migrante, entre muitos outros assuntos.
            </p>
            <p className="p_next">
              O CLAIM_UA conta com técnicos especializados para prestar apoio à
              comunidade internacional da UA,{" "}
              <b>desde a chegada e durante toda a estadia na UA</b>, trabalha de
              forma muito próxima com as estruturas internas e desenvolve a sua
              ação em articulação com o Alto Comissariado para as Migrações, com
              os serviços públicos, autarquias e outros parceiros
              institucionais.
            </p>
            <PrimaryBTN
              alinhar="text-end mb-4"
              link="/chegadaaveiro#4"
              title="Vê mais sobre o CLAIM_UA"
              texto="Vê também"
            />
            <div id="comunidades_estudantes" className="fantasmaAncora"></div>
            <h3>Comunidades de Estudantes Internacionais</h3>
            <p className="p_next">
              Existem várias comunidades de estudantes internacionais, formais e
              informais, que se mantêm em articulação permanente com o UA_I, com
              vista a um melhor acolhimento, integração e acompanhamento dos
              estudantes na UA.
            </p>
            <p className="p_next">
              Esta relação de grande proximidade e em rede permite encontrar
              mecanismos que vão ao encontro das necessidades dos alunos, bem
              como <b>promover a cultura e as tradições</b> dos países e
              comunidades de origem. Têm ainda o objetivo de acompanhar o
              percurso escolar e a promoção da formação integral dos estudantes
              e despistar situações potencialmente problemáticas que necessitem
              de especial atenção por parte da UA.
            </p>
            <img
              src={ComunidadesEstudantes}
              alt="Espaço dedicado aos estudantes internacionais na UA"
              className="img_only"
            />

            <div id="esn_aveiro" className="fantasmaAncora"></div>
            <h3>ESN Aveiro</h3>
            <p className="p_next">
              A Erasmus Student Network Aveiro (ESN) é uma{" "}
              <b>organização internacional de estudantes</b>, sem fins
              lucrativos, que promove os programas de mobilidade académica. A
              ESN Aveiro apoia e desenvolve intercâmbio para jovens
              universitários na UA, facilita a sua integração no ambiente
              académico e nas comunidades locais e possibilita uma experiência
              intercultural para aqueles que não têm a possibilidade de passar
              um período no estrangeiro.
            </p>
            <p className="p_next">
              A ESN Aveiro apoia ainda os estudantes da UA que pretendem
              deslocar-se em mobilidade para outro país europeu e desenvolve
              atividades recreativas, culturais, sociais e cívicas que promovem
              o <b>bom acolhimento e integração</b>.
            </p>
            <iframe
              src="https://www.youtube.com/embed/HQZekdhKwr0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Vídeo ESN Aveiro"
            ></iframe>
            <div id="programa_buddy" className="fantasmaAncora"></div>
            <h3>Programa Buddy</h3>
            <p className="p_next">
              O Programa Buddy tem o objetivo de{" "}
              <b>
                acompanhar os estudantes internacionais desde o primeiro momento
              </b>
              , ainda durante a preparação e organização da viagem, e facilitar
              o seu processo de integração na UA, na cidade e na região de
              Aveiro.
            </p>
            <p className="p_next">
              Este <b>apoio à distância</b> é prestado por estudantes mais
              velhos, voluntários, e em próxima articulação com a UA.
            </p>
            <p>
              A cada novo estudante é atribuído um Buddy do mesmo país de origem
              que poderá partilhar experiências e informações e orientar a
              organização do novo estudante.
            </p>
          </div>
        </div>
        {/* AREA 2 APOIO PEDAGÓGICO*/}
        <div id="2" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Apoio Pedagógico</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <div id="curso_nivelamento" className="fantasmaAncora"></div>
            <h3>Cursos de Nivelamento</h3>
            <p className="p_next">
              <b>Português Língua Estrangeira – PLE:</b> para quem tiver
              necessidade de melhorar os conhecimentos de Língua Portuguesa
              poderá beneficiar dos cursos no Departamento de Línguas e Cultura
              (níveis principiante, intermédio ou avançado). Entre as várias
              opções, destacam-se os{" "}
              <b>cursos intensivos de verão e de inverno</b>, os{" "}
              <b>cursos semestrais de Língua Portuguesa</b> e os{" "}
              <b>cursos online</b> (A1). É um curso de formação gratuita.
            </p>
            <p>
              <b>Cálculo I:</b> Para os estudantes que se inscrevem em cursos de
              engenharia ou ciências e que queiram colmatar eventuais lacunas de
              formação na área de matemática. Este curso é de frequência
              gratuita e terá a <b>duração de duas semanas</b>. Decorre{" "}
              <b>antes do início do ano letivo</b>, de forma intensiva.Para mais
              informação:{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://www.ua.pt/pt/cursos-nivelamento"
              >
                https://www.ua.pt/pt/cursos-nivelamento
              </a>
            </p>
            <div id="gabinete_pedagogico" className="fantasmaAncora"></div>
            <h3>Gabinete Pedagógico</h3>
            <p>
              O Gabinete Pedagógico promove o{" "}
              <b>bem-estar e sucesso escolar dos estudantes da UA</b>,
              proporcionando-lhes apoio em assuntos que se relacionam com
              aspetos gerais da sua integração e vida académica, com particular
              atenção aos estudantes portadores de deficiência.
            </p>
          </div>
        </div>
        {/* AREA 3 APOIO ACADÉMICO*/}
        <div id="3" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Apoio Académico</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <div id="provedor_estudante" className="fantasmaAncora"></div>
            <h3>Provedor do Estudante</h3>
            <p>
              A Provedoria do Estudante da UA é um órgão que tem como missão a{" "}
              <b>defesa e promoção dos direitos e interesses legítimos</b> de
              todos os estudantes da UA. Atua com independência, isenção e
              liberdade e compete-lhe apreciar as queixas e reclamações que lhe
              sejam apresentadas pelos estudantes.
            </p>
            <div id="programa_tutoria" className="fantasmaAncora"></div>
            <h3>Programa de Tutoria</h3>
            <p className="p_next">
              Na UA, desenvolvemos um programa para acolher e integrar os
              estudantes do primeiro ano. O objetivo deste programa é garantir o
              bem-estar e sucesso académico, através do{" "}
              <b>apoio personalizado</b>.
            </p>
            <p className="p_next">
              No início do ano letivo será{" "}
              <b>
                atribuído a cada estudante um colega-mentor e um professor-tutor
              </b>
              . Para além deste acompanhamento individualizado, o programa
              inclui palestras, workshops e outras sessões onde poderão
              desenvolver competências e enriquecer o currículo.
            </p>
            <iframe
              src="https://www.youtube.com/embed/KMCqS8XwAWM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Vídeo sobre o Programa de Tutoria"
            ></iframe>
            <div id="sessoes_orientacao" className="fantasmaAncora"></div>
            <h3>Sessões de Orientação Tutorial</h3>
            <p className="p_next">
              A cada unidade curricular de licenciatura está, obrigatoriamente,
              associada uma sessão de <b>orientação presencial</b>, com a
              duração mínima de uma <b>hora por semana</b> e prevista no horário
              semanal de atividades letivas dos estudantes. O docente
              responsável pela unidade curricular pode determinar um maior
              número de sessões, em função do número total de estudantes e/ou
              turmas.
            </p>
            <p className="p_next">
              Este trabalho desenvolvido pelos docentes das diferentes
              disciplinas permite ao estudante acompanhar melhor as matérias,
              ajudar no nivelamento de conhecimentos, auxiliar no trabalho de
              adaptação a uma nova realidade e quebrar a distância entre
              docentes e estudantes.
            </p>
            <img
              src={SessoesOrientacao}
              alt="Imagem de duas alunas a trabalhar"
              className="img_only"
            />

            <div
              id="diretores_curso_coordenadores_dep"
              className="fantasmaAncora"
            ></div>
            <h3>Diretores de Curso e Coordenadores Departamentais</h3>
            <p className="p_next">
              Entre outras responsabilidades, os <b>diretores de curso</b> têm a
              função de promover a definição articulação e a gestão da
              estratégia global do curso, de forma a garantir a qualidade do
              ensino e a quem o estudante se pode dirigir para qualquer questão
              relacionada.
            </p>
            <p className="p_next">
              Além disso, cada Departamento, Escola ou Instituto tem ainda um{" "}
              <b>Coordenador Departamental para a Internacionalização</b> e um{" "}
              <b>Coordenador Departamental para a Mobilidade</b> (Erasmus).
              Estes contribuem para a melhoria da experiência académica dos
              estudantes e investigadores internacionais e ajudam a reforçar o
              sentimento de pertença à comunidade da UA.
            </p>
            <p>
              Mais informação:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link text-break"
                href="https://www.ua.pt/cooperacaointernacional/page/24676"
              >
                https://www.ua.pt/cooperacaointernacional/page/24676
              </a>{" "}
              e{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://www.ua.pt/gri/coordenadores"
              >
                https://www.ua.pt/gri/coordenadores
              </a>
              .
            </p>
            <div id="nucleos_curso" className="fantasmaAncora"></div>
            <h3>Núcleos de Curso</h3>
            <p className="p_next">
              Os núcleos de curso representam o{" "}
              <b>elo de ligação entre os estudantes e a Associação Académica</b>{" "}
              (AAUAv). Têm como objetivo principal a defesa dos interesses dos
              estudantes, apoiando-os e promovendo atividades culturais,
              desportivas, pedagógicas e formativas. Promovem ainda a ligação
              dos cursos ao mundo empresarial/profissional e aos antigos alunos.
            </p>
            <p>
              Desempenham também um papel muito importante no{" "}
              <b>acompanhamento dos estudantes e contacto com os professores</b>
              , minimizando os problemas que possam surgir no acompanhamento das
              aulas e na aprendizagem.
            </p>
            <div id="associacao_academica" className="fantasmaAncora"></div>
            <h3>Associação Académica da UA</h3>
            <p className="p_next">
              A Associação Académica da Universidade de Aveiro (AAUAv) é a{" "}
              <b>estrutura representativa dos estudantes da UA</b>. Os seus
              principais objetivos são organizar, defender e representar todos
              os estudantes da UA. Promovem o voluntariado e o dinamismo da
              comunidade estudantil. Os estudantes podem beneficiar das várias
              vantagens oferecidas pela AAUAv, bem como fazer parte da sua
              estrutura.
            </p>
            <p className="p_next">
              A AAUav é composta por vários núcleos (temáticos e de curso) que
              organizam iniciativas e apoiam os estudantes.
            </p>
            <p>
              A participação dos estudantes em atividades extracurriculares é
              muito importante na sua integração e sucesso académico.
            </p>
          </div>
        </div>
        {/* AREA 4 APOIO SOCIAL*/}
        <div id="4" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Apoio Social</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <div id="lua" className="fantasmaAncora"></div>
            <h3>LUA - Linha de Apoio UA</h3>
            <img
              src={LUA}
              alt="Imagem do Gabinete da Linha de Apoio"
              className="img_only_next"
            />
            <p className="p_next">
              A Linha Universidade de Aveiro (LUA) é um serviço integrado
              inclusivo de <b>apoio e aconselhamento psicológico e emocional</b>{" "}
              aos estudantes, que funcionada durante a noite. Este serviço é
              prestado por <b>especialistas em apoio psicológico</b> e um{" "}
              <b>grupo de estudantes voluntários</b> que recebem formação
              específica. Todo o trabalho é supervisionado e a formação é
              ministrada por psicólogos e médicos que se encontram disponíveis
              para casos e consultas urgentes. A LUA funciona <b>diariamente</b>
              , das <b>21h à 01h</b>, através do número{" "}
              <a className="link" href="tel:800 208 448">
                800 208 448
              </a>
              . Podes ver também{" "}
              <a href="/contactosemergencia#linhasApoio" className="link">
                aqui
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessoIntegracao;
