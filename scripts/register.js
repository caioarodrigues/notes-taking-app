let name = document.querySelector('#name');
let validName = false;

let lastName = document.querySelector('#last-name');
let validLastName = false;

let email = document.querySelector('#email');
let validEmail = false;

let username = document.querySelector('#username');
let validUsername = false;

let password = document.querySelector('#password');
let validPassword = false;

let confirmPassword = document.querySelector('#confirm-password');
let validConfirmPassword = false;

let errorMsg = document.querySelector('#errorMsg');
let successMsg = document.querySelector('#successMsg');

name.addEventListener('keyup', () => {
    if(name.value.length < 3){
        name.setAttribute('style', 'color: red');
        validName = false;
    }
    else{ 
        name.setAttribute('style', 'color: green');
        validName = true;
    }
});

lastName.addEventListener('keyup', () => {
    if(lastName.value.length < 5){
        lastName.setAttribute('style', 'color: red');
        validLastName = false;
    }
    else{
        lastName.setAttribute('style', 'color: green');
        validLastName = true;
    }
});

email.addEventListener('keyup', () => {
    if(email.value.length < 5){
        email.setAttribute('style', 'color: red');
        validEmail = false;
    }
    else{
        email.setAttribute('style', 'color: green');
        validEmail = true;
    }
});

username.addEventListener('keyup', () => {
    if(username.value.length < 3){
        username.setAttribute('style', 'color: red');
        validUsername = false;
    }
    else{ 
        username.setAttribute('style', 'color: green');
        validUsername = true;
    }
});

password.addEventListener('keyup', () => {
    if(password.value.length < 8){
        password.setAttribute('style', 'color: red');
        validPassword = false;
    }
    else{
        password.setAttribute('style', 'color: green');
        validPassword = true;
    }
});

confirmPassword.addEventListener('keyup', () => {
    if(confirmPassword.value.length === password.value.length && confirmPassword.value.length >= 8)
        if(confirmPassword.value === password.value){
            confirmPassword.setAttribute('style', 'color: green');
            validConfirmPassword = true;
        }
    else{
        confirmPassword.setAttribute('style', 'color: red');
        validConfirmPassword = false;
    }
});

function register(){
    if (validConfirmPassword && validEmail && validLastName && validName && validPassword && validUsername){
        errorMsg.setAttribute('style', 'display: none');
        errorMsg.innerHTML = "";
        
        successMsg.setAttribute('style', 'display: block');
        successMsg.innerHTML = "Saving all the data!";

        let usersList = JSON.parse(localStorage.getItem('usersList') || '[]');

        usersList.push({
           nameVal: name.value,
           lastNameVal: lastName.value,
           emailVal: email.value,
           usernameVal: username.value,
           passwordVal: password.value 
        });

        localStorage.setItem('usersList', JSON.stringify(usersList));
        
        setTimeout(() => {
            window.location.href = '../login.html';
        }, 1200);
    }
    else{
        successMsg.setAttribute('style', 'display: none');
        successMsg.innerHTML = "";

        errorMsg.setAttribute('style', 'display: block');
        errorMsg.innerHTML = "Fill all the inputs correctly!";
    }
}