const { calcularPrecoPrazo } = require("correios-brasil");

let args = {
  sCepOrigem: "81200100",
  sCepDestino: "21770200",
  nVlPeso: "1",
  nCdFormato: "1",
  nVlComprimento: "20",
  nVlAltura: "20",
  nVlLargura: "20",
  nCdServico: ["04014", "04510"], //Array com os códigos de serviço Sedex vs PAC
  nVlDiametro: "0",
};

calcularPrecoPrazo(args).then((res) => {
  console.log(res);
});
