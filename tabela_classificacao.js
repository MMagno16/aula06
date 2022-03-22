var tab = document.getElementById("tabela");
var tabelas = document.getElementById("table_header");
put_table();
var array = [];
var derrotas = 0;
var empates = 0;
class player {
    constructor(nome, foto) {
        this.nome = nome;
        this.vitorias = 0;
        this.empates = empates;
        this.derrotas = derrotas;
        this.pontos = 0;
        this.foto = foto;
    }
}

function display() {
  let element = "";
  for (var i = 0; i < array.length; i++) {
    element += "<tr><td>" + array[i].nome + "</td>";
    element += "<td>" + array[i].vitorias + "</td>";
    element += "<td>" + array[i].empates + "</td>";
    element += "<td>" + array[i].derrotas + "</td>";
    element += "<td>" + array[i].pontos + "</td>";
    element +=
      "<td>" +
      "<button style='width:100px;height:30px;' onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button>" +
      "<div class='divider'></div>";
    element +=
      "<button style='width:100px;height:30px;' onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button>" +
      "<div class='divider'></div>";
    element +=
      "<button style='width:100px;height:30px;' onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button>" +
      "</td>";
    element +=
      "<td><img width='300' height='234' src=" +
      array[array.length - 1].foto +
      "></td>";
    element += "</tr>";
  }
  tabelas.innerHTML = "";
  put_table();
  tabelas.innerHTML += element;
  document.getElementById("1").value = "";
  document.getElementById("2").value = "";
}

function post_table() {
  array.push(
    new player(
      document.getElementById("1").value,
      document.getElementById("2").value
    )
  );
  display();
}

function put_table() {
  let header = "<tr>";
  header += "<th>Nome</th>";
  header += "<th>Vitórias</th>";
  header += "<th>Empates</th>";
  header += "<th>Derrotas</th>";
  header += "<th>Pontos</th>";
  header += "<th>Ações</th>";
  header += "<th>Foto</th>";
  header += "/<tr>";
  tabelas.innerHTML = header;
  let row = tabelas.insertRow(1);
  let nome = row.insertCell(0);
  let vitorias = row.insertCell(1);
  let empates = row.insertCell(2);
  let derrotas = row.insertCell(3);
  let pontos = row.insertCell(4);
  let act = row.insertCell(5);
  let foto = row.insertCell(6);
  nome.innerHTML = "<input type='text' id='1'>";
  vitorias.innerHTML = "0";
  empates.innerHTML = "0";
  derrotas.innerHTML = "0";
  pontos.innerHTML = "0";
  act.innerHTML =
    "<button style='width:100px;height:30px;' onClick='adicionarVitoria(-1)'>Vitória</button>" +
    "<div class='divider'></div>" +
    "<button style='width:100px;height:30px;' onClick='adicionarEmpate(-1)'>Empate</button>" +
    "<div class='divider'></div>" +
    "<button style='width:100px;height:30px;' onClick='adicionarDerrota(-1)'>Derrota</button>";

  foto.innerHTML = "URL: <input type='text' id=2>";
}

function ponto(){
  for(var i=0; i<array.length; i++){
    array[i].pontos = array[i].vitorias - array[i].derrotas + array[i].empates * 0.5;
  }
}

function adicionarVitoria(i) {
  if (i == -1) {
    return;
  }
  derrotas++;
  array[i].vitorias++;

  for (var j = 0; j < array.length; j++) {
    if (j == i){
      continue;
    }else {
      array[j].derrotas = derrotas-array[j].vitorias;
    }
  }
  ponto();
  display();
}

function adicionarEmpate(i){
  if(i==-1){
    return;
  }
  empates++;
  for(var j=0; j<array.length;j++){
    array[j].empates = empates;
  }
  ponto();
  display();
}

function adicionarDerrota(i){
   if (i == -1) {
    return;
  }
  derrotas++;

  for (var j = 0; j < array.length; j++) {
      array[j].derrotas = derrotas-array[j].vitorias;
  }
  ponto();
  display();
}

function zerar(){
  derrotas =0;
  empates =0;
  for(var i=0; i <array.length; i++){
    array[i].vitorias = 0;
    array[i].derrotas = 0;
    array[i].empates = 0;
    array[i].pontos =0;
  }
  display();
}

