import * as Yup from "yup";

export default Yup.object().shape({
    testemunho: Yup.string()
    .max(1500, "O teu testemunho é muito grande!")
    .required("O testemunho é um campo obrigatório."),
    frase: Yup.string()
    .max(200, "A tua frase tem de ser mais pequena!")
    .required("A frase é um campo obrigatório."),
});