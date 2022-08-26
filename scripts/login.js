function login(){
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let errorMsg = document.querySelector('#errorMsg');

    let usersList = [];

    let validUser = {
        name: '',
        user: '',
        password: ''
    }

    usersList = JSON.parse(localStorage.getItem('usersList'));

    usersList.forEach(e => {
         if(username.value == e.usernameVal && password.value == e.passwordVal){
            validUser = {
                name: e.nameVal,
                user: e.usernameVal,
                password: e.passwordVal
            } 
        }
    });

    if(username.value == validUser.user && password.value == validUser.password){
        
        const token = Math.random().toString(16).substring(2);
        const _username = validUser.user.toString();

        localStorage.setItem('token', token);
        localStorage.setItem('username', _username);

        window.location.href = '../dashboard.html'; 
    }
    else{
        username.setAttribute('style', 'color: red');
        password.setAttribute('style', 'color: red');
        errorMsg.setAttribute('style', 'display: block');
        errorMsg.innerHTML = "<strong>Error! Unknown username/password!</strong>";
        username.focus();
    }
}