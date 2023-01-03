let images = ['./img/1.jpg', './img/2.jpg', './img/3.jpg','./img/4.jpg', './img/5.jpg', './img/6.jpg'];
let counter = 0; //Zählervariable


function image(){
    document.getElementById("image").src = images[counter]; //Counter hat 0
    counter++;  //Counter erhöht sich um 1
    setTimeout(image2,3000); // Bis image 2 angezeigt wird, wird erst 3 sekunden gewartet
}

function image2(){
    document.getElementById("image").src = images[counter]; //Counter hat 1
    counter++;
    setTimeout(image3,3000);
}

function image3(){
    document.getElementById("image").src = images[counter]; //Counter hat 2
    counter++; 
    setTimeout(image4,3000);
}
function image4(){
    document.getElementById("image").src = images[counter]; //Counter hat 3
    counter++;
    setTimeout(image5,3000);
}
function image5(){
    document.getElementById("image").src = images[counter]; //Counter hat 4
    counter++;
    setTimeout(image6,3000);
}
function image6(){
    document.getElementById("image").src = images[counter]; //Counter hat 5
    counter=0;
    setTimeout(image,3000);
}

