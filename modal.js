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


//#2 Validation input saisis.

let myForm = document.getElementById('myForm');


myForm.addEventListener('submit', function(e) {
e.preventDefault(); // si vide ou false, entrée sera refusée au moment du submit A mettre juste après la fonction pour éviter de répéter 


let firstRegex = /^[a-zA-Z-\s]+$/; //accepte minuscules majuscules tirets et espaces only
let lastRegex = /^[a-zA-Z-\s]+$/;
let mailRegex = /^[a-zA-Z][a-zA-Z\d-\.]*@[a-zA-Z]+\.[a-zA-Z]{2,3}$/; //\d = [0-9] \. = caractere "." += 1 ou plus / *= 0 ou plus
let gamesRegex = /^[0-99]$/;

  /*check prénom*/
  let userFirst = document.getElementById("first"); //on récupère l'input que l'on veut checker

  if (userFirst.value.trim().length <2){   //fonction trim: pour supprimer les espaces de début et de fin
    let firstError = document.getElementById('firstError');
    firstError.innerHTML = "Veuillez saisir votre prénom (2 lettres minimum).";
    firstError.style.color = "red";
     
  } else if (firstRegex.test(userFirst.value) == false) {
    let firstError = document.getElementById('firstError');
    firstError.innerHTML = "Le nom doit comporter des lettres, tiret uniquement.";
    firstError.style.color = "red"; 
  } else {firstError.innerHTML = "";
  }

  /*check nom*/
  let userLast = document.getElementById("last"); 

  if (userLast.value.trim().length <2){   
    let firstError = document.getElementById('lastError');
    lastError.innerHTML = "Veuillez saisir votre nom (2 lettres minimum).";
    lastError.style.color = "red";
  } else if (lastRegex.test(userLast.value) == false) {
    let lastError = document.getElementById('lastError');
    lastError.innerHTML = "Le nom doit comporter des lettres, tiret uniquement.";
    lastError.style.color = "red";
  }else {lastError.innerHTML = "";
  }
  
/*check email*/
let userMail = document.getElementById("email"); 

if (userMail.value.trim() == ""){   
  let mailError = document.getElementById('mailError');
  mailError.innerHTML = "Veuillez saisir votre adresse mail.";
  mailError.style.color = "red";
} else if (mailRegex.test(userMail.value) == false) {
  let mailError = document.getElementById('mailError');
  mailError.innerHTML = "Veuillez indiquer une adresse mail valide.";
  mailError.style.color = "red";
} else {mailError.innerHTML = "";
}


/*check quantity games  */
let numberGames = document.getElementById("quantity"); 

if (numberGames.value.trim() == ""){   
  let gamesError = document.getElementById('gamesError');
  gamesError.innerHTML = "Veuillez indiquer votre nombre de participations aux tournois GameOn.";
  gamesError.style.color = "red";
} else if (gamesRegex.test(numberGames.value) == false) {
  let gamesError = document.getElementById('error');
  gamesError.innerHTML = "Veuillez saisir ou sélectionner un nombre de 0 à 99.";
  gamesError.style.color = "red";
} else {gamesError.innerHTML = "";
}


/*check birthdate*/

/*let birthDate = new Date(1900,0,25);

if (birthDate.value.trim() == ""){   
  let birthdateError = document.getElementById('birthdateError');
  birthdateError.innerHTML = "Veuillez indiquer votre date de naissance.";
  birthdateError.style.color = "red";
} else if (birhtDate.value == false) {
  let birthdateError = document.getElementById('error');
  birthdateError.innerHTML = "Veuillez saisir une date valide.";
  birthdateError.style.color = "red";
} else {birthdateError.innerHTML = "";
}
*/

//////////////////////////////////////////////////////////////

//#4 Message de confirmation

let form = document.getElementsByTagName("myForm")[0];
myorm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Merci! Votre réservation a bien été prise en compte.");
});


//////////////////////////////////////////////////////////////









//////////////////////////////////////////////////////////////
//TESTS
/*
let birthDate = document.getElementById('birthdate');

let annee = birthDate.value.substring(0,4);  /*  substring to isolate a part of the caracters // format YYYY-MM-DD => check caracter from index 0 à 4 excluded ie the first caracters that are the YYYY
annee=parseInt(annee,10);*/ /*convertir chaine caracteres en entier (10 pour dire qu'on est en décimal)*/

//////////////////////////////////////////////////////////////

// if (birthDate.value.trim() == ""){     
//   let birthdateError = document.getElementById('gamesError');
//   birthdateError.innerHTML = "Veuillez indiquer votre date de naissance.";
//   birthdateError.style.color = "red";
// } else if (annee<1900) {
//   let birthdateError = document.getElementById('error');
//   birthdateError.innerHTML = "Veuillez saisir une date valide.";
//   birthdateError.style.color = "red";
// } else {birthdateError.innerHTML = "";
// }





}
)


 


