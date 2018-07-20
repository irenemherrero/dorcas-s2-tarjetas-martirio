'use strict';

// CODIGO JS PARA AÑADIR IMAGEN

const fr = new FileReader();

const uploadBtn = document.querySelector('.action__upload-btn');

const fileField = document.querySelector('#img-selector');
const profileImage = document.querySelector('.profile-image__item');

const imagePreview = document.querySelector('.changeImagePreview');

const getImage = (e) => {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

const writeImage= () => {
  profileImage.src = fr.result;
  imagePreview.src = fr.result;
}

const fakeFileClick = () => {
  fileField.click();
}

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);


// aqui acaba el codigo JS para añadir imagen
