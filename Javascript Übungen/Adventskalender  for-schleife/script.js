
  function insertDoors() {
    for (let i = 1; i <= 24; i++) {
    document.getElementById("body").innerHTML += `<div class="door">${i}</div>`;
  }
}
