// jQuery datepicker: Selecionar data a partir de um calendário
$( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true,
      minDate: 0,
      showOtherMonths: true,
      dateFormat: "dd/mm/yy",
    });
  } );

  function MenuAmigos(opcoes){
    $(opcoes).children().toggleClass("block");
  }

  function botaoDesfazer(){
    $("#campos").hide();
    $("#campoDesfeito").addClass("block");
  }

  function botaoFechar(){
    $("#modal").hide();
  }

  function abrirModal(){
    $("#modal").show();
  }

