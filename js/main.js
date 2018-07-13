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
  console.log(form_email);



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

var colapsables = document.querySelectorAll('.form__fill');
var tituloColapsable = document.querySelectorAll('.colapsable-titulo');


function cerrarOtrosColapsables(turnArrow){
  for(var i = 0; i < colapsables.length; i++){
    colapsables[i].classList.remove('colapsable--visible');
    turnArrow[i].classList.remove('arrow-down');
  }
}
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
    cerrarOtrosColapsables(turnArrow);
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


