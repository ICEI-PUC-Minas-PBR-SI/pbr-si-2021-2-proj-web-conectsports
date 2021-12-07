let nome = document.querySelector("#nome");
let usuario = document.querySelector("#usuario");
let senha = document.querySelector("#senha");
let email = document.querySelector("#email");

let sexo = document.querySelector("#sexo");
let dataDeNascimento = document.querySelector("#dataDeNascimento");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");

function cadastrar() {
  let obj = {
    nome: nome.value,
    usuario: usuario.value,
    senha: senha.value,
    email: email.value,
  };

  if (obj.nome && obj.usuario && obj.senha && obj.email) {
    localStorage.setItem("cadastro", JSON.stringify(obj));
    alert("Cadastro realizado com sucesso.");
    window.location.href = "./tela-login.html";
  } else {
    alert("Verifique se os campos estão preenchidos e tente novamente.");
  }
}

let usuarioLogin = document.querySelector("#userNameLogin");
let senhaLogin = document.querySelector("#senhaLogin");

function login() {
  let dadosLocalStorage = JSON.parse(localStorage.getItem("cadastro"));
  if (
    dadosLocalStorage.usuario == usuarioLogin.value &&
    dadosLocalStorage.senha == senhaLogin.value
  ) {
    window.location.href = "./tela-personalizar.html";
  } else {
    alert("Dados invalidos, tente novamente.");
  }
}

function novoUsuario() {
  window.location.href = "./tela-cadastro.html";
}

function novoEvento() {
  window.location.href = "./novo-evento.html";
}

function prosseguir() {
  let perso = {
    sexo: sexo.value,
    altura: altura.value,
    peso: peso.value,
    dataDeNascimento: dataDeNascimento.value,
  };
  if (perso.sexo && perso.altura && perso.dataDeNascimento && perso.peso) {
    localStorage.setItem("dadospessoais", JSON.stringify(perso));
    alert("Bem vindo ao sistema.");
    window.location.href = "./tela-perfil.html";
  } else {
    alert("Preencha todos os campos necessários.");
  }
}

let divDadosPessoais = document.querySelector("#dadosPessoais");

function inserirDadosPessoais() {
  let dadosPessoais = JSON.parse(localStorage.getItem("dadospessoais"));

  divDadosPessoais.innerHTML = `
    <p>Sexo: ${dadosPessoais.sexo}</p>
    <p>Altura: ${dadosPessoais.altura}cm</p>
    <p>Peso: ${dadosPessoais.peso}kg</p>
    <p>Data de Nascimento: ${dadosPessoais.dataDeNascimento}</p>
  `;
}

inserirDadosPessoais();

let listaEventos = document.querySelector("#listaEventos");

var lista = JSON.parse(localStorage.getItem("curtidos"));

function getEventos() {
  
  lista.forEach((evento) => {

    let div = document.createElement("div");

    div.innerHTML = `
    <div class="card" style="width: 15rem; margin-bottom: 12px;">
    <div class="card-body">
        <p>Nome: ${evento.nome}</p>
        <p>Local: ${evento.logradouro} ${evento.endereco}, nº ${evento.enderecoN} - </p>
        <p>Horário: ${evento.horario}</p>
        <p>Data: ${evento.data}</p>
        <p>Tipo de Atividade: ${evento.atividade}</p>
        <p>Dificuldade: ${evento.dificuldade}</p>
        <p>Descrição: ${evento.descricao}</p>

    </div>
</div>
    `;
    listaEventos.appendChild(div);
  });
}

getEventos();
