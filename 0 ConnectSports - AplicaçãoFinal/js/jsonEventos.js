
// Este evento salva as informações do formulário em Local Storage

window.onload = () => {
 
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


    localStorage.setItem("db_data", JSON.stringify(db));

    


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

formEvento.onsubmit = (eventoForm) => {

    eventoForm.preventDefault();

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