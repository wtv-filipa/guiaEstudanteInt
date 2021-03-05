import React from "react";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <div className="row mx-auto">
          <div className="col-md-5 col-xs-12">
            <div className="first">
              <h3>Segue a UA</h3>
              <a
                href="https://www.facebook.com/universidadedeaveiro/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f font-size-icon"></i>
              </a>
              <a
                href="https://www.instagram.com/universidadedeaveiro/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram font-size-icon"></i>
              </a>
              <a
                href="https://twitter.com/univaveiro"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter font-size-icon"></i>
              </a>
              <a
                href="https://www.linkedin.com/school/universidade-de-aveiro/?originalSubdomain=pt"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in font-size-icon"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCJnxPIxMHdxcYhRIIw_ztEg"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-youtube font-size-icon"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 col-xs-12">
            <div className="second links">
              <h3>Links rápidos</h3>
              <ul className="p-0">
                <li>
                  <a
                    href="https://www.ua.pt/"
                    target="_blank"
                    rel="noreferrer"
                    className="link_footer"
                  >
                    Website da UA
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ua.pt/stic/uamobile"
                    target="_blank"
                    rel="noreferrer"
                    className="link_footer"
                  >
                    UA Mobile
                  </a>
                </li>
                <li>
                  <a
                    href="https://paco.ua.pt/"
                    target="_blank"
                    rel="noreferrer"
                    className="link_footer"
                  >
                    PACO - Secretaria Virtual
                  </a>
                </li>
                <li>
                <a
                    href="/construcao#start"
                    className="link_footer"
                  >
                  Campus 360º
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-xs-12">
            <div className="third">
              <h3>Contactos</h3>
              <ul className="p-0">
                <li>
                  Campus Universitário de Santiago
                </li>
                <li>
                  <a
                    href="tel:+351234372565"
                    className="link_footer"
                  >
                    +351 234 372 565
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:geral@ua.pt"
                    className="link_footer"
                  >
                    geral@ua.pt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="textalign_footer">
            <p className="p_text_white p_next_footer">
              Esta plataforma não dispensa a consulta do{" "}
              <a
                className="link_footer"
                href="https://www.ua.pt/file/62286"
                target="_blank"
                rel="noreferrer"
              >
                Guia em formato PDF
              </a>
              .
            </p>
            <p className="p_text_white p_next">
              Copyright © GEI 2021. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
