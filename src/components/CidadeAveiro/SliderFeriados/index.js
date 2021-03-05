import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../../styles/cards_feriados.css";

const SliderFeriados = () => {
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
        items: 3,
      },
    },
  };
  return (
    <section className="container feriados">
      <OwlCarousel className="owl-theme" {...options}>
        <div>
          <div className="card feriados">
            <div className="card-body feriados text-center">
              <h3 className="card-title feriados dia">1</h3>
              <h3 className="card-title feriados">Janeiro</h3>
              <p className="card-text feriados">
                É celebrado o ano novo, trata-se de uma data festiva a nível
                mundial, que marca o início de um novo ano.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card feriados">
            <div className="card-body feriados text-center">
              <h3 className="card-title feriados dia">25</h3>
              <h3 className="card-title feriados">Abril</h3>
              <p className="card-text feriados">
                Conhecida como Revolução dos Cravos, refere-se a um evento da
                história de Portugal.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card feriados">
            <div className="card-body feriados text-center">
              <h3 className="card-title feriados dia">1</h3>
              <h3 className="card-title feriados">Maio</h3>
              <p className="card-text feriados">
                O dia do trabalhador é uma data comemorativa internacional,
                dedicada aos trabalhadores.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card feriados">
            <div className="card-body feriados text-center">
              <h3 className="card-title feriados dia">10</h3>
              <h3 className="card-title feriados">Junho</h3>
              <p className="card-text feriados">
                O Dia de Portugal, de Camões e das Comunidades Portuguesas
                celebra a data da morte de Camões.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card feriados">
            <div className="card-body feriados text-center">
              <h3 className="card-title feriados dia">15</h3>
              <h3 className="card-title feriados">Agosto</h3>
              <p className="card-text feriados">
                Celebra-se a Assunção de Nossa Senhora, referente à elevação de
                Maria em corpo e alma à eternidade.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card feriados">
            <div className="card-body feriados text-center">
              <h3 className="card-title feriados dia">5</h3>
              <h3 className="card-title feriados">Outubro</h3>
              <p className="card-text feriados">
                A Implantação da República comemora, anualmente, o dia em que
                caiu a monarquia em Portugal.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card feriados">
            <div className="card-body feriados text-center">
              <h3 className="card-title feriados dia">1</h3>
              <h3 className="card-title feriados">Novembro</h3>
              <p className="card-text feriados">
                É comemorado anualmente em honra aos santos conhecidos e
                desconhecidos, mártires e cristãos.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card feriados">
            <div className="card-body feriados text-center">
              <h3 className="card-title feriados dia">1</h3>
              <h3 className="card-title feriados">Dezembro</h3>
              <p className="card-text feriados">
                Esta data relembra a ação de nobres portugueses que invadiram o
                Paço Real e mataram o rei de Espanha.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card feriados">
            <div className="card-body feriados text-center">
              <h3 className="card-title feriados dia">8</h3>
              <h3 className="card-title feriados">Dezembro</h3>
              <p className="card-text feriados">
                O dia da Imaculada Conceição invoca a vida e a virtude de Virgem
                Maria, concebida sem mácula.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card feriados">
            <div className="card-body feriados text-center">
              <h3 className="card-title feriados dia">25</h3>
              <h3 className="card-title feriados">Dezembro</h3>
              <p className="card-text feriados">
                O Dia de Natal é um dos feriados mais importantes no calendário
                católico português.
              </p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default SliderFeriados;
