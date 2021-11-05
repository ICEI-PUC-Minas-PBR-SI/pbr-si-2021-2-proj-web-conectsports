function navigateCriarAtividades() {
  window.location.href = "cadastro.html";
}

function criaAtividade() {
  let nomeAtividade = document.querySelector("#nomeAtividade").value;
  let localAtividade = document.querySelector("#localAtividade").value;
  let horarioAtividade = document.querySelector("#horarioAtividade").value;
  let numeroPessoas = document.querySelector("#numeroPessoas").value;
  let objetivoAtividade = document.querySelector("#objetivoAtividade").value;

  let obj = {
    nome: nomeAtividade,
    local: localAtividade,
    horario: horarioAtividade,
    numeroPessoas: numeroPessoas,
    objetivo: objetivoAtividade,
  };

  var lista_atividades = JSON.parse(
    localStorage.getItem("lista-atividades") || "[]"
  );

  lista_atividades.push(obj);

  if (
    obj.nome &&
    obj.local &&
    obj.horario &&
    obj.numeroPessoas &&
    obj.objetivo
  ) {
    localStorage.setItem("lista-atividades", JSON.stringify(lista_atividades));
    window.location.href = "index.html";
  } else {
    alert("Digite todos os campos!");
  }
}
let containerAtividades = document.querySelector("#containerAtividades");

function atividades() {
  let buscarAtividadesStorage = JSON.parse(
    localStorage.getItem("lista-atividades")
  );
  buscarAtividadesStorage.forEach((atividade) => {
    let div = document.createElement("div");
    div.className = "card";
    div.style.width = "19rem";

    div.innerHTML = `
       <ul class="list-group list-group-flush">
           <li class="list-group-item"><strong>Nome da Atividade: </strong> ${atividade.nome}</li>
           <li class="list-group-item"><strong>Local: </strong>${atividade.local}</li>
           <li class="list-group-item"><strong>Horário: </strong>${atividade.horario}</li>
           <li class="list-group-item"><strong>Quantidade de Pessoas: </strong> ${atividade.numeroPessoas}</li>
           <li class="list-group-item"><strong>Objetivo: </strong> ${atividade.objetivo}</li>
       </ul>
   `;
    containerAtividades.appendChild(div);
  });
}

atividades();
