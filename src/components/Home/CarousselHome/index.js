import React from "react";
import { useSelector } from "react-redux";
import { selectAuthUserIsLogged } from "../../../store/auth/selectors";
import Carousel_1 from "../../../imgs/carousel_home/carousel_1.jpg";
import Carousel_2 from "../../../imgs/carousel_home/carousel_2.jpg";
import Carousel_2_1 from "../../../imgs/carousel_home/carousel_2_1.jpg";
import Carousel_3 from "../../../imgs/carousel_home/carousel_3.jpg";
import Carousel_4 from "../../../imgs/carousel_home/carousel_4.jpg";
import { CarouselBtn } from "../../PrimaryBTN";
import "../../../styles/carousel.css";

const Caroussel = () => {
  const isLogged = useSelector((state) => selectAuthUserIsLogged(state));
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide homeCarousel"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={Carousel_1}
            className="d-block w-100 sizeIMG"
            alt="First slide"
          />
          <div className="container">
            <div className="carousel-caption d-sm-block">
              <h1 className="text-start">Estudar na UA</h1>
              <CarouselBtn
                link="/estudarua"
                title="Ir para a página Estudar na UA"
              />
            </div>
          </div>
        </div>
        {!isLogged ? (
          <div className="carousel-item">
            <img
              src={Carousel_2}
              className="d-block w-100 sizeIMG"
              alt="Second slide"
            />
            <div className="container">
              <div className="carousel-caption d-md-block">
                <h1 className="text-start">Regista-te!</h1>
                <p className="text-start text_caroussel">
                  Ao iniciar sessão com a tua conta da UA, tens acesso a várias To
                  Do List e podes publicar os teus testemunhos!
              </p>
              </div>
            </div>
          </div>
        ) : (
            <div className="carousel-item">
              <img
                src={Carousel_2_1}
                className="d-block w-100 sizeIMG"
                alt="Second slide"
              />
              <div className="container">
                <div className="carousel-caption d-md-block">
                  <h1 className="text-start">To Do List</h1>
                  <CarouselBtn
                    link="/todolist#start"
                    title="Ir para a minha To Do List personalizada"
                  />
                </div>
              </div>
            </div>
          )}

        <div className="carousel-item">
          <img
            src={Carousel_3}
            className="d-block w-100 sizeIMG"
            alt="Third slide"
          />
          <div className="container">
            <div className="carousel-caption d-md-block">
              <h1 className="text-start">Cidade de Aveiro</h1>
              <CarouselBtn
                link="/cidadeaveiro"
                title="Ir para a página Cidade de Aveiro"
              />
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={Carousel_4}
            className="d-block w-100 sizeIMG"
            alt="Fourth slide"
          />
          <div className="container">
            <div className="carousel-caption d-md-block">
              <h1 className="text-start">Vida Académica</h1>
              <CarouselBtn
                link="/vidaacademica"
                title="Ir para a página Vida Académica"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caroussel;
