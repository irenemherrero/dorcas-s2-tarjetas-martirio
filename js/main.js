'use strict';

// CODIGO DE RECOGIDA DE DATOS DEL FORMULARIO //

// JS PARA recoger datos //

var form_email;
var form_tfn;
var form_lk;
var form_gh;

function changeCard() {
  // cambio el enlace del email de la vista previa //

  var j = document.querySelector('.email_button');
  j.href = 'mailto:' + form_email;

  // cambio el enlace de telefono //

  var m = document.querySelector('.tfn_button');
  m.href = 'tel:' + form_tfn;


  // cambio el enlace de linkedin de la vista previa //

  var z = document.querySelector('.linkedin_button');
  z.href = form_lk;

  // cambio el enlace de github de la vista previa //

  var w = document.querySelector('.github_button');
  w.href = form_gh;
}


function saveData() {

  // guardo email //
  var catch_email = document.querySelector('#email');

  form_email = catch_email.value;



  // guardo telefono //
  var catch_tfn = document.querySelector('#telefono');

  form_tfn = catch_tfn.value;



  // guardo linkedin //
  var catch_lk = document.querySelector('#linkedin');

  form_lk = catch_lk.value;


  // guardo github //
  var catch_gh = document.querySelector('#github');

  form_gh = catch_gh.value;


  changeCard();
}



var create_card_button = document.querySelector(".submit");
create_card_button.addEventListener('click', saveData);

//form diseña
var radio = document.querySelector("form__subtitle__first-color");

var inputNombre = document.querySelector(".form__input--nombre");
var inputPuesto = document.querySelector(".form__input--puesto");

function writeData(event) {
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
  //cogemos todas flechas, esto nos devuelve el grupo de flechas como un array
  var turnArrow = document.querySelectorAll('.turn-arrow');
  var contenedor = event.currentTarget.parentElement;
  //en el html ponemos un data-donde a todos los elementos suceptibles de ser clikados, y recogemos el valor del data donde. los valores del data donde van a hacer match con los valores del array
  var clikedID = contenedor.getAttribute('data-donde');
  if (contenedor.classList.contains('colapsable--visible')) {
    contenedor.classList.remove('colapsable--visible');
    turnArrow[clikedID].classList.remove('arrow-down');
  } else {
    contenedor.classList.add('colapsable--visible');
    turnArrow[clikedID].classList.add('arrow-down');
    }
  }
//cogemos la flecha cuya posicion en el array sea igual al data-donde del elemento clikado y le quitamos y le ponemos la clase que la hace girar.
for (var i = 0; i < tituloColapsable.length; i++) {
  tituloColapsable[i].addEventListener('click', actualizarColapsable);
}

//color radio buttom\
var preview = document.querySelector('.preview');
var stateColor;
var catchStateFirstColor = document.querySelector('#form__subtitle__first-color');
var catchStateSecondColor = document.querySelector('#form__subtitle__second-color');
var catchStateThirdColor = document.querySelector('#form__subtitle__third-color');

function CheckStateFirstColor() {
  var state = catchStateFirstColor.checked;
  if (state === true) {
    preview.classList.remove('redTarget', 'greyTarget');
    preview.classList.add('greenTarget');
  }
}

function CheckStateSecondColor() {
  var state = catchStateSecondColor.checked;
  if (state === true) {
    preview.classList.remove('greenTarget', 'greyTarget');
    preview.classList.add(catchStateSecondColor.value);
  }
}

function CheckStateThirdColor() {
  var state = catchStateThirdColor.checked;
  if (state === true) {
    preview.classList.remove('redTarget', 'greyTarget');
    preview.classList.add('greyTarget');
  }
}
catchStateFirstColor.addEventListener('click', CheckStateFirstColor);
catchStateSecondColor.addEventListener('click', CheckStateSecondColor);
catchStateThirdColor.addEventListener('click', CheckStateThirdColor);

//font radio buttom

var state;
var catchStateFirstFont = document.querySelector('#form__subtitle__first-font');
var catchStateSecondFont = document.querySelector('#form__subtitle__second-font');
var catchStateThirdFont = document.querySelector('#form__subtitle__third-font');

function CheckStateFirstFont() {
  var state = catchStateFirstFont.checked;
  if (state === true) {
    preview.classList.remove('comicFont', 'montFont');
    preview.classList.add('ubuntuFont');
  }
}

function CheckStateSecondFont() {
  var state = catchStateSecondFont.checked;
  if (state === true) {
    preview.classList.remove('ubuntuFont', 'montFont');
    preview.classList.add('comicFont');
  }
}

function CheckStateThirdFont() {
  var state = catchStateThirdFont.checked;
  if (state === true) {
    preview.classList.remove('comicFont', 'ubuntuFont');
    preview.classList.add('montFont');
  }
}

catchStateFirstFont.addEventListener('click', CheckStateFirstFont);
catchStateSecondFont.addEventListener('click', CheckStateSecondFont);
catchStateThirdFont.addEventListener('click', CheckStateThirdFont);
