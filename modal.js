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

//#2 Validation des input saisis.

let myForm = document.getElementById('myForm');
let firstRegex = /^[a-zA-Z-\s]+$/; //accepte minuscule majuscule tiret et espaces
let lastRegex = /^[a-zA-Z-\s]+$/;
let mailRegex = /^[a-zA-Z][a-zA-Z\d-\.]*@[a-zA-Z]+\.[a-zA-Z]{2,3}$/; //\d = [0-9] \. = caractere "." += 1 ou plus / *= 0 ou plus
let gamesRegex = /^[0-99]$/;
let birthdateRegex = /^[1-31]\/[1-12]\/[1900-2050]$/;

myForm.addEventListener('submit', function(e) {
 
  /*check prénom*/
  let userFirst = document.getElementById("first"); //on récupère l'input que l'on veut checker

  if (userFirst.value.trim().length <2){   //fonction trim: pour supprimer les espaces de début et de fin
    let firstError = document.getElementById('firstError');
    firstError.innerHTML = "Veuillez saisir un prénom à 2 lettres minimum.";
    firstError.style.color = "red";
    e.preventDefault(); // si "" cad vide, entrée sera refusée au moment du submit 
  } else if (firstRegex.test(userFirst.value) == false) {
    let firstError = document.getElementById('error');
    firstError.innerHTML = "Le nom doit comporter des lettres, tiret uniquement.";
    firstError.style.color = "red";
    e.preventDefault(); // si "" cad vide, entrée sera refusée au moment du submit 
  } else {firstError.innerHTML = "";
  }

  /*check nom*/
  let userLast = document.getElementById("last"); 

  if (userLast.value.trim().length <2){   
    let firstError = document.getElementById('lastError');
    lastError.innerHTML = "Veuillez saisir un nom à 2 lettres minimum.";
    lastError.style.color = "red";
    e.preventDefault();  
  } else if (lastRegex.test(userLast.value) == false) {
    let lastError = document.getElementById('error');
    lastError.innerHTML = "Le nom doit comporter des lettres, tiret uniquement.";
    lastError.style.color = "red";
    e.preventDefault(); 
  }else {lastError.innerHTML = "";
  }
  
/*check email*/
let userMail = document.getElementById("email"); 

if (userMail.value.trim()== ""){   
  let mailError = document.getElementById('mailError');
  mailError.innerHTML = "Veuillez saisir une adresse mail.";
  mailError.style.color = "red";
  e.preventDefault(); 
} else if (mailRegex.test(userMail.value) == false) {
  let mailError = document.getElementById('mailError');
  mailError.innerHTML = "Veuillez indiquer une adresse mail valide.";
  mailError.style.color = "red";
  e.preventDefault(); 
} else {mailError.innerHTML = "";
}


/*check quantity games  */
let numberGames = document.getElementById("quantity"); 

if (numberGames.value.trim()== ""){   
  let gamesError = document.getElementById('gamesError');
  gamesError.innerHTML = "Veuillez saisir un nombre de 0 à 99.";
  gamesError.style.color = "red";
  e.preventDefault();  
} else if (gamesRegex.test(numberGames.value) == false) {
  let gamesError = document.getElementById('error');
  gamesError.innerHTML = "Veuillez sélectionner un nombre de 0 à 99.";
  gamesError.style.color = "red";
  e.preventDefault(); 
} else {gamesError.innerHTML = "";
}

/*check birthdate*/
let birthdate= document.getElementById("birthdate"); 

if (birthdate.value == ""){   
  let birthdateError = document.getElementById('birthdateError');
  birthdateError.innerHTML = "Veuillez saisir une date valide sous le format JJ/MM/AAAA.";
  birthdateError.style.color = "red";
  e.preventDefault();  
} else if (birthdateRegex.test(birthdate.value) == false) {
  let birthDate = document.getElementById('birthdateError');
  birthdateErrorr.innerHTML = "Veuillez saisir ou sélectionner une date sous le format JJ/MM/AAAA.";
  birthdateErrorr.style.color = "red";
  e.preventDefault(); 
} else {birthdateError.innerHTML = "";
}

}
)
