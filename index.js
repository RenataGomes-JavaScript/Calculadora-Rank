// Nome fixo do Herói
let nomeHeroi = "Renata";


// Vitórias fixas do seu herói
let vitorias = 101;


// Lê derrotas do usuário 
let derrotas = 5;


// Função que calcula o nivél do jogador
function calcularNivelJogador(nome, vitorias, derrotas) {
    let saldo = vitorias - derrotas; //calcula o saldo de partidas
    let nivel = ""; // variável para o nível 


// Define o nível conforme a quantidade de vitórias
if (vitorias < 10) {
    nivel = "Ferro";
} else if (vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias <= 50) {
    nivel = "Prata";
} else if (vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias <= 90) {
    nivel = "Diamante";
} else if (vitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}


  // Retorna a mensagem final personalizada
    return nome + " tem de saldo de " + saldo + " está no nivel de " + nivel;
}

  // Chama a função e exibe o resultado
console.log(calcularNivelJogador(nomeHeroi, vitorias, derrotas));