import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Logo from '../../imgs/logo.svg';
import { setAuthProfileReset } from '../../store/auth/actions/constants';
import { selectAuthUserIcon } from '../../store/auth/selectors';
import '../../styles/nav.css';
import {
  selectAuthUser,
  selectAuthUserIsLogged,
} from '../../store/auth/selectors';
import { setAuthLogout } from '../../store/auth/actions/constants';
import Cookies from 'universal-cookie';

const Navbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterPage, setRegisterPage] = useState(false);
  const isLogged = useSelector((state) => selectAuthUserIsLogged(state));
  const cookies = new Cookies();
  const history = useHistory();

  const location = useLocation();
  const user = useSelector((state) => selectAuthUser(state));

  const userIcon = useSelector((state) => selectAuthUserIcon(state));

  const handleLogout = () => {
    cookies.remove('_utkn', { path: '/' });
    cookies.remove('_utkFrb', { path: '/' });
    dispatch(setAuthLogout());
    dispatch(setAuthProfileReset());
    history.push('/');
  };

  useEffect(() => {
    setRegisterPage(location.pathname === '/register' ? true : false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.getElementById('mySidenav').style.width = '320px';
    } else {
      document.getElementById('mySidenav').style.width = '0';
    }
  });

  const openNav = () => {
    setIsOpen(true);
    if (document.getElementById('mySidenav')) {
      document.getElementById('mySidenav').style.width = '320px';
    }
    setMenu(inicialMenu);
    setActive(inicialActive);
  };

  const closeNav = () => {
    setIsOpen(false);
    if (document.getElementById('mySidenav')) {
      document.getElementById('mySidenav').style.width = '0';
    }
    setMenu(inicialMenu);
    setActive(inicialActive);
  };
  /* DROPDOWN*/

  const inicialMenu = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
  };

  const inicialActive = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
  };
  const [menu, setMenu] = useState(inicialMenu);
  const [active, setActive] = useState(inicialActive);

  const toogleMenu = (optionName) => {
    let menu_aux = {};
    let element_active = {};
    for (const key in menu) {
      menu_aux[key] = key === optionName ? !menu[key] : false;
    }
    for (const key in active) {
      element_active[key] = key === optionName ? !menu[key] : false;
    }
    setMenu(menu_aux);
    setActive(element_active);
  };


  const collapseOnClickItem = (optionName) => {
    setIsOpen(false);
    toogleMenu(optionName)
  };

  const [closeUserOption, setCloseUserOption] = useState(false);

  return (
    <nav className="navbar navbar-expand sticky-top">
      <div className="container navP">
        {/*side menu*/}
        <div id="mySidenav" className="sidenav">
          <p className="closebtn" onClick={closeNav}>
            &times;
          </p>

          {/*PRIMEIRO*/}
          <div className="dropdown-btn" onClick={() => toogleMenu('option1')}>
            <span className={active.option1 ? 'active' : null}>
              <span className="row">
                <NavHashLink
                  to="/estudarua#start"
                  className="linkSide col-8"
                  title="Ir para a página Estudar na UA"
                  onClick={closeNav}
                >
                  Estudar na UA
                </NavHashLink>
                <span className="MargemSeta col-2">
                  <i
                    hidden={menu.option1}
                    className="fas fa-chevron-down ms-3 "
                  ></i>
                  <i
                    hidden={!menu.option1}
                    className="fas fa-chevron-up ms-3"
                  ></i>
                </span>
              </span>
            </span>
          </div>
          {menu.option1 && (
            <div className="fontLighterMenu">
              <NavHashLink
                to="/estudarua#1"
                title="Ir para a secção Sobre a UA"
                onClick={() => collapseOnClickItem("option1")}
              >
                Sobre a UA
              </NavHashLink>
              <NavHashLink
                to="/estudarua#2"
                title="Ir para a secção Informações Académicas Complementares"
                onClick={() => collapseOnClickItem("option1")}
              >
                Informações Académicas Complementares
              </NavHashLink>
              <NavHashLink
                to="/estudarua#3"
                title="Ir para a secção Serviços de Apoio"
                onClick={() => collapseOnClickItem("option1")}
              >
                Serviços de Apoio
              </NavHashLink>
            </div>
          )}

          {/*SEGUNDO*/}
          <div className="dropdown-btn" onClick={() => toogleMenu('option2')}>
            <span className={active.option2 ? 'active' : null}>
              <span className="row">
                <NavHashLink
                  to="/cidadeaveiro#start"
                  className="linkSide col-8"
                  title="Ir para a página Cidade de Aveiro"
                  onClick={closeNav}
                >
                  Cidade de Aveiro
                </NavHashLink>
                <span className="MargemSeta col-2">
                  <i
                    hidden={menu.option2}
                    className="fas fa-chevron-down ms-3 "
                  ></i>
                  <i
                    hidden={!menu.option2}
                    className="fas fa-chevron-up ms-3"
                  ></i>
                </span>
              </span>
            </span>
          </div>
          {menu.option2 && (
            <div className="fontLighterMenu">
              <NavHashLink
                to="/cidadeaveiro#1"
                title="Ir para a secção sobre Aveiro"
                onClick={() => collapseOnClickItem("option2")}
              >
                Sobre Aveiro
              </NavHashLink>
              <NavHashLink
                to="/cidadeaveiro#2"
                title="Ir para a secção vida do quotidiano"
                onClick={() => collapseOnClickItem("option2")}
              >
                Vida do Quotidiano
              </NavHashLink>
              <NavHashLink
                to="/cidadeaveiro#3"
                title="Ir para a secção feriados importantes"
                onClick={() => collapseOnClickItem("option2")}
              >
                Feriados Importantes
              </NavHashLink>
              <NavHashLink
                to="/cidadeaveiro#4"
                title="Ir para a secção sobre Portugal"
                onClick={() => collapseOnClickItem("option2")}
              >
                Sobre Portugal
              </NavHashLink>
            </div>
          )}

          {/*TERCEIRO*/}
          <div className="dropdown-btn" onClick={() => toogleMenu('option3')}>
            <span className={active.option3 ? 'active' : null}>
              <span className="row">
                <NavHashLink
                  to="/prepararviagem#start"
                  className="linkSide col-8"
                  title="Ir para a págnia preparar a viagem"
                  onClick={closeNav}
                >
                  Preparar a Viagem
                </NavHashLink>
                <span className="MargemSeta col-2">
                  <i
                    hidden={menu.option3}
                    className="fas fa-chevron-down ms-3 "
                  ></i>
                  <i
                    hidden={!menu.option3}
                    className="fas fa-chevron-up ms-3"
                  ></i>
                </span>
              </span>
            </span>
          </div>
          {menu.option3 && (
            <div className="fontLighterMenu">
              <NavHashLink
                to="/prepararviagem#1"
                title="Ir para a secção declaração de matrícula"
                onClick={() => collapseOnClickItem("option3")}
              >
                Declaração de Matrícula
              </NavHashLink>
              <NavHashLink
                to="/prepararviagem#2"
                title="Ir para a secção visto de estudo"
                onClick={() => collapseOnClickItem("option3")}
              >
                Visto de Estudo
              </NavHashLink>
              <NavHashLink
                to="/prepararviagem#3"
                title="Ir para a secção documentos necessários"
                onClick={() => collapseOnClickItem("option3")}
              >
                Documentos Necessários
              </NavHashLink>
              <NavHashLink
                to="/prepararviagem#4"
                title="Ir para a secção apostila de haia"
                onClick={() => collapseOnClickItem("option3")}
              >
                Apostila de Haia
              </NavHashLink>
              <NavHashLink
                to="/prepararviagem#5"
                title="Ir para a secção pagamentos"
                onClick={() => collapseOnClickItem("option3")}
              >
                Pagamentos
              </NavHashLink>
            </div>
          )}

          {/*QUARTA*/}
          <div className="dropdown-btn" onClick={() => toogleMenu('option4')}>
            <span className={active.option4 ? 'active' : null}>
              <span className="row">
                <NavHashLink
                  to="/chegadaaveiro#start"
                  className="linkSide col-8"
                  title="Ir para a página Chegada a Aveiro"
                  onClick={closeNav}
                >
                  Chegada a Aveiro
                </NavHashLink>
                <span className="MargemSeta col-2">
                  <i
                    hidden={menu.option4}
                    className="fas fa-chevron-down ms-3 "
                  ></i>
                  <i
                    hidden={!menu.option4}
                    className="fas fa-chevron-up ms-3"
                  ></i>
                </span>
              </span>
            </span>
          </div>
          {menu.option4 && (
            <div className="fontLighterMenu">
              <NavHashLink
                to="/chegadaaveiro#1"
                title="Ir para a secção como chegar à universdiade"
                onClick={() => collapseOnClickItem("option4")}
              >
                Como Chegar à Universidade
              </NavHashLink>
              <NavHashLink
                to="/chegadaaveiro#2"
                title="Ir para a secação alojamento"
                onClick={() => collapseOnClickItem("option4")}
              >
                Alojamento
              </NavHashLink>
              <NavHashLink
                to="/chegadaaveiro#3"
                title="Ir para a secção UA_Intercultural"
                onClick={() => collapseOnClickItem("option4")}
              >
                UA_Intercultural
              </NavHashLink>
              <NavHashLink
                to="/chegadaaveiro#4"
                title="Ir para a secção CLAIM_UA"
                onClick={() => collapseOnClickItem("option4")}
              >
                CLAIM_UA
              </NavHashLink>
              <NavHashLink
                to="/chegadaaveiro#5"
                title="Ir para a secção formalidades académicas"
                onClick={() => collapseOnClickItem("option4")}
              >
                Formalidades Académicas
              </NavHashLink>
              <NavHashLink
                to="/chegadaaveiro#6"
                title="Ir para a secção regularização em Portugal"
                onClick={() => collapseOnClickItem("option4")}
              >
                Regularização em Portugal
              </NavHashLink>
            </div>
          )}

          {/*QUINTA*/}
          <div className="dropdown-btn" onClick={() => toogleMenu('option5')}>
            <span className={active.option5 ? 'active' : null}>
              <span className="row">
                <NavHashLink
                  to="processointegracao#start"
                  className="linkSide col-8"
                  title="Ir para a página processo de integração"
                  onClick={closeNav}
                >
                  Processo de Integração
                </NavHashLink>
                <span className="MargemSeta col-2">
                  <i
                    hidden={menu.option5}
                    className="fas fa-chevron-down ms-3 "
                  ></i>
                  <i
                    hidden={!menu.option5}
                    className="fas fa-chevron-up ms-3"
                  ></i>
                </span>
              </span>
            </span>
          </div>
          {menu.option5 && (
            <div className="fontLighterMenu">
              <NavHashLink
                to="processointegracao#1"
                title="Ir para a asecção apoio ao estudante internacional"
                onClick={() => collapseOnClickItem("option5")}
              >
                Apoio ao Estudante Internacional
              </NavHashLink>
              <NavHashLink
                to="processointegracao#2"
                title="Ir para a secção apoio pedagógico"
                onClick={() => collapseOnClickItem("option5")}
              >
                Apoio Pedagógico
              </NavHashLink>
              <NavHashLink
                to="processointegracao#3"
                title="Ir para a secção apoio académico"
                onClick={() => collapseOnClickItem("option5")}
              >
                Apoio Académico
              </NavHashLink>
              <NavHashLink
                to="processointegracao#4"
                title="Ir para a secção apoio social"
                onClick={() => collapseOnClickItem("option5")}
              >
                Apoio Social
              </NavHashLink>
            </div>
          )}
          <span className="row">
            <NavHashLink
              to="/vidaacademica#start"
              className="col-12"
              title="Ir para a página vida académica"
              onClick={closeNav}
            >
              Vida Académica
            </NavHashLink>
          </span>

          <span className="row">
            <NavHashLink
              to="/testemunhos#start"
              className="col-12"
              title="Ir para a página testemunhos"
              onClick={closeNav}
            >
              Testemunhos
            </NavHashLink>
          </span>

          {/*SEXTA*/}
          <div className="dropdown-btn" onClick={() => toogleMenu('option6')}>
            <span className={active.option6 ? 'active' : null}>
              <span className="row">
                <div
                  className="linkSide col-8"
                  title="Ir para a página contactos"
                >
                  Contactos
                </div>
                <span className="MargemSeta col-2">
                  <i
                    hidden={menu.option6}
                    className="fas fa-chevron-down ms-3 "
                  ></i>
                  <i
                    hidden={!menu.option6}
                    className="fas fa-chevron-up ms-3"
                  ></i>
                </span>
              </span>
            </span>
          </div>
          {menu.option6 && (
            <div className="fontLighterMenu">
              <NavHashLink
                to="/contactosestruturas#start"
                title="Ir para a página estruturas e serviços de apoio"
                onClick={() => collapseOnClickItem("option6")}
              >
                Estruturas e Serviços de Apoio
              </NavHashLink>
              <NavHashLink
                to="/contactosemergencia#start"
                title="Ir para a página contactos de emergência"
                onClick={() => collapseOnClickItem("option6")}
              >
                Contactos de Emergência
              </NavHashLink>
            </div>
          )}
          <span className="row">
            <NavHashLink
              to="/faqs#start"
              className="col-12"
              title="Ir para a página das faqs"
              onClick={closeNav}
            >
              FAQs
            </NavHashLink>
          </span>
        </div>
        <div className="hamburguer col-4 text-start" onClick={openNav}>
          {!isRegisterPage && <i className="fas fa-bars fa-lg"></i>}
        </div>

        {/*logo*/}
        <div className="col-4 text-center">
          {!isRegisterPage ? (
            <NavHashLink
              to="/#start"
              className="navbar-brand p-0 m-0"
              title="Voltar à página inicial"
            >
              <img className="logoSize" src={Logo} alt="logotipo GEI" />
            </NavHashLink>
          ) : (
              <img className="logoSize" src={Logo} alt="logotipo GEI" />
            )}
        </div>
        {/*right content*/}

        <div className="d-flex icons col-4 ms-auto">
          {!isRegisterPage && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/construcao#start" className="nav-link p-0" title="Mudar de idioma">
                  <span className="pe-2"> EN </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/construcao#start"
                  className="nav-link p-0"
                  title="Fazer uma pesquisa"
                >
                  <span className="my-auto">
                    | <i className="fas fa-search fa-sm ps-1 pe-1"></i> |
                  </span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                {!isLogged && (
                  <span
                    className="nav-link perfil dropdown-toggle p-0"
                    title="Iniciar sessão"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="ps-1">
                      <i className="far fa-user fa-sm"></i>
                    </span>
                  </span>
                )}
                {isLogged && (
                  <span
                    className="nav-link perfil dropdown-toggle p-0"
                    title="Imagem de perfil"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="ps-1">
                      <div
                        className="img-fluid profileIMG "
                        dangerouslySetInnerHTML={{ __html: userIcon }}
                        title="Imagem de perfil"
                        style={{ display: 'inline' }}
                      ></div>
                    </span>
                  </span>
                )}

                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  {!isLogged && (
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://wso2-gw.ua.pt/authorize?response_type=code&scope=openid&redirect_uri=http://localhost:3000/&client_id=IfLufdLinMxBrXfX3laC8sSi2pYa"
                      >
                        Login
                      </a>
                    </li>
                  )}
                  {isLogged && (
                    <>
                      <li>
                        <NavHashLink
                          to="/meustestemunhos#start"
                          className="dropdown-item"
                          onClick={() => setCloseUserOption(!closeUserOption)}
                        >
                          Os meus testemunhos
                        </NavHashLink>
                      </li>
                      <li>
                        <NavHashLink
                          to="/todolist#start"
                          className="dropdown-item"
                          onClick={() => setCloseUserOption(!closeUserOption)}
                        >
                          To Do List
                        </NavHashLink>
                      </li>
                      <li>
                        <NavHashLink
                          to={`/editarperfil#start`}
                          className="dropdown-item"
                          key={user.email}
                          onClick={() => setCloseUserOption(!closeUserOption)}
                        >
                          Editar perfil
                        </NavHashLink>
                      </li>

                      <li>
                        <span className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </span>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
