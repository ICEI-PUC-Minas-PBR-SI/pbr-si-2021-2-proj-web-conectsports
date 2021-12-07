// jQuery datepicker: Selecionar data a partir de um calendário
$(function () {
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: 0,
        showOtherMonths: true,
        dateFormat: "dd/mm/yy",
    });
});


// declara um conjunto inicial de dados
var db_iniciais = {
    "data": [
        {
            "id": 1,
            "nome": "Caminhada na Lagoa",
            "atividade": "Caminhada",
            "dificuldade": "Intermediário",
            "data": "01/12/2021",
            "horario": "19:00",
            "logradouro": "Av",
            "endereco": "Otacílio Negrão de Lima",
            "enderecoN": "450",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error debitis delectus officia libero adipisci.",
        },
        {
            "id": 2,
            "nome": "Corrida diária",
            "atividade": "Corrida",
            "dificuldade": "Intermediário",
            "data": "03/12/2021",
            "horario": "06:00",
            "logradouro": "Av",
            "endereco": "Otacílio Negrão de Lima",
            "enderecoN": "450",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error debitis delectus officia libero adipisci.",
        },
        {
            "id": 3,
            "nome": "Calistenia na Praça do Papa",
            "atividade": "Calistenia",
            "dificuldade": "Pro",
            "data": "01/12/2021",
            "horario": "20:00",
            "logradouro": "Praça",
            "endereco": "Governador Israel Pinheiro",
            "enderecoN": "0",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error debitis delectus officia libero adipisci.",
        },
        {
            "id": 4,
            "nome": "Volta de bike na Lagoa",
            "atividade": "Bicicleta",
            "dificuldade": "Intermediário",
            "data": "01/12/2021",
            "horario": "17:00",
            "logradouro": "Av",
            "endereco": "Otacílio Negrão de Lima",
            "enderecoN": "450",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error debitis delectus officia libero adipisci.",
        },
        {
            "id": 5,
            "nome": "Yoga para todos",
            "atividade": "Yoga",
            "dificuldade": "Iniciante",
            "data": "07/12/2021",
            "horario": "19:00",
            "logradouro": "Parque",
            "endereco": "Ecológico Alfredo Sabett",
            "enderecoN": "0",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error debitis delectus officia libero adipisci.",
        },
    ]
}


//Carregar dados iniciais
var db = JSON.parse(localStorage.getItem('db_data'))
if (!db) {
    db = db_iniciais;
}


var lista_eventos = JSON.parse(localStorage.getItem("curtidos"));
if (!lista_eventos) {
    lista_eventos = []
}

// Este evento salva as informações do formulário em Local Storage


window.onload = () => {
    
    localStorage.setItem("db_data", JSON.stringify(db));

    formEvento.onsubmit = (evento) => {

        evento.preventDefault();

        let novoID = db.data[db.data.length - 1].id + 1;

        let eventoInfo = {
            id: novoID,
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

        db.data.push(eventoInfo);
        localStorage.setItem('db_data', JSON.stringify(db))

        window.location.href = "eventos.html"
    }


/*
    function deleteEvento(id) {
        // Filtra o array removendo o elemento com o id passado
        db.data = db.data.filter(function (element) { return element.id != id });

        displayMessage("Evento removido com sucesso");

        // Atualiza os dados no Local Storage
        localStorage.setItem('db_data', JSON.stringify(db));
    }
*/
}


function curtirEvento(i) {

    let curtido = {
/*        nome: db.data[i-1].nome,
        tipoAtividade: db.data[i-1].atividade,
        dificuldade: db.data[i-1].dificuldade,
        data: db.data[i-1].data,
        horario: db.data[i-1].horario,
        logradouro: db.data[i-1].logradouro,
        endereco: db.data[i-1].endereco,
        numEndereco: db.data[i-1].enderecoN,
        descricao: db.data[i-1].descricao,*/
        id: db.data[i-1].id,
        nome: db.data[i - 1].nome,
        atividade: db.data[i-1].atividade,
        dificuldade: db.data[i-1].dificuldade,
        data: db.data[i-1].data,
        horario: db.data[i-1].horario,
        logradouro: db.data[i-1].logradouro,
        endereco: db.data[i-1].endereco,
        enderecoN: db.data[i-1].enderecoN,
        descricao: db.data[i-1].descricao,
    }

    lista_eventos.push(curtido);

    localStorage.setItem("curtidos", JSON.stringify(lista_eventos));

    window.location.href = "./tela-perfil.html";
}