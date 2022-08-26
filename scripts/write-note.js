if (localStorage.getItem('token') == null){
    alert("You must be logged in to access this page!");
    window.location.href = '../index.html';
}

if(localStorage.getItem('username') != null){
    document.querySelector('#welcome-msg').innerHTML = `Welcome, ${localStorage.getItem('username')}`;
}

function logout(){
    localStorage.removeItem('token');
    window.location.href = '../index.html';
}

function checkForExistingUserFolder(){
}

function persistNote(txt, user){ //tem que fazer verificação para todos os usuários
    let ativaAux = false;

    const note = {
        user,
        txt
    }

    if(localStorage.getItem('notes') === null){
        localStorage.setItem('notes', note.txt);
    }else{
        ativaAux = true;
    }

    if (ativaAux){
        const oldNotes = localStorage.getItem('username') + ": " + localStorage.getItem('notes');
        const currrentNotes = oldNotes + '\n' + localStorage.getItem('username') + ": " + note.txt;

        localStorage.setItem('notes', currrentNotes);
    }
}

function saveNote(){
    const txt = document.querySelector('#text').value;
    if(txt != ''){
        const user = localStorage.getItem('username');
        const txtSpace = document.createElement("li");
        
        txtSpace.innerHTML = txt; 
        document.getElementById('single-note').appendChild(txtSpace);

        persistNote(txt, user);
    }
}
function dashboard(){
    window.location.href = '../dashboard.html';
}