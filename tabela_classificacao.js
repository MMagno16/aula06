//           chave. valor.
var mari = { nome: "Mari", vitorias: 1, empates: 1, derrotas: 01, pontos: 0 };
var vitao = {
    nome: "Vitão",
    vitorias: 3,
    empates: 1,
    derrotas: 2,
    pontos: 0
};

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

mari.pontos = calculaPontos(mari)
vitao.pontos = calculaPontos(vitao)

var jogadores = [mari, vitao];

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento +=
            "<td><button onClick='adicionarVitoria(" +
            indice +
            ")'>Vitória</button></td>";
        elemento +=
            "<td><button onClick='adicionarEmpate(" +
            indice +
            ")'>Empate</button></td>";
        elemento +=
            "<td><button onClick='adicionarDerrota(" +
            indice +
            ")'>Derrota</button></td>";
        elemento += "</tr>";
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

function pontos(i) {
    var pontos = jogadores[i].vitorias * 3 + jogadores[i].empates;
    jogadores[i].pontos = pontos;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(indice) {
    var jogador = jogadores[indice];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}
function adicionarEmpate(indice) {
    var jogador = jogadores[indice];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(indice) {
    var jogador = jogadores[indice];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}
