if (localStorage.getItem('token') == undefined){
    alert("You must be logged in to access this page!");
    window.location.href = '../index.html';
}

if(localStorage.getItem('username') != undefined){
    document.querySelector('#welcome-msg').innerHTML = `Welcome, ${localStorage.getItem('username')}`;
    document.querySelector('#secondary-msg').innerHTML = `All of your notes are here.`;
}

if(localStorage.getItem('notes') != undefined){
    const noteSpace = document.createElement("div");
    const username = localStorage.getItem('username');
    let txtContent = localStorage.getItem('notes').split('\n');

    const vet = [];

    for(let i of txtContent){
        if(i.startsWith(username)) //validando para apenas aquele usuario ver
            vet.push
            (`<p>
            <button id="delete-note" onclick="deleteNote()">delete</button>
            ${i.replace(`${username}:`, '')}
            </p>
            `);
    }
    noteSpace.innerHTML = vet.join('');

    
    document.getElementById('notes-list').appendChild(noteSpace);
}

function deleteNote(e){
    console.log(e)
}

function deleteEverything(){
    document.getElementById('notes-list').innerHTML = '';
    localStorage.removeItem('notes');
}

function logout(){
    localStorage.removeItem('token');
    window.location.href = '../index.html';
}

function newNote(){
    window.location.href = '../write-note.html';
}