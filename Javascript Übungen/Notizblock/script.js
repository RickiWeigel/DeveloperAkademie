let titles = [];
let notes = [];
load();

function render(){
    let note = document.getElementById('notes-section');
    note.innerHTML = '';

    for (let i = 0; i < titles.length; i++) {
        note.innerHTML +=`
        <div class="notes">
            <div class="notes-title"><span>${titles[i]}</span></div>
            <div class="notes-text"><span>${notes[i]}</span></div>
            <div class="notes-footer">
                <img onclick="openEdit(${i})" src="./img/bearbeitung.png">
                <img onclick="deleteNote(${i})" src="./img/mulleimer.png" >
            </div>
        </div>`;
    }
}

function addNote(){
    let title = document.getElementById('title-input').value;
    let text = document.getElementById('text-input').value;
    text = text.replace(/\r?\n/g, '<br>'); //logt die zeilenumbrüche auch mit ein

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

    if (titlesAsText && notesAsText) {
        titles = JSON.parse(titlesAsText);
        notes = JSON.parse(notesAsText);
    }    
}


function openEdit (i){
    notes[i] = notes[i].replace(/<br\s*\/?>/g, '\r\n');
    document.getElementById('edit-bg').classList.remove('d-none');
    document.getElementById('edit-title-input').value = titles[i];
    document.getElementById('edit-text-input').value = notes[i];
    render()
}

function closeEdit (){
    document.getElementById('edit-bg').classList.add('d-none');
}

function edit(i){
    let title = document.getElementById('edit-title-input').value;
    let text = document.getElementById('edit-text-input').value;
    text = text.replace(/\r?\n/g, '<br>');
    if(title.length && text.length){
        notes.splice(i, 1, text);
        // titles.push(title);
    }else{
        alert('Fülle alle Felder ein!')
    }
    closeEdit();
    render();
    save();
}