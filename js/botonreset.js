'use strict';


var botonReset = document.querySelector(".button-reset__title");


//reset target
function callLocalStore() {
    var objetoReset = JSON.parse(localStorage.getItem("objeto-reset"));
    var imagePreviewReset = document.querySelector('.changeImagePreview');
    var profileImage = document.querySelector('.profile-image__item');
    profileImage.src = objetoReset.photo;
    imagePreview.src = objetoReset.photo;
    for(var i in objetoReset){
       var classReset= document.querySelector(".local--" + i);
        var inputReset= document.querySelector(".local--input--" + i);
       if (i !== "palette" && i !== "typography" && i !== "photo"){
       console.log(i)
     inputReset.value = "";}
       
    if(classReset.classList.contains('local--photo')){
        classReset.src = objetoReset[i];
        
    }
    else if (classReset.classList.contains('local--email')){
        classReset.href = 'mailto:' + objetoReset[i];
        
    }
    else if (classReset.classList.contains('local--phone')){
        classReset.href = 'tel:' + objetoReset[i];
        
    }
    else if (classReset.classList.contains('local--linkedin')){
        classReset.href =  objetoReset[i];
        
    }
    else if (classReset.classList.contains('local--github')){
        classReset.href =  objetoReset[i];
        
    }
    else if (classReset.classList.contains('local--palette')){
         var resetColorP = document.querySelectorAll('.radio-color');
        classReset.value =  objetoReset[i];
        var botonNumberC = classReset.value;
        resetColorP[botonNumberC].checked = false;
        preview.classList.remove('redTarget', 'greyTarget');
        preview.classList.add('greenTarget');
        var buttonDefaultColor = document.getElementById('form__subtitle__first-color');
        buttonDefaultColor.checked = true; 
        
    }
    else if (classReset.classList.contains('local--typography')){
        var resetFotnP = document.querySelectorAll('.radio-font');
        classReset.value =  objetoReset[i];
        var botonNumber = classReset.value;
        resetFotnP[botonNumber].checked = false;
        preview.classList.remove('montFont','ubuntuFont');
        preview.classList.add('comicFont');
        var buttonDefault = document.getElementById('form__subtitle__second-font');
        buttonDefault.checked = true;
    }
    
        else {
        classReset.innerHTML = objetoReset[i];
     } 
    }
   
}


botonReset.addEventListener("click", callLocalStore)

function sendObjectReset() {
    var objetoReset = {
        "name" : "Martirio",
        "job": "Reina de la canción",
         "phone": "982938437",
         "email": "reinadelacopla@ole.es",
         "linkedin": "juanita.reina",
         "github": "juanita-reina",
         "palette": "1",
         "typography": "2",
        "photo": "../images/martirio.jpg",
        //"skills": ["HTML", "Sass", "JavaScript"]
      };
localStorage.setItem("objeto-reset", JSON.stringify(objetoReset));

if (localStorage.getItem("objeto-update")=== null){
    localStorage.setItem("objeto-update", JSON.stringify(objetoReset));
}
}
sendObjectReset();

