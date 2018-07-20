'use strict';


//form diseña
const radio = document.querySelector("form__subtitle__first-color");
const arrayForm = document.querySelectorAll(".form__input");

const saveLocalStore = (key, value) => {
  const objetoResetInit = JSON.parse(localStorage.getItem("objeto-update"));
  objetoResetInit[key] = value;
  localStorage.setItem("objeto-update", JSON.stringify(objetoResetInit));
}

const writeData = event => {
  const campoModificado = event.currentTarget;
  saveLocalStore(campoModificado.name, campoModificado.value);
    if(campoModificado.classList.contains("form__input") && !campoModificado.classList.contains("inputhref")){
     const elementInCard = document.querySelector(`.local-- ${campoModificado.name}`);
      elementInCard.innerHTML = campoModificado.value;
    } else if(campoModificado.classList.contains("inputhref")) {
      const hrefelement = document.querySelector(`. ${campoModificado.name} _button`);
      if(campoModificado.name === "email") {
        hrefelement.href = `mailto: ${campoModificado.value}`;
      } else if(campoModificado.name === "phone"){
        hrefelement.href = `tel: ${campoModificado.value}`;
      } else if(campoModificado.name === "linkedin"){
        hrefelement.href = `https://www.linkedin.com/in/ ${campoModificado.value}`;
      } else {
        hrefelement.href = `https://github.com/ ${campoModificado.value}`;
      }
    }
}


for(let a = 0; a < arrayForm.length; a++){
  arrayForm[a].addEventListener("keyup", writeData)
}


//COLAPSABLES//
const colapsables = document.querySelectorAll('.form__fill');
const tituloColapsable = document.querySelectorAll('.colapsable-titulo');

const cerrarOtrosColapsables = turnArrow => {
  for (let i = 0; i < colapsables.length; i++) {
    colapsables[i].classList.remove('colapsable--visible');
    turnArrow[i].classList.remove('arrow-down');
  }
}

const actualizarColapsable = event => {
  //cogemos todas flechas, esto nos devuelve el grupo de flechas como un array
  const turnArrow = document.querySelectorAll('.turn-arrow');
  const contenedor = event.currentTarget.parentElement;
  //en el html ponemos un data-donde a todos los elementos suceptibles de ser clikados, y recogemos el valor del data donde. los valores del data donde van a hacer match con los valores del array
  const clikedID = contenedor.getAttribute('data-donde');
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
for (let i = 0; i < tituloColapsable.length; i++) {
  tituloColapsable[i].addEventListener('click', actualizarColapsable);
}

//color radio buttom\
const preview = document.querySelector('.preview');
const colorsP = document.querySelectorAll('.radio-color');
//una clase -try- para dominarlos a todos

const changeColors = event => {
  const guiltyElement = event.currentTarget;
  const targetID = guiltyElement.getAttribute('data-donde');
  if (guiltyElement.checked === true) {
    preview.classList.remove('greenTarget', 'greyTarget','redTarget');
    preview.classList.add(targetID);
  }
}

for (let i = 0; i < colorsP.length; i++) {
  colorsP[i].addEventListener('click', changeColors);
}

//font radio buttom

let state;
const fontsP = document.querySelectorAll('.radio-font');
//una clase -radio-font- para dominarlos a todos
const changeFonts = event => {
  const guiltyElement = event.currentTarget;
  const state = guiltyElement.checked;
  const targetID = guiltyElement.getAttribute('data-donde');
  if (state === true) {
    preview.classList.remove('comicFont', 'montFont','ubuntuFont');
    preview.classList.add(targetID);
  }

}
for (let i = 0; i < fontsP.length; i++) {
  fontsP[i].addEventListener('click', changeFonts );
}
