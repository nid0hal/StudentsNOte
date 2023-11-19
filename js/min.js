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
    // Check If the full name is required. 
    if (!fullName) {
        return " Full name is required.";

    }

    // Check the legth of the Full Name. 
    if (fullName.length < 3 || fullName.length > 20) {
        return " Full name must be between 3 and 20 characters long. ";
    }

    // If the format of the full name.
    if (!/^[a-zA-Z ]+$/.test(fullName)) {
        return " Full name must contain only letters and spaces."
    }

    // If the Full name passes all of the validation rules, return null.
    return null;
}

function validateDate(date) {
    //check if the required 
    if (!date) {
        return "Date is required,";
    }

    // Check the format of the date 
    if (!/^\d{4}-\d{2}-\{2}$/.test(date)) {
        return "Date must be in the format YYYY-MM-DD";

    }

    // Check the range of the date.
    const today = new Date();
    const minDate = new Date(todaygetFullYear(), today.getMonth().today.getDate());
    const maxDate = new Date(todaygetFullYear() + 1, today.getMonth().today.getDate());

    if (date < minDate || date maxDate) {
        return " Date must be btween today and one Year from Today. ";


    }

    // if the date passes all of the validation rules, return null.
    return null;


}


function validateMarksText(text) {
    // CHeck if the text is required 

    if (!text) {
        return " Marks text is required";
    }

    // Check the format of the text.
    if (!/[0-9]+(\.[0-9]+)?$/.test(text)) {
        return "Marks text must be a number or a percentage.";

    }

    //Check the range of the text
    const minMark = 0;
    const maxMarks = 20;
    if (text < minMark || text > maxMarks) {
        return " Marks text must be between 0 and 100.";

    }

    //if the text passes all of the validation rules. return null.
    return null;

}


//function caluler

submit.addEventListener('click', (event) => {
    console.log(gender.value)
    if (validateFullName(fullName.value) !== null) {
        alert(validateFullName(fullName.value))
        return
    }

    if (validateFullName(dateOfBirth.value) !== null) {
        alert(validateFullName(dateOfBirth.value))
        return
    }

    if (validateFullName(gender.value) !== null) {
        alert(validateFullName(gender.value))
        return
    }

    if (validateFullName(task1.value) !== null) {
        alert(validateFullName(task1.value))
        return
    }

    if (validateFullName(task2.value) !== null) {
        alert(validateFullName(task2.value))
        return
    }

    if (validateFullName(task3.value) !== null) {
        alert(validateFullName(task3.value))
        return
    }

    //calculer le resultat




})


//  JS SELECTOR : 
//     1- By balise Name 
//     2- By Class Name
//     3- By IdSS