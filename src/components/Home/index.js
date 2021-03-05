import React from "react";
import { useSelector } from "react-redux";
import { selectGetTestemunhos } from "../../store/testemunhos/selectors";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Caroussel from "./CarousselHome";
import FirstSection from "./Timeline";
import TestemunhosHome from "./Cards";
import OwlCarousel from "react-owl-carousel";
import { PrimaryBTN } from "../PrimaryBTN";

const renderCardT = ({ id, frase, nome, curso, img, timestamp }) => (
  <TestemunhosHome
    id={id}
    frase={frase}
    nome={nome}
    curso={curso}
    img={img}
    timestamp={timestamp}
  />
);

const Sections = () => {
  const testemunhosG = useSelector((state) => selectGetTestemunhos(state));
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: [
      "<i class='fas fa-chevron-circle-left'></i>",
      "<i class='fas fa-chevron-circle-right'></i>",
    ],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  };

  return (
    <>
      <>
        <Caroussel />
        <FirstSection />
        <section className="container mt-5 mb-5 testemunhosHome">
          <div className="mb-4">
            <h2>Testemunhos</h2>
            <div className="orange_line"></div>
          </div>

          <OwlCarousel className="owl-theme" {...options}>
            {testemunhosG.length >= 0 && <>{testemunhosG.map(renderCardT)}</>}
          </OwlCarousel>
          <PrimaryBTN
            alinhar="text-end"
            novaClass="testemunho"
            link="/testemunhos"
            texto="Ver mais testemunhos"
          />
        </section>
      </>
    </>
  );
};
export default Sections;
