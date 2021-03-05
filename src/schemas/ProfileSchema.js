import * as Yup from "yup";

export default Yup.object().shape({
  curso: Yup.string()
    .required("O curso atual é um campo obrigatório."),
  departamento: Yup.string()
    .required("A unidade orgânica é um campo obrigatório."),
});
