function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//////////////////////////////////////////////////////////////////////////////

//#1 - close modal form

const closeBtn = document.querySelectorAll(".close");
closeBtn.forEach((btn) => btn.addEventListener('click', closeModal));
function closeModal(){
  modalbg.style.display = 'none';  
}

//nota bene: 
//modalbg: name previously given to the form container
//closeBtn, btn, closeModal: new names given to elements to create function


//////////////////////////////////////////////////////////////////////////////

//#2

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(e) {

  e.preventDefault(); // si "" cad vide ou si error, l'entrée sera refusée au moment du submit 

  let firstRegex = /^[a-zA-Z-\s]+$/; //accepte minuscule majuscule tiret et espaces
  let lastRegex = /^[a-zA-Z-\s]+$/;
  let mailRegex = /^[a-zA-Z][a-zA-Z\d-\.]*@[a-zA-Z]+\.[a-zA-Z]{2,3}$/; //\d = [0-9] \. = caractere "." += 1 ou plus / *= 0 ou plus
  let gamesRegex = /^[0-99]$/;
  // let birthdateRegex = /^[1-31]\/[1-12]\/[1900-2050]$/;

  // on récupère l'input que l'on veut checker
  let userFirst = document.getElementById("first");
  let userLast = document.getElementById("last");
  let userMail = document.getElementById("email");
  let numberGames = document.getElementById("quantity"); 
  // let birthDate= document.getElementById("birthdate"); 

//   /*check prénom*/

  if (userFirst.value.trim().length <2){   //fonction trim: pour supprimer les espaces de début et de fin
    let firstError = document.getElementById('firstError');
    firstError.innerHTML = "Veuillez saisir un prénom à 2 lettres minimum.";
    firstError.style.color = "red";
    
  } else if (firstRegex.test(userFirst.value) == false) {
    let firstError = document.getElementById('firstError');
    firstError.innerHTML = "Le nom doit comporter des lettres, tiret uniquement.";
    firstError.style.color = "red";
    
  } else {firstError.innerHTML = "";
  }


  /*check nom*/

  if (userLast.value.trim().length <2){   
    let lastError = document.getElementById('lastError');
    lastError.innerHTML = "Veuillez saisir un nom à 2 lettres minimum.";
    lastError.style.color = "red";
    
  } else if (lastRegex.test(userLast.value) == false) {
    let lastError = document.getElementById('lastError');
    lastError.innerHTML = "Le nom doit comporter des lettres, tiret uniquement.";
    lastError.style.color = "red";
    
  }else {lastError.innerHTML = "";
  }

//   /*check email*/

  if (userMail.value.trim()== ""){   
  let mailError = document.getElementById('mailError');
  mailError.innerHTML = "Veuillez saisir une adresse mail.";
  mailError.style.color = "red";
  
  } else if (mailRegex.test(userMail.value) == false) {
  let mailError = document.getElementById('mailError');
  mailError.innerHTML = "Veuillez indiquer une adresse mail valide.";
  mailError.style.color = "red";

  } else {mailError.innerHTML = "";
  }

  /*check quantity games*/

  if (numberGames.value.trim()== ""){   
    let gamesError = document.getElementById('gamesError');
    gamesError.innerHTML = "Veuillez saisir un nombre de 0 à 99.";
    gamesError.style.color = "red";
    
    } else if (gamesRegex.test(numberGames.value) == false) {
    let gamesError = document.getElementById('gamesError');
    gamesError.innerHTML = "Veuillez sélectionner un nombre de 0 à 99.";
    gamesError.style.color = "red";
  
    } else {gamesError.innerHTML = "";
    }

  
//   /*check birthdate*/
//   let birthdate= document.getElementById("birthdate"); 

//   if (birthdate.value == ""){   
//   let birthdateError = document.getElementById('birthdateError');
//   birthdateError.innerHTML = "Veuillez saisir une date valide sous le format JJ/MM/AAAA.";
//   birthdateError.style.color = "red";
  
//   } else if (birthdateRegex.test(birthdate.value) == false) {
//   let birthDate = document.getElementById('birthdateError');
//   birthdateErrorr.innerHTML = "Veuillez saisir ou sélectionner une date sous le format JJ/MM/AAAA.";
//   birthdateErrorr.style.color = "red";

//   } else {birthdateError.innerHTML = "";
//   }


}
)


//////////////////////////////////////////////////////////////

//#4 Message de confirmation


// function validate(myForm){

//   if(valid) {
//         return confirm('Merci! votre réservation a bien été prise en compte.');
// }
// }