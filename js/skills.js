'use strict';

/// CODIGO SKILLS //
var tagsContainer = document.querySelector('.etiquetas-habilidades-container');
var button = document.querySelector('.button');
var divMadre = document.getElementById('mama');
var arraySkills = [];
var selectSkills;
var contadorClases = 1;
var container;
var buttonRemove;
var optionAsPlaceholderText = 'Elige habilidad';
var currentListOfSelects;
/////////////// FETCH PARA RECOGER LOS SKILLS DEL SERVIDOR /////////////////////////////

function searchArray() {
  fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {

      arraySkills = json.skills;
      arraySkills.push(optionAsPlaceholderText);
      arraySkills.reverse();
    });
}


/////////////// FIN FETCH PARA RECOGER LOS SKILLS DEL SERVIDOR /////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
//// CODIGO SKILLS //

function eliminaUltimoDiv() {

  if (contadorClases > 2) {
    var k = event.currentTarget.parentElement;
    k.parentElement.removeChild(k);
    button.classList.remove('hidden'); //Quita la clase Hidden si hay menos de 3 opciones para que aparezca el +
    contadorClases--;

    updateTagList();
  } else {
    alert("Tiene que introducir alguna habilidad");
  }
}

function createRemoveButton() {
  buttonRemove = document.createElement('button');
  buttonRemove.setAttribute("type", "button");
  var insertMinus = document.createElement("div");
  insertMinus.classList.add("content-button-habilities");
  var minus = document.createTextNode("-");
  insertMinus.appendChild(minus);
  buttonRemove.appendChild(insertMinus);
  container.appendChild(buttonRemove);
  buttonRemove.classList.add('buttonRemove');
  buttonRemove.addEventListener('click', eliminaUltimoDiv);
}

function changeSkills() {
  //creo una etiqueta select//
  selectSkills = document.createElement('select');
  selectSkills.setAttribute('name', 'hola');
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
    selectSkills.addEventListener('change', updateTagList);
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
    button.classList.add('hidden');

    container = document.createElement('div');
    container.classList.add('container');
    divMadre.appendChild(container);

    changeSkills();
    createRemoveButton();

    contadorClases++;
  } else {
    alert('Tiene que introducir alguna habilidad');
  }
}

searchArray();
button.addEventListener('click', createDiv);

////////////// AÑADIR A LA TARJETA ///////////////////


function updateTagList() {
  currentListOfSelects = document.querySelectorAll('.form__select');
  console.log(currentListOfSelects);
  tagsContainer.innerHTML = ''; //limpio los skills del preview

  for (var i = 0; i < currentListOfSelects.length; i++) {
    var currentSelect = currentListOfSelects[i];
    if (currentSelect.value !== optionAsPlaceholderText) {
      tagsContainer.innerHTML += '<li class="etiqueta-habilidad">' + currentSelect.value + '</li>';
    }
  }
  console.log(currentListOfSelects);
}

//////////////////////////////////////////////////////////////////////////////////////
////////// ENVIO AL SERVIDOR /////////////////////////////////////////////////////////

var submitButton = document.querySelector('#submit');
var responseURL = document.querySelector('.response');
var form = document.querySelector('form');
var fr = new FileReader();

submitButton.addEventListener('click', loadPhoto);

function sendData() {
  var inputs = Array.from(form.elements);
  var json = getJSONFromInputs(inputs);
  json.skills = [];
  console.log(json);
  for (var i = 0; i < currentListOfSelects.length; i++) {

    json.skills.push(currentListOfSelects[i].value);
  }

  json.photo = fr.result;
  sendRequest(json);
}

function loadPhoto() {

  var myFile = document.querySelector('#img-selector').files[0];
  fr.addEventListener('load', sendData);
  fr.readAsDataURL(myFile);
}

function getJSONFromInputs(inputs) {
  console.log(inputs);
  return inputs.reduce(function (acc, val) {
    console.log(val.nodeName);


    if (val.type==='radio' && val.checked===true) {
      acc[val.name] = val.value;
    }
    if ((val.nodeName !== 'BUTTON') && (val.nodeName !== 'FIELDSET') && (val.type!=='radio') ){
      acc[val.name] = val.value;
    }

    return acc;
  }, {});
}


function sendRequest(json) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  if (result.success) {
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}
