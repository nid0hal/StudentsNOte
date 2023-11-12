// Recuperation les valeur des champsde formaulaire 
const fullName = document.querySelector('.fullName');
const dateOfBirth = document.querySelector('.dateOfBirth');
const gender = document.querySelector('select[name="gender"]');
const task1 = document.querySelector('.task1');
const task2 = document.querySelector('.task2');
const task3 = document.querySelector('.task3');


// Recupérer les bouttons
const result = document.querySelector('.result');
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');

//Validation Rules Full Name  

function validateFullName(fullName) {
    if (!fullName) {
        return " Full name is required.";

    }
}




//  JS SELECTOR : 
//     1- By balise Name 
//     2- By Class Name
//     3- By IdSS