let images = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg', './img/7.jpg','./img/8.jpg','./img/9.jpg','./img/10.jpg','./img/11.jpg','./img/12.jpg','./img/13.jpg','./img/14.jpg','./img/15.jpg','./img/16.jpg','./img/17.jpg',];

function render(){
    let image = document.getElementById('container');
    image.innerHTML = '';

    for (let i = 0; i < images.length; i++) {
        image.innerHTML += `
        <div onclick="showImage(${i})" id="pics" class="pics">
        <img src="${images[i]}">
        </div>
        `
    }
};


function renderMaxImage(i){
    let image = document.getElementById('max-image-container');
    image.innerHTML = '';
    image.innerHTML = `
        <div onclick="closeImage ()" class="close-btn"></div>
        <img class="max-image" src="${images[i]}">
    `
}


function showImage (i){
    document.getElementById('max-image-container').classList.remove('d-none')
    let image = document.getElementById('max-image-container');
    image.innerHTML = '';
    image.innerHTML = `
        <div onclick="closeImage ()" class="close-btn">X</div>
        <img class="max-image" src="${images[i]}">
    `
}


function closeImage (){
    document.getElementById('max-image-container').classList.add('d-none')
}

