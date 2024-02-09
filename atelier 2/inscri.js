
function validerDateOfBirth() {
 var dateNaissance = document.getElementsByName('birth_date')[0].value;//on prend la date du form

 var dateNaissanceObj = new Date(dateNaissance)// Convertir la date de naissance en objet Date
 var dateAujourdhui = new Date(); //la date d'aujourd'hui
 if (dateNaissanceObj >= dateAujourdhui) {
     alert("La date de naissance doit être antérieure à la date d'aujourd'hui.");
 }
}
function validerFormulaire() {
    console.log("Validation du formulaire en cours...");
    // Valider chaque champ du formulaire
    var nom = document.getElementsByName('lastname')[0].value;
    var prenom = document.getElementsByName('firstname')[0].value;
    var telephone = document.getElementsByName('phone_number')[0].value;
    var dateNaissanceValide = validerDateOfBirth(); // Valider la date de naissance
    var motDePasse = document.getElementsByName('user_pwd')[0].value;
    var email = document.getElementsByName('user_mail')[0].value;
    console.log("Date de naissance valide :", dateNaissanceValide);
    // Vérifier si la date de naissance est invalide
    if (!dateNaissanceValide) {
        alert("La date de naissance est incorrecte.");
        return false; // Retourner false pour empêcher l'envoi du formulaire
    }

    // Vous pouvez ajouter d'autres validations ici...

    // Retourner true si le formulaire est valide, sinon false
    return true;
}
document.addEventListener('DOMContentLoaded', function() {
    var formulaire = document.getElementById('inscriptionForm');

    formulaire.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Valider chaque champ du formulaire
        var nomValide = validerNom();
        var prenomValide = validerPrenom();
        var telephoneValide = validerTelephone();
        var dateNaissanceValide = validerDateNaissance();
        var motDePasseValide = validerMotDePasse();
       // var emailValide = validerEmail();

        // Si tous les champs sont valides, soumettre le formulaire
        if (nomValide && prenomValide && telephoneValide && dateNaissanceValide && motDePasseValide ) {
            formulaire.submit();
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        var champEmail = document.getElementsByName('user_mail')[0];
    
        champEmail.addEventListener('keyup', function(event) {
            var email = champEmail.value.trim();
    
            // Expression régulière pour vérifier le format de l'e-mail
            var emailRegex = /^[a-zA-Z0-9._%+-]+@esprit\.tn$/;
    
            var isValidEmail = emailRegex.test(email);
    
            if (isValidEmail) {
                afficherMessageSucces(champEmail, "Correct");
            } else {
                afficherMessageErreur(champEmail, "L'e-mail doit avoir la forme .@esprit.tn.");
            }
        });
    });
    // Ajouter des événements input pour la validation en temps réel
    document.getElementsByName('lastname')[0].addEventListener('input', validerNom);
    document.getElementsByName('firstname')[0].addEventListener('input', validerPrenom);
    document.getElementsByName('phone_number')[0].addEventListener('input', validerTelephone);
    document.getElementsByName('birth_date')[0].addEventListener('input', validerDateNaissance);
    document.getElementsByName('user_pwd')[0].addEventListener('input', validerMotDePasse);
    document.getElementsByName('user_mail')[0].addEventListener('input', validerEmail);
});

function validerNom() {
    var champNom = document.getElementsByName('lastname')[0];
    var nom = champNom.value.trim();

    if (nom.length <1 || !/^[a-zA-Z]+$/.test(nom)) {
        afficherMessageErreur(champNom, "Veuillez entrer un nom valide (lettres uniquement)");
        return false;
    } else {
        afficherMessageSucces(champNom, "Correct");
        return true;
    }
}

function validerPrenom() {
    var champPrenom = document.getElementsByName('firstname')[0];
    var prenom = champPrenom.value.trim();

    if (prenom.length < 1 || !/^[a-zA-Z]+$/.test(prenom)) {
        afficherMessageErreur(champPrenom, "Veuillez entrer un prénom valide (lettres uniquement)");
        return false;
    } else {
        afficherMessageSucces(champPrenom, "Correct");
        return true;
    }
}
function validerEmail() {
    var champEmail = document.getElementsByName('user_mail')[0];
    var email = champEmail.value.trim();

    // Expression régulière pour vérifier le format de l'e-mail
    var emailRegex = /^[a-zA-Z0-9._%+-]+@esprit\.tn$/;

    if (!emailRegex.test(email)) {
        afficherMessageErreur(champEmail, "L'e-mail doit avoir la forme .@eprit.tn.");
        return false;
    } else {
        afficherMessageSucces(champEmail, "Correct");
        return true;
    }
}
function validerTelephone() {
    var champTelephone = document.getElementsByName('phone_number')[0];
    var telephone = champTelephone.value.trim();

    if (!/^\d{8}$/.test(telephone)) {
        afficherMessageErreur(champTelephone, "Veuillez entrer un numéro de téléphone valide (8 chiffres)");
        return false;
    } else {
        afficherMessageSucces(champTelephone, "Correct");
        return true;
    }
}

function validerDateNaissance() {
    var champDateNaissance = document.getElementsByName('birth_date')[0];
    var dateNaissance = new Date(champDateNaissance.value);

    if (isNaN(dateNaissance.getTime()) || dateNaissance >= new Date()) {
        afficherMessageErreur(champDateNaissance, "Veuillez entrer une date de naissance valide (antérieure à aujourd'hui)");
        return false;
    } else {
        afficherMessageSucces(champDateNaissance, "Correct");
        return true;
    }
}

function validerMotDePasse() {
    var champMotDePasse = document.getElementsByName('user_pwd')[0];
    var motDePasse = champMotDePasse.value.trim();

    if (motDePasse.length < 8 || !/[a-z]/.test(motDePasse) || !/[A-Z]/.test(motDePasse) || !/\d/.test(motDePasse)) {
        afficherMessageErreur(champMotDePasse, "Le mot de passe doit contenir au moins 8 caractères, incluant au moins un chiffre, une lettre minuscule et une lettre majuscule.");
        return false;
    } else {
        afficherMessageSucces(champMotDePasse, "Correct");
        return true;
    }
}

function afficherMessageErreur(champ, message) {
    var errorSpan = champ.parentElement.nextElementSibling.querySelector('.error');
    errorSpan.textContent = message;
    errorSpan.style.color = "red"; // Changer la couleur du texte en rouge
    champ.style.borderColor = "red";// Changer la couleur du cadre 
}

function afficherMessageSucces(champ, message) {
    var errorSpan = champ.parentElement.nextElementSibling.querySelector('.error');
    errorSpan.textContent = message;
    errorSpan.style.color = "green"; 
    champ.style.borderColor = "green";
}


