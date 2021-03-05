import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardGeral from "./Card_geral";
import "../../../styles/testemunhos.css";
import { selectGetTestemunhos } from "../../../store/testemunhos/selectors";
import { Formik, Form, ErrorMessage, Field } from "formik";
import styled from "styled-components";
import ProfileSchema from "../../../schemas/ProfileSchema";
import getCursos from "../../GetCursos";

//InfiniteScroll
//import InfiniteScroll from "react-infinite-scroll-component";
//import { getTestemunhos, getTestemunhosUser } from "../../../store/testemunhos/actions";

const renderCardGeral = ({ id, frase, nome, curso, img, timestamp }) => (
  <CardGeral
    key={id}
    id={id}
    frase={frase}
    nome={nome}
    curso={curso}
    img={img}
    timestamp={timestamp}
  />
);

const StyledErrorMessage = styled(ErrorMessage)`
  height: 1.75rem;
  font-size: 13px;
  color: red;
`;

const TestemunhosGeral = () => {
  const testemunhosG = useSelector((state) => selectGetTestemunhos(state));
  const [order] = useState("desc");
  const [searchTerm, setSearchTerm] = useState(null);
  const searchRef = useRef(null);

  const [initialValues, setInitialValues] = useState({
    departamento: "",
    curso: [],
  });

  <getCursos />;

  let orderedT;
  if (order === "desc" && testemunhosG.length > 0) {
    orderedT = [...testemunhosG].sort((a, z) => {
      if (a.timestamp > z.timestamp) {
        return -1;
      }
      if (z.timestamp < a.timestamp) {
        return 1;
      }
      return 0;
    });
  }
  const filteredT = searchTerm
    ? orderedT.filter((c) => {
        return c.curso.indexOf(searchTerm) !== -1;
      })
    : orderedT;

  //InfiniteScroll
  // const testemunhosGerais = useSelector((state) => selectGetTestemunhos(state));
  // let orderedTest;
  // if (order === "desc" && testemunhosGerais.length > 0) {
  //   orderedTest = [...testemunhosGerais].sort((a, z) => {
  //     if (a.timestamp > z.timestamp) {
  //       return -1;
  //     }
  //     if (z.timestamp < a.timestamp) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }
  // const filteredTest = searchTerm
  //   ? orderedTest.filter((c) => {
  //       return c.curso.indexOf(searchTerm) !== -1;
  //     })
  //   : orderedTest;

  const onConfirm = (curso, departamento) => {
    if (curso && departamento) {
      setSearchTerm(curso);
      //setListItems(filteredT);
    } 
  };

  const onDelete = () => {
    setSearchTerm(null);
  };

  //InfiniteScroll
  // const [n_inicial, setNinicial] = useState(0);
  // const [n_final, setNfinal] = useState(2);
  // const [listItems, setListItems] = useState(
  //   filteredT.slice(n_inicial, n_final)
  // );
  // const fetchMoreListItems = () => {
  //   setNinicial((prevState) => prevState + 2);
  //   setNfinal((prevState) => prevState + 2);
  //   setTimeout(() => {
  //     setListItems((prevState) => [
  //       ...prevState,
  //       ...filteredT.slice(n_inicial, n_final),
  //     ]);
  //   }, 200);
  // };
  return (
    <section className="container mb-2 mt-3">
      <section className="testemunho">
        <div className="card">
          <Formik
            validateOnBlur
            initialValues={initialValues}
            validationSchema={ProfileSchema}
            onSubmit={({ curso, departamento }) => {
              setInitialValues({
                curso,
                departamento,
              });
              onConfirm(curso, departamento);
            }}
          >
            {(props) => {
              const {
                values,
                handleChange,
                setFieldValue,
                dirty,
                resetForm,
              } = props;
              return (
                <Form>
                  <div className="row">
                    {/*Departamento */}
                    <div className="col-xs-12 col-md-6">
                      <Field
                        id="departamento"
                        as="select"
                        name="departamento"
                        required
                        className="field_register"
                        onChange={async (e) => {
                          const { value } = e.target;
                          const _cursos = await getCursos(value);
                          setFieldValue("departamento", value);
                          setFieldValue("curso", "");
                          setFieldValue("cursos", _cursos);
                        }}
                      >
                        <option value="">Escolhe uma unidade orgânica</option>
                        <option value="Departamento de Ambiente e Ordenamento">
                          Departamento de Ambiente e Ordenamento
                        </option>
                        <option value="Departamento de Biologia">
                          Departamento de Biologia
                        </option>
                        <option value="Departamento de Ciências Médicas">
                          Departamento de Ciências Médicas
                        </option>
                        <option value="Departamento de Ciências Sociais, Políticas e do Território">
                          Departamento de Ciências Sociais, Políticas e do
                          Território
                        </option>
                        <option value="Departamento de Comunicação e Arte">
                          Departamento de Comunicação e Arte
                        </option>
                        <option value="Departamento de Economia, Gestão, Engenharia Industrial e Turismo">
                          Departamento de Economia, Gestão, Engenharia
                          Industrial e Turismo
                        </option>
                        <option value="Departamento de Educação e Psicologia">
                          Departamento de Educação e Psicologia
                        </option>
                        <option value="Departamento de Eletrónica, Telecomunicações e Informática">
                          Departamento de Eletrónica, Telecomunicações e
                          Informática
                        </option>
                        <option value="Departamento de Engenharia Civil">
                          Departamento de Engenharia Civil
                        </option>
                        <option value="Departamento de Engenharia Materiais e Cerâmica">
                          Departamento de Engenharia Materiais e Cerâmica
                        </option>
                        <option value="Departamento de Engenharia Mecânica">
                          Departamento de Engenharia Mecânica
                        </option>
                        <option value="Departamento de Física">
                          Departamento de Física
                        </option>
                        <option value="Departamento de Geociências">
                          Departamento de Geociências
                        </option>
                        <option value="Departamento de Línguas e Culturas">
                          Departamento de Línguas e Culturas
                        </option>
                        <option value="Departamento de Matemática">
                          Departamento de Matemática
                        </option>
                        <option value="Departamento de Química">
                          Departamento de Química
                        </option>
                        <option value="Escola Superior de Design, Gestão e Tecnologias da Produção">
                          Escola Superior de Design, Gestão e Tecnologias da
                          Produção
                        </option>
                        <option value="Escola Superior de Saúde">
                          Escola Superior de Saúde
                        </option>
                        <option value="Escola Superior de Tecnologia e Gestão de Águeda">
                          Escola Superior de Tecnologia e Gestão de Águeda
                        </option>
                        <option value="Instituto Superior de Contabilidade e Administração da Universidade de Aveiro">
                          Instituto Superior de Contabilidade e Administração da
                          Universidade de Aveiro
                        </option>
                      </Field>
                      <StyledErrorMessage name="departamento" component="div" />
                    </div>
                    {/*Curso */}
                    <div className="col-xs-12 col-md-5">
                      <Field
                        as="select"
                        name="curso"
                        ref={searchRef}
                        required
                        className="field_register"
                        value={values.curso}
                        onChange={handleChange}
                      >
                        <option value="">
                          Escolhe o curso para pesquisares
                        </option>
                        {values.cursos &&
                          values.cursos.map((r) => (
                            <option key={r.value} value={r.value}>
                              {r.label}
                            </option>
                          ))}
                      </Field>
                      <StyledErrorMessage name="curso" component="div" />
                    </div>

                    {/*submeter */}
                    <div className="text-center col-xs-12 col-md-1">
                      <button
                        type="submit"
                        className="btn btnForm"
                        onClick={onConfirm}
                      >
                        <i className="far fa-search"></i>
                      </button>
                      <button
                        type="button"
                        className="outline "
                        onClick={() => {
                          resetForm();
                          onDelete();
                        }}
                        disabled={!dirty}
                      >
                        Limpar
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
      <div
        className="row testG"
        id="scrollableDiv" 
        style={{ display: 'flex' }}     
      >
        {/* <InfiniteScroll
          dataLength={listItems.length}
          next={fetchMoreListItems}
          hasMore={true}
          loader={
            <h4>Loading...</h4>
          }
          ScrollableTarget="scrollableDiv"
        >
          {listItems.map(renderCardGeral)}
        </InfiniteScroll> */}
        {filteredT && filteredT.map(renderCardGeral)}
      </div>
    </section>
  );
};

export default TestemunhosGeral;
