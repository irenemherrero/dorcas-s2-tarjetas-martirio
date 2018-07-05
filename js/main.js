'use strict';

// CODIGO DE RECOGIDA DE DATOS DEL FORMULARIO //

// JS PARA recoger datos //

var form_email;
var form_tfn;
var form_lk;
var form_gh;

function changeCard () {
    // cambio el enlace del email de la vista previa //

    var j = document.querySelector('.email_button');
    j.href ='mailto:'+form_email;

    // cambio el enlace de telefono //

    var m = document.querySelector('.tfn_button');
    m.href ='tel:'+form_tfn;


    // cambio el enlace de linkedin de la vista previa //

    var z = document.querySelector('.linkedin_button');
    z.href = form_lk;

    // cambio el enlace de github de la vista previa //

    var w = document.querySelector('.github_button');
    w.href = form_gh;
}


function saveData () {

  // guardo email //
  var catch_email = document.querySelector('#email');

    form_email = catch_email.value;
    console.log(form_email);


  // guardo telefono //
  var catch_tfn = document.querySelector('#telefono');

    form_tfn = catch_tfn.value;
    console.log(form_tfn);


  // guardo linkedin //
  var catch_lk = document.querySelector('#linkedin');

    form_lk = catch_lk.value;
    console.log(form_lk);

  // guardo github //
  var catch_gh = document.querySelector('#github');

    form_gh = catch_gh.value;
    console.log(form_gh);

  changeCard();
}



var create_card_button = document.querySelector(".submit");
create_card_button.addEventListener('click', saveData);


//form diseña
var radio = document.querySelector("form__subtitle__first-color");

var inputNombre = document.querySelector(".form__input--nombre");
var inputPuesto = document.querySelector(".form__input--puesto");

function writeData(event){
  var campoModificado = event.currentTarget;
  var targetID = campoModificado.getAttribute("data-donde");
  document.querySelector("#" + targetID).innerHTML = campoModificado.value;
}

inputNombre.addEventListener("keyup", writeData);
inputPuesto.addEventListener("keyup", writeData);

//a parte de esto, modificar los data-id de los input y los id de los campos del preview de nombre y puesto

var colapsables = document.querySelectorAll('.colapsable');

var tituloColapsable = document.querySelectorAll('.titulo-colapsable');

function actualizarColapsable(event) {
  var contenedor = event.currentTarget.parentElement;
  
  if (contenedor.classList.contains('colapsable--visible')) {
    contenedor.classList.remove('colapsable--visible');  
  } else {
    cerrarColapsables();
    contenedor.classList.add('colapsable--visible');
  }
}

function cerrarColapsables() {
  for (var i = 0; i < colapsables.length; i++) {
    colapsables[i].classList.remove('colapsable--visible');
  }
}

for (var i = 0; i < tituloColapsable.length; i++) {
  tituloColapsable[i].addEventListener('click', actualizarColapsable);
}
