/*
let nome = document.querySelector("#nome");
let tipoAtividade = document.querySelector("#atividade");
let dificuldade = document.querySelector("#dificuldade");
let datepicker = document.querySelector("#datepicker");
let horario = document.querySelector("#horario");
let logradouro = document.querySelector("#logradouro");
let endereco = document.querySelector("#endereco");
let numEndereco = document.querySelector("#enderecoN");
let descricao = document.querySelector("#descricao");

function criarEvento() {
  var lista_eventos = JSON.parse(localStorage.getItem("lista-eventos") || "[]");

  let obj = {
    nome: nome.value,
    tipoAtividade: tipoAtividade.value,
    dificuldade: dificuldade.value,
    datepicker: datepicker.value,
    horario: horario.value,
    logradouro: logradouro.value,
    endereco: endereco.value,
    numEndereco: numEndereco.value,
    descricao: descricao.value,
  };

  lista_eventos.push(obj);

  localStorage.setItem("lista-eventos", JSON.stringify(lista_eventos));

  window.location.href = "./tela-perfil.html";
}

//  jQuery datepicker: Selecionar data a partir de um calendário
$(function () {
  $("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
    minDate: 0,
    showOtherMonths: true,
    dateFormat: "dd/mm/yy",
  });
});
*/