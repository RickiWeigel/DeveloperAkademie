let titles = [];
let notes = [];

function render(){
    let note = document.getElementById('notes-section');
    note.innerHTML = '';

    for (let i = 0; i < titles.length; i++) {
        note.innerHTML +=`
        <div class="notes">
            <div class="notes-title"><span>${titles[i]}</span></div>
            <div class="notes-text"><span>${notes[i]}</span></div>
            <div class="notes-footer">
                <img src="./img/bearbeitung.png">
                <img onclick="deleteNote(${i})" src="./img/mulleimer.png" >
            </div>
        </div>
    `;
    }
}

function addNote(){
    let title = document.getElementById('title-input').value;
    let text = document.getElementById('text-input').value;
    text = text.replace(/\r?\n/g, '<br />'); //logt die zeilenumbrüche auch mit ein

    if(title.length && text.length){
        titles.push(title);
        notes.push(text);
    }else{
        alert('Fülle alle Felder ein!')
    }
    document.getElementById('title-input').value = '';
    document.getElementById('text-input').value = '';
    render();
    save()
}

function deleteNote(i){
    titles.splice(i, 1);
    notes.splice(i, 1);
    render();
    save()
}

function save(){
    let titlesAsText = JSON.stringify(titles);
    let notesAsText = JSON.stringify(notes);

    localStorage.setItem('titles', titlesAsText)
    localStorage.setItem('notes', notesAsText);
}


function load(){
    let titlesAsText = localStorage.getItem('titles');
    let notesAsText = localStorage.getItem('notes');

    
}
