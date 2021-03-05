const Yup = require("yup");

module.exports = Yup.object().shape({
  curso: Yup.string()
    .required("O curso atual não pode ser um campo vazio."),
  departamento: Yup.string()
    .required("A unidade orgânica não pode ser um campo vazio."),
});
