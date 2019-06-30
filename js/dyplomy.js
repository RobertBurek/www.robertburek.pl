var images = document.querySelectorAll('img');
var index = 1;

function showImage(n){
    images[n].classList.add('visible');
}

function hideImage(n){
    images[n].classList.remove('visible');
}

images[0].classList.add('visible');
showImage(1);

function update(){
if (index===images.length-1)
    index = 1;
if(index===1)
    index = images.length-1;
}

function goNext(){
    hideImage(index);
    if (index===images.length-1)
        index = 0;
    index++;
    showImage(index);
}

function goPrev(){
    hideImage(index);
    if (index===1)
        index = 20;
    index--;
    showImage(index);
}

var next =document.querySelector('#next');
var prev =document.querySelector('#prev');
next.addEventListener('click', goNext);
prev.addEventListener('click', goPrev);
