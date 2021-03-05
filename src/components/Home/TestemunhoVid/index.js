import React from "react";
import "../../../styles/sobreUAHome.css";
import { PrimaryBTN } from "../../PrimaryBTN";

const SobreUA = () => {
  return (
    <section className="container sobreUA mt-5 marginB_title">
      <div className="mb-5">
        <h2>Testemunhos em vídeo</h2>
        <div className="orange_line"></div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <iframe
            src="https://www.youtube.com/embed/9ryDjB5vdOQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="next"
            title="Testemunho em vídeo 1"
          ></iframe>
        </div>
        <div className="col-12 col-md-6">
          <iframe
            src="https://www.youtube.com/embed/c_T4--OJo9U"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Testemunho em vídeo 2"
          ></iframe>
        </div>
        <div className="col-12 col-md-6">
          <iframe
            src="https://www.youtube.com/embed/Wuzt3ZzEw2Q"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Testemunho em vídeo 3"
          ></iframe>
        </div>
        <div className="col-12 col-md-6">
          <iframe
            src="https://www.youtube.com/embed/3o2ylPZRw2g"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Testemunho em vídeo 4"
          ></iframe>
        </div>
      </div>

      <PrimaryBTN
        alinhar="text-end"
        novaClass="testemunho"
        link="https://www.youtube.com/playlist?list=PLKejuYrHbE67teS2xp1V8NdYYt8oEU_Ce"
        title="Abrir playlist no youtube"
        texto="Ver mais no Youtube"
      />
    </section>
  );
};

export default SobreUA;
