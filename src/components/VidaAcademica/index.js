import React from "react";

const VidaAcademica = () => {
  return (
    <>
      <div className="container">
        <div id="start" className="fantasmaAncora"></div>
        {/* AREA 1 VIDA ACADEMICA */}
        <div className="row mb-3 mt-4">
          <div className="col-md-4 mb-3" id="1">
            <h2>Vida Académica</h2>
            <div className="orange_line"></div>
          </div>
          <div className="col-md-8">
            <p className="p_next">
              A vida na UA vai muito além do estudo, dos livros e dos
              laboratórios. Estudar em Aveiro é fazer parte de uma das mais
              ricas vidas académicas do país e viver em pleno a universidade e a
              cidade.
            </p>
            <p className="p_next">
              A AAUAv e os outros grupos associativos da UA são um polo
              fundamental para o desenvolvimento de atividades culturais e
              desportivas. Composta por vários órgãos e por núcleos associativos
              e de curso, culturais e desportivos, estes representam a
              diversidade da academia, mas também a sua força e união.
            </p>
            <p className="p_next">
              A AAUAv marca o início e encerramento do ano letivo com duas
              celebrações académicas por excelência: o Integra-te e o Enterro do
              Ano. Estes momentos são muito mais do que noites de concertos,
              festa e folia. Há atividades culturais, projetos de solidariedade
              social e acima de tudo, alegria e espírito UA.
            </p>
            <p className="p_next">
              Recentemente, surgiu também o projeto Aveiro é Nosso, uma
              iniciativa que trabalha a relação do estudante com a cidade de
              Aveiro e tem como objetivo principal aproximar os dois lados, num
              processo de desenvolvimento mútuo.
            </p>
            <iframe
              src="https://www.youtube.com/embed/SjDQmd8_Hzs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="next"
              title="Vídeo Vida Académica Parte 1"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/TearbSRap8M"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="next"
              title="Vídeo Vida Académica Parte 2"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/OYlbgg-OBqs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="next"
              title="Vídeo Vida Académica Parte 3"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/Z2grGbSKR1E"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Vídeo Vida Académica Parte 4"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default VidaAcademica;
