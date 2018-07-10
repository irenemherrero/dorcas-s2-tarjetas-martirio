'use strict';


// CODIGO JS PARA AÑADIR IMAGEN

// No hacer caso a la línea del FileReader, como en el mago de oz con el tipo de la cortina :)
var fr = new FileReader();

// Caso a partir de aquí :)
var uploadBtn = document.querySelector('.action__upload-btn');

var fileField = document.querySelector('#img-selector');
var profileImage = document.querySelector('.profile-image__item');

var imagePreview = document.querySelector('.changeImagePreview');

function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.src = fr.result;
  imagePreview.src = fr.result;
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);


// aqui acaba el codigo JS para añadir imagen
