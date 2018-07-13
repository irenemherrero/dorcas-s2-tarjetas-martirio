'use strict';

var submitButton = document.querySelector('#submit');
var responseURL = document.querySelector('.response');
var form = document.querySelector('form');
var fr = new FileReader();

submitButton.addEventListener('click', loadPhoto);

function sendData() {
  var inputs = Array.from(form.elements);
  console.log(inputs);
  var json = getJSONFromInputs(inputs);
  json.skills = [];
  json.photo = fr.result;
  console.log(json);
  sendRequest(json);
}

function loadPhoto() {

  var myFile = document.querySelector('#img-selector').files[0];
  fr.addEventListener('load', sendData);
  fr.readAsDataURL(myFile);
}

// function getJSONFromInputs(inputs) {
//   return inputs.reduce(function (acc, val) {
//     if (val.nodeName !== 'BUTTON' || val.nodeName !== 'FIELDSET') {
//       acc[val.name] = val.value;
//     }
//     return acc;
//   }, {});
// }

function getJSONFromInputs(inputs){
  return inputs.reduce(function (acc, val) {
    if(val.nodeName !== 'BUTTON')
      acc[val.name] = val.value;
      console.log(val.nodeName);
    return acc;
  }, {})
}

// function sendRequest(json) {
//   fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
//       method: 'POST',
//       body: JSON.stringify(json),
//       headers: {
//         'content-type': 'application/json'
//       },
//     })
//     .then(function (resp) {
//       return resp.json();
//     })
//     .then(function (result) {
//       showURL(result);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// function showURL(result) {
//   if (result.success) {
//     responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
//   } else {
//     responseURL.innerHTML = 'ERROR:' + result.error;
//   }
// }
