let titles = [];
let notes = [];

function render(){
    let note = document.getElementById('notes-section');
    note.innerHTML = '';

    for (let i = 0; i < titles.length; i++) {
            note.innerHTML +=`
        <div class="notes">
            <div class="notes-title">${titles[i]}</div>
            <div class="notes-text">${notes[i]}</div>
            <div class="notes-footer">
                <img src="./img/bearbeitung.png">
                <img onclick="deleteNote()" src="./img/mulleimer.png" >
            </div>
        </div>
    `;
    }
}

function addNote(){
    let title = document.getElementById('title-input');
    let text = document.getElementById('text-input');

    titles.push(title.value);
    notes.push(text.value);
    render();
}

function deleteNote(i){
    titles.splice(i, 1);
    notes.splice(i, 1);
    render();
}

