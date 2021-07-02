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
  // let birthdateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9]3[1-9]|4[1-9])$/;
  // let birthdateRegex = /^[1-31]\/[1-12]\/[1900-2050]$/;

  // on récupère l'input que l'on veut checker:
  let userFirst = document.getElementById("first");
  let userLast = document.getElementById("last");
  let userMail = document.getElementById("email");
  let numberGames = document.getElementById("quantity"); 
  let birthDate = new Date(document.getElementById("birthdate").value); 
  let cgv = document.getElementById("checkbox1"); 
  
  console.log(birthDate)

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


/*check birthdate*/ 

    if (isNaN(birthDate.getTime())) { // NaN: Not a Number =>date is not valid
      let birthdateError = document.getElementById('birthdateError');
      birthdateError.innerHTML = "Veuillez saisir une date valide.";
      birthdateError.style.color = "red";
      } else {
        const now=new Date();
      if (now.getTime()-birthDate.getTime()<18*31556952000){
      let birthdateError = document.getElementById('birthdateError');
      birthdateError.innerHTML = "Vous devez avoir plus de 18 ans.";
      birthdateError.style.color = "red";
      
      } else {
        let birthDateError = document.getElementById('birthdateError');
        birthDateError.innerHTML = "";
      
    }
  }

  /*check location*/ 

  if (!check()){
    let locationError = document.getElementById('locationError');
    locationError.innerHTML = "Vous devez choisir une location.";
    locationError.style.color = "red";
    
  } else {
    let locationError = document.getElementById('locationError');
    locationError.innerHTML = "";
  }

/*check Acceptation CGU*/

    if (!cgu.checked) {   /*attend true ou false donc pas besoin de mettre ==*/
      let cguError = document.getElementById('cguError');
      cguError.innerHTML = "Vous devez confirmer avoir lu et accepté les condition d'utilisation.";
      cguError.style.color = "red";
      
    } else {
      let cguError = document.getElementById('cguError');
      cguError.innerHTML = "";
    }
    
} 
)
  
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





  


//#4 Message de confirmation

// const formData = document.querySelectorAll(".formData");

// function validate(form){

//   if(!isValid) {
//         return confirm('Merci! votre réservation a bien été prise en compte.');
// }
// }

