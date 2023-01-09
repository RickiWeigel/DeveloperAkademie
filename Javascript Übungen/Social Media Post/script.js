let names = [];
let posts = [];

function addPost() {
    let text = document.getElementById("messageInput").value; //speichert Nachricht in "text"
    let name = document.getElementById("nameInput").value;



    if (text.length && name.length) {
        posts.push(text); //speichert "text" in ein array
        names.push(name);

        let newPosts = document.getElementById("newPost");
        let newName = document.getElementById("newPost");
        newName.innerHTML = "";
        newPosts.innerHTML = ""; //leert alle vorher eingegebenen nachrichtens
        for (let i = 0; i < posts.length; i++) { //zeigt alle im Array (post) gespeicherten Nachrichten
            newPosts.innerHTML += `
            <div class="post">
            <b>${names[i]}</b><br>
            ${posts[i]}
            </div>
        `;
        }
        document.getElementById("messageInput").value = ''; //leert das Inputfeld
        document.getElementById("nameInput").value = '';
    } else {
        alert('Fühle alle Felder aus!');
    }
};


