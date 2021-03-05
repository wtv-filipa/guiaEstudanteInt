const Yup = require("yup");

module.exports = Yup.object().shape({
  testemunho: Yup.string()
    .max(1500, "O teu testemunho é muito longo.")
    .required("O testemunho não pode ser vazio."),
  frase: Yup.string()
    .max(200, "A tua frase é muito longa.")
    .required("A frase não pode ser vazia."),
});
