import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile1 } from "../../store/auth/actions";
import { Formik, Form, ErrorMessage, Field } from "formik";
import ProfileSchema from "../../schemas/ProfileSchema";
import "../../styles/edit_profile.css";
import styled from "styled-components";
import {
  selectGetProfile,
  selectGetProfileId,
} from "../../store/auth/selectors";
import { selectAuthUser, selectAuthUserIcon } from "../../store/auth/selectors";
import getCursos from "../GetCursos";

const StyledErrorMessage = styled(ErrorMessage)`
  height: 1.75rem;
  font-size: 13px;
  color: red;
`;

const EditarPerfil = ({ curso, departamento }) => {
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    curso: [],
    departamento: "",
  });
  const user = useSelector((state) => selectAuthUser(state));
  const userInfo = useSelector((state) => selectGetProfile(state));

  useEffect(() => {
    if (userInfo) {
      setInitialValues({
        curso: userInfo.curso || [],
        departamento: userInfo.departamento || "",
      });
    }
  }, [userInfo]);

  const onConfirm = (curso, departamento) => {
    if (curso && departamento) {
      dispatch(updateProfile1(profileId, user.email, curso, departamento));
      //window.location.reload();
    }
  };

  const userIcon = useSelector((state) => selectAuthUserIcon(state));
  const profileId = useSelector((state) => selectGetProfileId(state));
  <getCursos />;

  return (
    <section className="container marginB_section editProfile" key={user.email}>

      <div className="mt-4 mb-5">
        <h2>Editar Perfil</h2>
        <div className="orange_line"></div>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-12 col-md-4">
            <div
              className="img-fluid profileIMG align-text-top"
              dangerouslySetInnerHTML={{ __html: userIcon }}
              title="Imagem de perfil"
            ></div>
          </div>

          <div className="col-12 col-md-8">
            <p className="mandatory p_next">* Obrigatório Preencher</p>
            <Formik
              enableReinitialize
              validateOnBlur
              initialValues={initialValues}
              validationSchema={ProfileSchema}
              onSubmit={({ curso, departamento }) => {
                setInitialValues({ curso, departamento });
                onConfirm(curso, departamento);
              }}
            >
              {(props) => {
                const { values, handleChange, setFieldValue } = props;
                return (
                  <Form>
                    {/*Departamento */}
                    <div className="mb-5">
                      <label htmlFor="departamento" className="form-label">
                        Escolhe a tua unidade orgânica atual{" "}
                        <span className="mandatory">*</span>
                      </label>
                      <StyledErrorMessage name="departamento" component="div" />
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
                        <option value="">Escolhe a tua Unidade Orgânica</option>
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
                    </div>
                    {/*Curso */}
                    <div className="mb-3">
                      <label htmlFor="curso" className="form-label">
                        Escolhe o teu curso atual
                        <span className="mandatory">*</span>
                      </label>
                      <StyledErrorMessage name="curso" component="div" />
                      <Field
                        as="select"
                        name="curso"
                        required
                        className="field_register"
                        value={values.curso}
                        onChange={handleChange}
                      >
                        {/* <option value="">Escolhe o teu curso</option>
                  {values.cursos &&
                    values.cursos.map(r => (
                      <option key={r.value} value={r.value}>
                        {r.label}
                      </option>
                    ))} */}

                        <option value="">{userInfo.curso}</option>
                        {values.cursos &&
                          values.cursos.map((r) => (
                            <option key={r.value} value={r.value}>
                              {r.label}
                            </option>
                          ))}
                      </Field>
                    </div>

                    {/*submeter */}
                    <div className="text-center">
                      <a href="/#start"><button
                        type="button"
                        className="btn btnFormCancelar"
                      >
                        Cancelar
                      </button></a>
                      <button
                        type="submit"
                        className="btn btnForm"
                        onClick={onConfirm}
                      >
                        Guardar
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditarPerfil;
