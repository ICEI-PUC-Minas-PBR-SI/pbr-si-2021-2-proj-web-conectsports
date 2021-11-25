
// Este evento salva as informações do formulário em Local Storage
// Prevent default ativo, então a página não recarrega ou redireciona

window.onload = () => {
    formEvento.onsubmit = (evento) => {
        
        localStorage.setItem("nome", nome.value);
        localStorage.setItem("atividade", atividade.value);
        localStorage.setItem("dificuldade", dificuldade.value);
        localStorage.setItem("data", datepicker.value);
        localStorage.setItem("horario", horario.value);
        localStorage.setItem("logradouro", logradouro.value);
        localStorage.setItem("endereco", endereco.value);
        localStorage.setItem("enderecoN", enderecoN.value);
        localStorage.setItem("descricao", descricao.value);
        
        let eventoInfo = {
            nome: nome.value,
            atividade: atividade.value,
            dificuldade: dificuldade.value,
            data: datepicker.value,
            horario: horario.value,
            logradouro: logradouro.value,
            endereco: endereco.value,
            enderecoN: enderecoN.value,
            descricao: descricao.value,
        }
        localStorage.setItem("eventoInformacao", JSON.stringify(eventoInfo));

        let localDoEvento = {
            logradouro: logradouro.value,
            endereco: endereco.value,
            enderecoN: enderecoN.value,
        }
        localStorage.setItem("localDoEvento", JSON.stringify(localDoEvento));

        evento.preventDefault();
    }
   
}
function criarEvento(){
    window.location.href = "./tela-perfil.html"
}