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

/* close modal form*/

function closeModal(){
  modalbg.style.display = 'none'; 
  //modalbg: name previously given to the form container (see DOM elements)
  myForm.style.display = "block";
  document.getElementById("confirmation").style.display = "none";
}



const closeBtn = document.querySelectorAll(".close");
  closeBtn.forEach((btn) => btn.addEventListener('click', closeModal));
  //closeBtn, btn, closeModal: new names given to elements to create function



/*Function check radio buttons*/

function check(){
  let radio = document.getElementsByName('location');
  let result = false;

  for (let i = 0, len = radio.length; i < len; i++) {
    if (radio[i].checked) {
      result = true;  
    }
  }
  return result
  }


/*Check & validate user's inputs*/

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(e) { 

e.preventDefault(); // si "" cad vide ou si error, l'entrée sera refusée au moment du submit 

// To confirm what is valid in inputs fields:

  let firstRegex = /^[a-zA-Z-\s]+$/; //accepte minuscule majuscule tiret et espaces
  let lastRegex = /^[a-zA-Z-\s]+$/;
  let mailRegex = /^[a-zA-Z][a-zA-Z\d-\.]*@[a-zA-Z]+\.[a-zA-Z]{2,3}$/; //   (\d = [0-9]) (\. = caractere ".") (+= 1 ou plus) ( *= 0 ou plus)
  let gamesRegex = /^[0-99]$/;

  // To get the inputs that are to be checked:
  let userFirst = document.getElementById("first");
  let userLast = document.getElementById("last");
  let userMail = document.getElementById("email");
  let birthDate = new Date(document.getElementById("birthdate").value); 
  let numberGames = document.getElementById("quantity"); 
  let checkbox1 = document.getElementById("checkbox1"); 
  
  
  // To find out errors:
  let firstError = document.getElementById('firstError');
  let lastError = document.getElementById('lastError');
  let mailError = document.getElementById('mailError');
  let birthdateError = document.getElementById('birthdateError');
  let gamesError = document.getElementById('gamesError');
  let locationError = document.getElementById('locationError');
  
  
  // To consider that inputs are true by default
  let isSubmitValid = true;


  // lastError.innerHTML = ""; idem pour le reste
  // gamesError.innerHTML = "";
  locationError.innerHTML = "";
  // checkbox1Error.innerHTML = "";
  // birthDateError.innerHTML = "";


  /*check prénom*/
  
  if (userFirst.value.trim().length <2){   //fonction trim: pour supprimer les espaces de début et de fin
        isSubmitValid = false;
        showError(userFirst, firstError, "Veuillez saisir un prénom à 2 lettres minimum.");
  }
  else if (firstRegex.test(userFirst.value) == false) {
    showError(userFirst, firstError, "Le prénom doit comporter des lettres, tiret uniquement.");
    isSubmitValid = false;
  }  
  else{
    removeError(userFirst, firstError)
  }
  
  /*check nom*/

  if (userLast.value.trim().length <2){     
    showError(userLast, lastError, "Veuillez saisir un nom à 2 lettres minimum.");
    isSubmitValid = false;
  }
  else if (lastRegex.test(userLast.value) == false) {
    showError(userLast, lastError, "Le nom doit comporter des lettres, tiret uniquement.");
    isSubmitValid = false;
  }
  else{
    removeError(userLast, lastError)
  }

  /*check email*/

  if (userMail.value.trim()== ""){  
    showError(userMail, mailError, "Veuillez saisir une adresse mail.");
    isSubmitValid = false;
  } 
  else if (mailRegex.test(userMail.value.trim()) == false) {
    showError(userMail, mailError, "Veuillez indiquer une adresse mail valide.");
    isSubmitValid = false;
  } 
  else{
    removeError(userMail, mailError)
  }

  /*check birthdate*/ 

  if (isNaN(birthDate.getTime())) { // NaN: Not a Number =>date is not valid
    showError(birthdate, birthdateError, "Veuillez saisir une date valide.");
    isSubmitValid = false;
  } 
    
  else {   // check that user is over 18 years old
      const now=new Date();
    
    if (now.getTime()-birthdate.getTime()<18*31556952000){
      showError(birthdate, birthdateError, "Vous devez avoir plus de 18 ans.");
      isSubmitValid = false;
    } 
  else{
      removeError(birthdate, birthdateError)
  }
} 

  /*check quantity games*/

  if (numberGames.value.trim()== ""){     
    showError(numberGames, gamesError, "Veuillez saisir un nombre de 0 à 99.");
    isSubmitValid = false;
    
  } else if (gamesRegex.test(numberGames.value) == false) {
    showError(numberGames, gamesError, "Veuillez sélectionner un nombre de 0 à 99.");
    isSubmitValid = false;
  }  
  else{
    removeError(numberGames, gamesError)
  }
    
  /*check location*/ 

  if (!check()){
    locationError.innerHTML = "Vous devez sélectionner une ville.";
    locationError.style.color = "red";
    isSubmitValid = false;
  } 

/*check Acceptation CGU*/

    if (!checkbox1.checked) {   /*attend true ou false donc pas besoin de mettre ==*/
      showError(checkbox1, checkbox1Error, "Vous devez lire et accepter les conditions d'utilisation.");
      isSubmitValid = false;
    }

/* To send form with confirmation message*/
    
    if (isSubmitValid != false) {
      myForm.style.display = "none";
      document.getElementById("confirmation").style.display = "block";
    }

  } 
)

/**
 * Delete Error message
 * @param {*} input 
 * @param {*} error 
 */
function removeError(input, error){
  error.innerHTML = "";
  input.parentNode.removeAttribute("data-error-visible");
}

/**
 * Show Error message
 * @param {*} input 
 * @param {*} error 
 * @param {*} errorMessage 
 */
function showError(input, error, errorMessage){
  error.innerHTML = errorMessage;
  error.style.color = "red";
  input.parentNode.setAttribute("data-error-visible", "true");
}