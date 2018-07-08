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
//color radio buttom\
var preview = document.querySelector('.preview');
var stateColor;
var catchStateFirstColor = document.querySelector('#form__subtitle__first-color');
var catchStateSecondColor = document.querySelector('#form__subtitle__second-color');
var catchStateThirdColor = document.querySelector('#form__subtitle__third-color');
function CheckStateFirstColor () {
  var state = catchStateFirstColor.checked;
  if (state === true) {
    preview.classList.remove('redTarget', 'greyTarget');
    preview.classList.add('greenTarget');
  }
}

function CheckStateSecondColor () {
  var state = catchStateSecondColor.checked;
  if (state === true) {
    preview.classList.remove('greenTarget', 'greyTarget');
    preview.classList.add(catchStateSecondColor.value);
  }
}
function CheckStateThirdColor () {
  var state = catchStateThirdColor.checked;
  if (state === true) {
    preview.classList.remove('redTarget', 'greyTarget');
    preview.classList.add('greyTarget');
  }
}
catchStateFirstColor.addEventListener('click', CheckStateFirstColor );
catchStateSecondColor.addEventListener('click', CheckStateSecondColor );
catchStateThirdColor.addEventListener('click', CheckStateThirdColor );

//font radio buttom

var state;
var catchStateFirstFont = document.querySelector('#form__subtitle__first-font');
var catchStateSecondFont = document.querySelector('#form__subtitle__second-font');
var catchStateThirdFont = document.querySelector('#form__subtitle__third-font');
function CheckStateFirstFont () {
    var state = catchStateFirstFont.checked;
    if (state === true) {
      preview.classList.remove('comicFont', 'montFont');
      preview.classList.add('ubuntuFont');
    }
}
function CheckStateSecondFont () {
  var state = catchStateSecondFont.checked;
  if (state === true) {
    preview.classList.remove('ubuntuFont', 'montFont');
    preview.classList.add('comicFont');
  }
}
function CheckStateThirdFont () {
  var state = catchStateThirdFont.checked;
  if (state === true) {
    preview.classList.remove('comicFont', 'ubuntuFont');
    preview.classList.add('montFont');
  }
}

catchStateFirstFont.addEventListener('click', CheckStateFirstFont );
catchStateSecondFont.addEventListener('click', CheckStateSecondFont );
catchStateThirdFont.addEventListener('click', CheckStateThirdFont );

/// CODIGO SKILLS //

var button = document.querySelector('.button');
var divMadre = document.getElementById('mama');
var arraySkills = ['html', 'sass', 'css', 'JS'];
var selectSkills;
var contadorClases = 1;
var container;
var buttonRemove;

function eliminaUltimoDiv() {

  if (contadorClases > 2) {
    var k = event.currentTarget.parentElement;
    k.parentElement.removeChild(k);
    button.classList.remove('button-empty'); //Quita la clase Hidden si hay menos de 3 opciones para que aparezca el +
    contadorClases--;
  }else {
    alert ("Tiene que introducir alguna habilidad");
  }
}

function createRemoveButton() {
  buttonRemove = document.createElement('button');
  buttonRemove.setAttribute("type","button");
  var insertMinus = document.createTextNode('-');
  buttonRemove.appendChild(insertMinus);
  container.appendChild(buttonRemove);
  buttonRemove.classList.add('buttonRemove');
  buttonRemove.addEventListener('click', eliminaUltimoDiv);

}

function changeSkills() {
  //creo una etiqueta select//
  selectSkills = document.createElement('select');
  selectSkills.classList.add("form__select");
  container.appendChild(selectSkills);

  //bucle para rellenar el select con tantos options como colores haya en el arrayColors//
  for (var i = 0; i < arraySkills.length; i++) {
    //creamos el elemento option//
    var option = document.createElement('option');
    //creamos el texto de dentro del option, en este caso lo rellenamos con los strings que hay en arraySkills//
    var insertSkillToOption = document.createTextNode(arraySkills[i]);
    //Metemos los Strings dentro de los options//
    option.appendChild(insertSkillToOption);
    // metemoslos options dentro de los select//
    selectSkills.appendChild(option);
  }
}

function createDiv() {

  if (contadorClases < 3) {
    //creo un div//
    container = document.createElement('div');
    container.classList.add('container');
    divMadre.appendChild(container);
    changeSkills();
    createRemoveButton();
    contadorClases++;
  } else if (contadorClases === 3) {
    button.classList.add('button-empty');

    container = document.createElement('div');
    container.classList.add('container');
    divMadre.appendChild(container);
    changeSkills();
    createRemoveButton();
    contadorClases++;
  }else {
    alert ("Tiene que introducir alguna habilidad");
  }
}

createDiv();
button.addEventListener('click', createDiv);
