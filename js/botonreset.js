'use strict';

var botonReset = document.querySelector(".button-reset__title");

function callLocalStore() {
    var objetoReset = JSON.parse(localStorage.getItem("objeto-reset"));
    for(var i in objetoReset){
       var classReset= document.querySelector(".local--" + i);
       console.log(" maria check", classReset);
    if(classReset.classList.contains('local--photo')){
        classReset.src = objetoReset[i];
    }
    else {
        classReset.innerHTML = objetoReset[i];
    }
    }
}

botonReset.addEventListener("click", callLocalStore)

function sendObjectReset() {
    var objetoReset = {
        "name" : "Juanita Reina",
        "job": "Reina de la canción",
        // "phone": "982938437",
        // "email": "reinadelacopla@ole.es",
        // "linkedin": "juanita.reina",
        // "github": "juanita-reina",
        // "palette": 1,
        // "typography": 2,
        "photo": "../images/martirio.jpg",
        // "skills": ["HTML", "Sass", "JavaScript"]
      };
localStorage.setItem("objeto-reset", JSON.stringify(objetoReset));
}
sendObjectReset();