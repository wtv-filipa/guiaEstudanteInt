import React from "react";
import Peixe from "../../../imgs/CidadeAveiro/peixe.jpg";
import Centro from "../../../imgs/CidadeAveiro/centro.jpg";
import Praia from "../../../imgs/CidadeAveiro/praia.jpg";
import Salinas from "../../../imgs/CidadeAveiro/salinas.jpg";

const ImgCarousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Peixe} alt="First slide"  />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Centro} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Praia} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Salinas} alt="Fourth slide"/>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </>
  );
};

export default ImgCarousel;
