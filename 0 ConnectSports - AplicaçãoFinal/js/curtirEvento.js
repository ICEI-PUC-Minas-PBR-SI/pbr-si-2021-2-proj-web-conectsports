function curtirEvento(i) {

    let curtido = {

        id: db.data[i - 1].id,
        nome: db.data[i - 1].nome,
        atividade: db.data[i - 1].atividade,
        dificuldade: db.data[i - 1].dificuldade,
        data: db.data[i - 1].data,
        horario: db.data[i - 1].horario,
        logradouro: db.data[i - 1].logradouro,
        endereco: db.data[i - 1].endereco,
        enderecoN: db.data[i - 1].enderecoN,
        descricao: db.data[i - 1].descricao,
    }

    lista_eventos.push(curtido);

    localStorage.setItem("curtidos", JSON.stringify(lista_eventos));

    window.location.href = "./tela-perfil.html";
}
