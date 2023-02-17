const chaveAcesso = "a4b094f9fc73c79e3425effec9d1f9d8";
const botao = document.querySelector("#btn");
const resultadoInput = document.querySelector("#input");

const cidadeElemento = document.getElementById("cidade");
const vento = document.getElementById("velocidade-vento");
const temperatura = document.getElementById("temperatura");
const umidade = document.getElementById("umidade");
const condicaoClimatica = document.getElementById("condicao-climatica");

botao.addEventListener("click", (evento)=>{ 
  evento.preventDefault(); 
  
  let cidade = resultadoInput.value;

  dadosBusca(cidade);  
   
 });

const dadosBusca = async (cidade) => {
  let buscaAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${chaveAcesso}&lang=pt_br`;
  let buscaInfo = await fetch(buscaAPI);
  let resultado = await buscaInfo.json();
  mostraResultado(resultado);
 };

  function mostraResultado (resultado) {
  const dados = document.getElementById("dados");
  const temperaturaConvertida = parseInt(resultado.main.temp);
  dados.innerHTML = `
    <div id="cidade">
        <h2><i class="fa-solid fa-location-dot"></i> ${resultado.name}</h2>
    </div>
    <div id="condicao-climatica">
        <h2>${resultado.weather[0].description}</h2>
    </div>
    <div id="temperatura">
        <h2>${temperaturaConvertida}° Celsius </h2>
    </div>
    <div id="umidade">
        <h2><i class="fa-solid fa-droplet"></i> ${resultado.main.humidity}% de Umidade</h2>
    </div>
    <div id="velocidade-vento">
        <h2><i class="fa-solid fa-wind"></i> Vento com Velocidade de ${resultado.wind.speed} KM/H</h2>
    </div>
  `
 } 




