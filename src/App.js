import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { ProtectedRoute, ProtectedPage } from "./schemas/ProtectedRouter";
import { history } from "./store";
import { store, persistor } from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  EstudarUA,
  PrepararViagem,
  VidaAcademica,
  CidadeAveiro,
  ChegadaAveiro,
  P404,
  ProcessoIntegracao,
  TestemunhosGeral,
  MeusTestemunhos,
  TestemunhoInd,
  EscolherTestemunho,
  ToDoList,
  FormTexto,
  EditFormTexto,
  EditarPerfil,
  Register,
  FAQ,
  ContactosEstruturas,
  ContactosEmergencia,
  ConstructionPage,
  NoLogin,
} from "./pages";
import { PersistGate } from "redux-persist/integration/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider, Theme } from "@uaveiro/ui";

function App(props) {
  const { isLogged } = props;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}></ConnectedRouter>
        <ThemeProvider
          theme={{
            ...Theme,
            components: {
              ...Theme.components,
              agendaCard: {
                ...Theme.components.agendaCard,
                dateColor: "#ffffff",
                iconColor: "#fff"
              },
              agenda: {
                ...Theme.components.agenda,
                agendaCardTextColor: "#fff",
              },
            },
          }}
        >
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/estudarUA" component={EstudarUA} />
              <Route exact path="/cidadeaveiro" component={CidadeAveiro} />
              <Route exact path="/prepararviagem" component={PrepararViagem} />
              <Route exact path="/chegadaaveiro" component={ChegadaAveiro} />
              <Route
                exact
                path="/processointegracao"
                component={ProcessoIntegracao}
              />
              <Route exact path="/vidaacademica" component={VidaAcademica} />
              <Route exact path="/testemunhos" component={TestemunhosGeral} />
              <Route
                exact
                path="/testemunhoInd/:id"
                component={TestemunhoInd}
              />
              <Route exact path="/register" component={Register} />
              <Route exact path="/faqs" component={FAQ} />
              <Route
                exact
                path="/contactosestruturas"
                component={ContactosEstruturas}
              />
              <Route
                exact
                path="/contactosemergencia"
                component={ContactosEmergencia}
              />
              <Route exact path="/construcao" component={ConstructionPage} />
              <ProtectedPage
                exact
                path="/nologin"
                component={NoLogin}
                isLogged={isLogged}
              />
              
              {/* Só acede se estiver logado */}
              <ProtectedRoute
                exact
                path="/todolist"
                component={ToDoList}
                isLogged={isLogged}
              />
              <ProtectedRoute
                exact
                path="/testemunhotexto"
                component={FormTexto}
                isLogged={isLogged}
              />
              <ProtectedRoute
                exact
                path="/edittestemunhotexto/:id"
                component={EditFormTexto}
                isLogged={isLogged}
              />
              <ProtectedRoute
                exact
                path="/escolhertestemunho"
                component={EscolherTestemunho}
                isLogged={isLogged}
              />
              <ProtectedRoute
                exact
                path="/meustestemunhos"
                component={MeusTestemunhos}
                isLogged={isLogged}
              />
              <ProtectedRoute
                exact
                path="/editarperfil"
                component={EditarPerfil}
                isLogged={isLogged}
              />
              <Route component={P404} />
            </Switch>
            <Footer />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
