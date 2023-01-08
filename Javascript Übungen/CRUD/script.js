let names = ['Max Mustermann', 'John Depp'];
let phoneNumbers = ['01234654987', '21684683514'];
load();


function render() {
    
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML = `<h1>My Contacts</h1>`;
    content.innerHTML =`
    <div>
        <input id="name" type="text" placeholder="Name">
        <input id="phone" type="number" placeholder="Telefon">        
        <button id="add-bt" onclick="addContact()">Hinzufügen</button>
    </div>
    `;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phoneNumber = phoneNumbers[i];

        content.innerHTML += `
        <div class="card">
        <b>Name: </b> ${name} <br>
        <b>Telefon:</b> ${phoneNumber} <br>
        <button onclick="deleteContact(${i})">Löschen</button>
        </div>
         `
    }
}

function addContact(){
    let name = document.getElementById('name');
    let phoneNumber = document.getElementById('phone');
    names.push(name.value);
    phoneNumbers.push(phoneNumber.value);
    render();
    save();
}

function deleteContact(i){
    names.splice(i, 1);
    phoneNumbers.splice(i, 1);
    render();
    save();
}

function save(){
    let namesAsText = JSON.stringify(names);
    localStorage.setItem('names', namesAsText);

    let phoneNumbersAsText = JSON.stringify(phoneNumbers);
    localStorage.setItem('phoneNumbers', phoneNumbersAsText);
}

function load(){
    let namesAsText = localStorage.getItem('names');
    let phoneNumbersAsText = localStorage.getItem('phoneNumbers');

    if (namesAsText && phoneNumbersAsText) {
        names = JSON.parse(namesAsText);
        phoneNumbers = JSON.parse(phoneNumbersAsText);
    }

}