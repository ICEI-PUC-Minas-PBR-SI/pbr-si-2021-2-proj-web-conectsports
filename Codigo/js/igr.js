let nome = document.querySelector('#nome');
let usuario = document.querySelector('#usuario');
let senha = document.querySelector('#senha');
let email = document.querySelector('#email');

function cadastrar() {

  let obj = {
    nome: nome.value,
    usuario: usuario.value,
    senha: senha.value,
    email: email.value
  }

  if(obj.nome && obj.usuario && obj.senha && obj.email) {
    localStorage.setItem("cadastro", JSON.stringify(obj));
    alert("Cadastro realizado com sucesso.");
    window.location.href = "./login.html"
  } else {
    alert("Verifique se os campos estão preenchidos e tente novamente.");
  }
}

let usuarioLogin = document.querySelector('#userNameLogin');
let senhaLogin = document.querySelector('#senhaLogin');

function login() {
  let dadosLocalStorage = JSON.parse(localStorage.getItem("cadastro"));

  if(dadosLocalStorage.usuario == usuarioLogin.value && dadosLocalStorage.senha == senhaLogin.value) {
    alert("Bem vindo ao sistema.");
    window.location.href = ""
  } else {
    alert("Dados invalidos, tente novamente.")
  }
}
