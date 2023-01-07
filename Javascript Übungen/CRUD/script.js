let names = ['Max Mustermann', 'John Depp'];
let phoneNumbers = ['01234654987', '21684683514'];

function render() {
    let content = document.getElementById('content')
    content.innerHTML = '';
    content.innerHTML = `
    <h1>My Contacts</h1>
    `;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phoneNumber = phoneNumbers[i];

        content.innerHTML += `
        <div>
        <b>Name: </b> ${name} <br>
        <b>Telefon:</b> ${phoneNumber} <br>
        </div>
         `
    }
}