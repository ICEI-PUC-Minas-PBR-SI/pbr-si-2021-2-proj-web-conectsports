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

  