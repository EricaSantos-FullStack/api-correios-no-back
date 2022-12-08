const { consultarCep } = require("correios-brasil");

const cep = "21770200";

consultarCep(cep).then((response) => {
  console.log(response.data);
});
