'use strict';

// JS PARA recoger datos //
var form_name;
var form_job;
var form_email;
var form_tfn;
var form_lk;
var form_gh;



function changeCard () {
    // cambio el nombre en la vista previa //

    var y = document.querySelector('.name_line');
    y.innerHTML = form_name;

    // cambio el puesto en la vista previa //

    var x = document.querySelector('.profesion_line');
    x.innerHTML = form_job;

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
// guardo nombre //
  var catch_name = document.querySelector('#nombre');

    form_name = catch_name.value;
    console.log(form_name);

// guardo puesto //
var catch_job = document.querySelector('#puesto');

  form_job = catch_job.value;
  console.log(form_job);

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

//font radio buttom
var nameFontChange;
var secondNameFontChange;
var state;
var catchStateFirstFont = document.querySelector('#form__subtitle__first-font');
var catchStateSecondFont = document.querySelector('#form__subtitle__second-font');
var catchStateThirdFont = document.querySelector('#form__subtitle__third-font');
function CheckStateFirstFont () {
    var state = catchStateFirstFont.checked;
    if (state === true) {
      nameFontChange = document.querySelector('.name_line');
      secondNameFontChange = document.querySelector('.profesion_line');
      nameFontChange.style.fontFamily = 'Open Sans, sans-serif'; 
      secondNameFontChange.style.fontFamily = 'Open Sans, sans-serif'; 
    }
}
function CheckStateSecondFont () {
  var state = catchStateSecondFont.checked;
  if (state === true) {
    nameFontChange = document.querySelector('.name_line');
    secondNameFontChange = document.querySelector('.profesion_line');
    nameFontChange.style.fontFamily = 'Comic Sans MS, Chilanka'; 
    secondNameFontChange.style.fontFamily = 'Comic Sans MS, Chilanka'; 
  }
}
function CheckStateThirdFont () {
  var state = catchStateThirdFont.checked;
  if (state === true) {
    nameFontChange = document.querySelector('.name_line');
    secondNameFontChange = document.querySelector('.profesion_line');
    nameFontChange.style.fontFamily = 'Merriweather, serif'; 
    secondNameFontChange.style.fontFamily = 'Merriweather, serif'; 
  }
}

catchStateFirstFont.addEventListener('click', CheckStateFirstFont );
catchStateSecondFont.addEventListener('click', CheckStateSecondFont );
catchStateThirdFont.addEventListener('click', CheckStateThirdFont );