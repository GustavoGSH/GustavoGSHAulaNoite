// Um array para armazenar os doadores
const doadores = [doador.push(doador2, doador3, doador4, doador5)];

// Função para cadastrar um doador
function cadastrarDoador() {
  const nome = prompt("Digite seu nome completo:");
  const idade = prompt("Digite sua idade:");
  const peso = prompt("Digite seu peso:");
  const tipoSanguineo = prompt("Digite seu tipo sanguineo:");
  const ultimaDoacao = prompt("Digite a ultima data da sua doação de sangue:");

  //As informações de cada usuário vão ser armazenadas neste objeto
  const doador = {
    nome1: nome,
    idade1: idade,
    peso1: peso,
    tipoSanguineo1: tipoSanguineo,
    ultimaDoacao1: ultimaDoacao,
  };
  //Crie um código que adiciona o objeto doador ao array doadores

 

  //Este código retorna uma mensagem. Deixe inalterado
  alert("Doador cadastrado com sucesso!");
}

/*// Função para listar os doadores
function listarDoadores() {
  let resultado = "===== LISTAGEM DE DOADORES =====";

  //Aqui vai o código que lista todos os doadores

  console.log(resultado);
}

// Função para buscar doadores por tipo sanguíneo
function buscarPorTipoSanguineo() {
  const tipoSanguineo = prompt("Digite o tipo sanguíneo desejado: ");
  let resultado = `Digite o tipo sanguíneo desejado: ${tipoSanguineo}\n`;

  resultado += "========================\n";
  resultado += "RESULTADO DA BUSCA:\n";
  resultado += "========================\n";

  //Aqui vai o código que busca doadores por tipo sanguíneo

  console.log(resultado);
}

// Função para buscar doadores por data da última doação
function buscarPorDataUltimaDoacao() {
  const dataDesejada = prompt("Digite a data desejada (dd/mm/aaaa): ");
  let resultado = `Digite a data desejada: ${dataDesejada}\n`;

  resultado += "========================\n";
  resultado += "RESULTADO DA BUSCA:\n";
  resultado += "========================\n";

  //Aqui vai o código que busca os doadores por data da última doação

  console.log(resultado);
}

// Função para executar a ação com base na opção selecionada no menu suspenso
function executarAcao() {
  const opcoes = document.getElementById("opcoes");
  const opcaoSelecionada = opcoes.value;

  switch (opcaoSelecionada) {
    case "cadastrar":
      cadastrarDoador();
      break;
    case "listar":
      listarDoadores();
      break;
    case "buscarTipo":
      buscarPorTipoSanguineo();
      break;
    case "buscarData":
      buscarPorDataUltimaDoacao();
      break;
    case "sair":
      console.log("Encerrando o programa.");
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}
*/