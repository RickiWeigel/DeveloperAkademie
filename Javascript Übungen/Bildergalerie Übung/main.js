let images = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
];

let counter = 0;

function showImage(counter) {
  document.getElementById("image").src = images[counter];
}

function start() {
  let int = +document.getElementById("setInterval").value * 1000; //das + sagt dem input, dass es eine Zahl ist

  if (int < 1000 || int > 10000) {
    alert("Deine Zahl muss größer als 0 sein und kleiner als 10!");
  } else {
    showImage(counter);
    counter++;

    if (counter == images.length) {
      counter = 0;
    }

    setTimeout(start, int);
  }
}
