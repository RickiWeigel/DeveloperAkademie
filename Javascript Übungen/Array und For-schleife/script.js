let todos = ['einkaufen', 'spülen', 'saugen', 'waschen'];

function showToDo() {
    document.getElementById('todoli').innerHTML= '';
    for (let i = 0; i < todos.length; i++) {
        document.getElementById('todoli').innerHTML += `<li>${todos[i]} <a href="#" onclick="deleteToDo(${i})">X</a></li>`;
    }
}

function addToDo(){
    let todo = document.getElementById('myInput').value;
    todos.push(todo);
    showToDo();
    todo = document.getElementById('myInput').value ='';
}

function deleteToDo(position){
    todos.splice(position, 1)
    showToDo();
}