import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTestemunho1 } from "../../../store/testemunhos/actions";
import { Formik, Form, ErrorMessage, Field } from "formik";
import TestemunhoSchema from "../../../schemas/TestemunhoSchema";
import { BackBTN } from "../../PrimaryBTN";
import "../../../styles/testemunhos.css";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { selectGetTestemunhos } from "../../../store/testemunhos/selectors";
import { setshowMessages } from "../../../store/testemunhos/actions/constants";

const TextArea = styled(Field)`
  width: 100%;
  min-height: 150px;
  height: 220px;
  text-overflow: ellipsis;
`;
const TextAreaFrase = styled(Field)`
  width: 100%;
  min-height: 150px;
  text-overflow: ellipsis;
`;
const StyledErrorMessage = styled(ErrorMessage)`
  height: 1.75rem;
  font-size: 13px;
  color: red;
`;

const EditTestemunhoTexto = ({ id, tipo = "texto" }) => {
  let history = useHistory();

  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    testemunho: "",
    frase: "",
  });

  const testemunhoInfo = useSelector((state) => selectGetTestemunhos(state));

  useEffect(() => {
    if (testemunhoInfo) {
      setInitialValues({
        testemunho: testemunhoInfo.testemunho || "",
        frase: testemunhoInfo.frase || "",
      });
    }
  }, [testemunhoInfo]);

  const onConfirm = (testemunho, frase) => {
    if (testemunho && frase) {
      dispatch(setshowMessages(true));
      dispatch(updateTestemunho1(id, testemunho, frase, tipo));
      history.push("/meustestemunhos#start");
    }
  };

  return (
    <section className="container marginB_section testemunhoText" key={id}>
      <div className="mt-3 mb-5">
        <h2>Edita o teu testemunho</h2>
        <div className="orange_line"></div>
      </div>
      <div className="card">
        <p className="mandatory p_next">* Obrigatório Preencher</p>
        <Formik
          enableReinitialize
          validateOnBlur
          initialValues={initialValues}
          validationSchema={TestemunhoSchema}
          onSubmit={({ testemunho, frase }) => {
            setInitialValues({ testemunho: "", frase: "" });
            onConfirm(testemunho, frase);
          }}
        >
          <Form>
            {/*testemunho*/}
            <div className="mb-3">
              <label htmlFor="Testemunho" className="form-label">
                Testemunho <span className="mandatory">*</span>
              </label>
              <StyledErrorMessage name="testemunho" component="div" />
              <TextArea
                id="testemunho"
                name="testemunho"
                component="textarea"
                className="form-control"
                placeholder="Escreve aqui o testemunho que descreve a tua experiência."
              />
              <div id="TestemunhoHelp" className="form-text">
                O teu texto não deve ultrapassar os 1500 caracteres.
              </div>
            </div>
            {/*Frase */}
            <div className="mb-3">
              <label htmlFor="Frase" className="form-label">
                Frase <span className="mandatory">*</span>
              </label>
              <StyledErrorMessage name="frase" component="div" />
              <TextAreaFrase
                id="frase"
                name="frase"
                component="textarea"
                className="form-control"
                placeholder="Escreve aqui uma frase que resume o teu testemunho"
              />
              <div id="FraseHelp" className="form-text">
                A tua frase não deve ultrapassar os 200 caracteres.
              </div>
            </div>
            {/*Imagem */}
            <div className="mb-3 ficheiros">
              <div className="mb-2">
                <label htmlFor="TestemunhoIMG">
                  Carregar uma imagem (Opcional)
                </label>
              </div>
              <div className="input-group">
                <input
                  type="file"
                  className="form-control"
                  id="TestemunhoIMG"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
              </div>
            </div>
            {/*Audio */}
            <div className="mb-4 ficheiros">
              <div className="mb-2">
                <label htmlFor="TestemunhoAUDIO">
                  Carregar um áudio (Opcional)
                </label>
              </div>
              <div className="input-group">
                <input
                  type="file"
                  className="form-control"
                  id="TestemunhoAUDIO"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
              </div>
            </div>
            {/*submeter */}
            <div className="text-center">
              <a href="/meustestemunhos#start">
                <button type="button" className="btn btnFormCancelar">
                  Cancelar
                </button>
              </a>
              <button type="submit" className="btn btnForm" onClick={onConfirm}>
                Editar
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default EditTestemunhoTexto;
