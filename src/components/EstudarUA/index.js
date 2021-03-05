import React from "react";
import "../../styles/estudarUA.css";
import { LinkBTNImg } from "../LinkBTN";
/* 1 LINK */
import Paco from "../../imgs/Icons/paco.svg";
/* 6 LINK */
import MoneyBag from "../../imgs/Icons/money_bag.svg";
import Home from "../../imgs/Icons/home.svg";
import Restaurant from "../../imgs/Icons/restaurant.svg";
import Run from "../../imgs/Icons/run.svg";
import Heart from "../../imgs/Icons/heart.svg";
import Study from "../../imgs/Icons/study.svg";
/* 8 LINK */
import Servicedesk from "../../imgs/Icons/servicedesk.svg";
import User_uni from "../../imgs/Icons/user_uni.svg";
import Email from "../../imgs/Icons/email.svg";
import Wifi from "../../imgs/Icons/wifi.svg";
import Elearning from "../../imgs/Icons/elearning.svg";
import UAmobile from "../../imgs/Icons/ua_mobile.svg";
import VPN from "../../imgs/Icons/vpn.svg";
import MyUA from "../../imgs/Icons/my_ua.svg";

const EstudarUA = () => {
  return (
    <>
      <div className="container">
        {/* AREA 1 SOBRE A UA */}
        <div id="1" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Sobre a UA</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <p className="p_next">
              A Universidade de Aveiro (UA) é uma fundação pública com regime de
              direito privado que tem como missão a intervenção e
              desenvolvimento da formação graduada e pós-graduada, a
              investigação e a cooperação com a sociedade.
            </p>
            <p className="p_next">
              É mundialmente reconhecida pela qualidade do seu ambiente de
              ensino e investigação e também pelo seu perfil internacional.
              Estudar aqui é estar envolvido em um <b>ambiente multicultural</b>{" "}
              e desfrutar de uma qualidade de vida incrível, belas praias de
              areia branca e arredores.
            </p>
            <iframe
              src="https://www.youtube.com/embed/QbIDx8Hbif0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="next"
              title="Vídeo Institucional da Universidade de Aveiro"
            ></iframe>
            <p>
              Ao escolheres a UA escolhes uma Universidade que valoriza as suas
              competências, aumenta os conhecimentos e valoriza a formação
              através dos seus programas, ao mesmo tempo que vives uma vida
              relaxada, segura mas também vibrante.
            </p>
          </div>
        </div>
        {/* AREA 2 INFO ACADÉMICAS COMPLEMENTARES */}
        <div id="2" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Informações Académicas Complementares</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <div id="frequencia_assiduidade" className="fantasmaAncora"></div>
            <h3>Frequência e Assiduidade</h3>
            <p className="p_next">
              Em geral, <b>todos os ciclos de estudo</b> (licenciatura, mestrado
              e programa doutoral) podem ser frequentados em{" "}
              <b>regime de tempo integral</b> ou em <b>tempo parcial</b>.
            </p>
            <p className="p_next">
              Os ciclos de estudo em regime de frequência a{" "}
              <b>tempo integral</b>, pressupõem a inscrição do estudante em{" "}
              <b>mais de trinta créditos</b>.
            </p>
            <p className="p_next">
              A opção pelo <b>regime parcial</b> depende da manifestação de
              vontade do estudante durante o{" "}
              <b>período de inscrição de cada ano letivo</b>. A <b>propina</b> a
              pagar em regime de tempo parcial corresponde a <b>60% do valor</b>{" "}
              fixado para os estudantes a tempo inteiro, do respetivo curso.
            </p>
            <p className="p_next">
              O docente responsável de cada disciplina pode decidir pela{" "}
              <b>marcação de faltas</b> às aulas teóricas e/ou teórico-práticas
              do 1º e 2º ano de licenciatua e dos ciclos de estudos integrados
              conducentes à obteção do grau de mestre, desde que conste do
              funcionamento da unidade curricular a divulgar no PACO, até à
              primeira semana de aulas. Nesse caso, os estudantes dos
              ciclos/anos referidos que faltarem injustificadamente a{" "}
              <b>mais de 30% das aulas</b> com marcação de falas, reprovam
              automaticamente à respetiva disciplina, ficando impedidos de se
              apresentarem a qualquer época de exames durante o período em
              causa.
            </p>
            <p>
              Para <b>mais informação</b>, consulta a versão completa do{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://www.ua.pt/file/62286"
                title="Fazer download do guia do estudante internacional."
              >
                Guia do Estudante Internacional
              </a>{" "}
              e o{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://www.ua.pt/file/43911"
                title="Ver o regulamento de estudos da UA."
              >
                Regulamento de Estudos da UA
              </a>
              .
            </p>
            <div id="creditos_ects" className="fantasmaAncora"></div>
            <h3>Créditos ECTS</h3>
            <p className="p_next">
              O Sistema Europeu de Transferência e Acumulação de Créditos
              (European Credit Transfer and Accumulation System ECTS) é um
              sistema centrado no estudante, que{" "}
              <b>reflete o volume de trabalho</b> que é requerido para que
              alcance os objetivos de determinado programa de estudos.
            </p>
            <p className="p_next">
              Assim, os créditos ECTS correspondem a um{" "}
              <b>peso atribuído a cada disciplina</b> para descrever o trabalho
              necessário e o tempo a despender para a realizar.
            </p>
            <p className="p_next">
              No sistema ECTS, <b>60 créditos representam um ano de estudos</b>{" "}
              (em termos de carga de trabalho a tempo inteiro).
            </p>
            <p>
              Para mais informação sobre o sistema de créditos, consulte a
              versão completa do{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://www.ua.pt/file/62286"
                title="Fazer download do guia do estudante internacional."
              >
                Guia do Estudante Internacional
              </a>
              .
            </p>
            <div id="avalicao" className="fantasmaAncora"></div>
            <h3>Avaliação</h3>
            <p className="p_next">
              Na UA, a avaliação pode ser <b>contínua</b>, <b>discreta</b> ou
              por <b>exame final</b>, podendo estes tipos de avaliação coexistir
              numa mesma unidade curricular (disciplina). Os métodos de
              avaliação são propostos pelo professor de cada disciplina e são
              dados a conhecer aos alunos durante a primeira semana letiva do
              respetivo semestre.
            </p>
            <p className="p_next">
              O docente responsável pela unidade curricular pode condicionar a
              aprovação da mesma à <b>obtenção de uma nota mínima</b>.
            </p>
            <p>
              O professor deve disponibilizar elementos de avaliação
              diferenciados e adaptados às condições especiais dos estudantes.
            </p>
            <div id="aproveitamento_escolar" className="fantasmaAncora"></div>
            <h3>Aproveitamento Escolar</h3>
            <p className="p_next">
              Durante o teu tempo na UA, vais ouvir falar muitas vezes em
              aproveitamento escolar. Mas o que é isso? Aproveitamento escolar
              é, de uma forma muito simples, ter uma{" "}
              <b>nota positiva em pelo menos 50% dos créditos</b> em que te
              encontras inscrito num dado ano letivo. Por favor, confere o
              artigo 34ª do{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://www.ua.pt/file/43911"
                title="Ver o regulamento de estudos da UA."
              >
                Regulamento de Estudos da UA
              </a>{" "}
              para informação completa sobre aproveitamento escolar.
            </p>
            <p>
              Atenção, alunos que tenham <b>bolsa de incentivo</b> devem ter
              aproveitamento escolar para manter a bolsa.
            </p>
            <div id="epoca_exames" className="fantasmaAncora"></div>
            <h3>Época de Exames</h3>
            <p>
              A Época de exames é o período de tempo em que decorrem as{" "}
              <b>avaliações finais das unidades curriculares</b> (disciplinas).
              Existe a <b>época normal</b> - o primeiro período de avaliação; a{" "}
              <b>época de recurso</b> – um período posterior à época normal e
              que se destina a quem não teve aproveitamento na época normal ou a
              quem quer melhorar a nota; e a <b>época especial</b> - um período
              destinado a situações particulares e que podem ser identificadas
              no{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://www.ua.pt/file/43911"
                title="Ver o regulamento de estudos da UA."
              >
                Regulamento de Estudos da Universidade de Aveiro
              </a>
              .
            </p>
          </div>
        </div>
        {/* AREA 3 SERVIÇOS DE APOIO*/}
        <div id="3" className="fantasmaAncora"></div>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3">
            <h2>Serviços de Apoio</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <div id="serviços_gestao" className="fantasmaAncora"></div>
            <h3>Serviços de Gestão Académica</h3>
            <p className="p_next">
              Serviços técnicos e administrativos de{" "}
              <b>apoio na função ensino-aprendizagem</b> na UA: inscrições,
              candidaturas, matrículas, estágios, mobilidade, requisições de
              documentos, entre outros. Contam com áreas de Registos Académicos,
              Mobilidade e Integração Profissional.
            </p>
            <p className="p_next">
              O PACO é uma das formas mais eficazes de contactar com os SGA.
            </p>
            {/* 1 LINK */}
            <LinkBTNImg
              link="https://paco.ua.pt/"
              icon={Paco}
              iconAlt="Ícon PACO"
              btnName="PACO"
            />
            <div id="servicos_acao" className="fantasmaAncora"></div>
            <h3 className="mt-4">Serviços de Ação Social</h3>
            <p className="p_next">
              São os serviços <b>responsáveis pela gestão</b> do alojamento
              universitário, refeitórios e bares, espaços desportivos, livraria
              e papelaria e pelo Centro de Saúde Universitários. Os estudantes
              internacionais podem usufruir de todos os serviços.
            </p>
            {/* 6 LINK */}
            <LinkBTNImg
              link="https://www.ua.pt/sas/page/8363?ref=ID0ECCA"
              icon={MoneyBag}
              iconAlt="Ícon Apoio Social"
              btnName="Apoio Social"
            />
            <LinkBTNImg
              link="https://www.ua.pt/#/pt/alojamento"
              icon={Home}
              iconAlt="Ícon Alojamento"
              btnName="Alojamento"
            />
            <LinkBTNImg
              link="https://www.ua.pt/#/pt/alimentacao"
              icon={Restaurant}
              iconAlt="Ícon Alimentação"
              btnName="Alimentação"
            />
            <LinkBTNImg
              link="https://www.ua.pt/#/pt/desporto"
              icon={Run}
              iconAlt="Ícon Desporto"
              btnName="Desporto"
            />
            <LinkBTNImg
              link="https://www.ua.pt/pt/saude-bem-estar"
              icon={Heart}
              iconAlt="Ícon Saúde e Bem-estar"
              btnName="Saúde e Bem-estar"
            />
            <LinkBTNImg
              link="https://www.ua.pt/sas/livraria"
              icon={Study}
              iconAlt="Ícon Livraria e Papelaria"
              btnName="Livraria e Papelaria"
            />
            <div id="servicos_tecnologias" className="fantasmaAncora"></div>
            <h3 className="mt-4">
              Serviços e Tecnologias da Informação e Comunicação
            </h3>
            <p className="p_next">
              É este o serviço que, logo no primeiro momento, atribui ao
              estudante um <b>utilizador universal</b>, com email e password,
              para acesso a caixa de email da UA e todos os outros serviços.
            </p>
            <p className="p_next">
              Em toda a área da UA existe <b>rede wireless gratuita</b>{" "}
              (eduroam) e pode ainda beneficiar de um <b>serviço VPN</b> para, à
              distância, conseguir aceder à rede interna da UA.
            </p>
            <p className="p_next">
              Os estudantes poderão ainda recorrer a uma{" "}
              <b>plataforma de e-learning</b> (moodle), onde muitos professores
              disponibilizam conteúdos online para apoio ao estudo.
            </p>
            <p>
              Existe ainda um <b>Servicedesk</b> para questões relacionadas com
              todas as <b>dimensões do acesso e utilização</b> dos serviços de
              informação e comunicação da UA.
            </p>
            {/* 8 LINK */}
            <LinkBTNImg
              link="https://www.ua.pt/stic/page/11591?ref=ID0EJCA "
              icon={Servicedesk}
              iconAlt="Ícon Servicedesk"
              btnName="Servicedesk"
            />
            <LinkBTNImg
              link="https://www.ua.pt/stic/PageText.aspx?id=12836 "
              icon={User_uni}
              iconAlt="Ícon Utilizador Universal"
              btnName="Utilizador Universal"
            />
            <LinkBTNImg
              link="https://mail.ua.pt"
              icon={Email}
              iconAlt="Ícon Corrreio Eletrónico"
              btnName="Correio Eletrónico"
            />
            <LinkBTNImg
              link="https://www.ua.pt/pt/stic/page/11651"
              icon={Wifi}
              iconAlt="Ícon Rede Wireless"
              btnName="Rede Wireless (eduram)"
            />
            <LinkBTNImg
              link="https://elearning.ua.pt"
              icon={Elearning}
              iconAlt="Ícon E-Learning"
              btnName="E-Learning (moodle)"
            />
            <LinkBTNImg
              link="https://www.ua.pt/stic/uamobile"
              icon={UAmobile}
              iconAlt="Ícon UA Mobile"
              btnName="UA Mobile"
            />
            <LinkBTNImg
              link="https://www.ua.pt/stic/teletrabalho_vpn"
              icon={VPN}
              iconAlt="Ícon VPN"
              btnName="Acesso remoto (VPN)"
            />
            <LinkBTNImg
              link="https://my.ua.pt"
              icon={MyUA}
              iconAlt="Ícon My UA"
              btnName="My UA"
            />
            <div id="bibliotecas_info" className="fantasmaAncora"></div>
            <h3 className="mt-4">
              Bibliotecas, Informação Documental e Museologia
            </h3>
            <p className="p_next">
              Um serviço responsável pelas várias bibliotecas da UA e muito
              mais. Os alunos poderão estudar, pesquisar, requisitar livros,
              frequentar cursos de formação, entre outras valências.
            </p>
            <p className="p_next">
              Existem ainda espaços de estudo e de trabalhos de grupo, alguns
              deles abertos <b>24 horas por dia</b>.
            </p>
            <p>
              Sabe mais em:{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://www.ua.pt/pt/bibliotecas"
                title="Ver mais sobre bibliotecas e salas de estudo"
              >
                https://www.ua.pt/pt/bibliotecas
              </a>{" "}
              e{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://www.ua.pt/sbidm/"
                title="Ver mais sobre os serviços de biblioteca, informação documental e museologia"
              >
                https://www.ua.pt/sbidm/
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstudarUA;
