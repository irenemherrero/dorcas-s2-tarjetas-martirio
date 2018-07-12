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
//turn arrows
var turnArrow = document.querySelectorAll('.turn-arrow');

function changeArrow(event) {
  var id = event.currentTarget.getAttribute('data-id');

  if (turnArrow[id].classList.contains('arrow-down')) {
    turnArrow[id].classList.remove('arrow-down');
  } else {

    turnArrow[id].classList.add('arrow-down');
  }
}

for (var i = 0; i < turnArrow.length; i++) {
  turnArrow[i].addEventListener('click', changeArrow);
}
// radio buttom\
var preview = document.querySelector('.preview');
var colorsP = document.querySelectorAll('.radio-color');
//una clase -try- para dominarlos a todos

function changeColors (event){
  var guiltyElement = event.currentTarget;
  var state = guiltyElement.checked;
  var targetID = guiltyElement.getAttribute('data-donde');
  if (state === true) {
    preview.classList.remove('greenTarget', 'greyTarget','redTarget');
    preview.classList.add(targetID);
  }
 
}
for (var i = 0; i < colorsP.length; i++) {
  colorsP[i].addEventListener('click', changeColors);
}

//font radio buttom

var state;
var fontsP = document.querySelectorAll('.radio-font');
//una clase -radio-font- para dominarlos a todos
function changeFonts (event){
  var guiltyElement = event.currentTarget;
  var state = guiltyElement.checked;
  var targetID = guiltyElement.getAttribute('data-donde');
  if (state === true) {
    preview.classList.remove('comicFont', 'montFont','ubuntuFont');
    preview.classList.add(targetID);
  }
 
}
for (var i = 0; i < fontsP.length; i++) {
  fontsP[i].addEventListener('click', changeFonts );
}


