
$('.btn-block').click(function(){
  var current_location = window.location.pathname;
  var event;

  if(current_location == "/preparatoria/index.php") {
    event = "preparatoria";
  }

  if(current_location == "/licenciaturas-ingenierias/") {
    event = "licenciaturas-ingenierias";
  }
  if(current_location == "/licenciaturas-ejecutivas-uvm/") {
    event = "licenciaturas-ejecutivas-uvm";
  }
  if(current_location == "/maestrias/") {
    event = "posgrados";
  }
  if(current_location == "/instituto-profesional/") {
    event = "tecnico profesional";
  }

  console.log(event);
});
