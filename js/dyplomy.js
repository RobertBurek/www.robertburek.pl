//console.log("cześć")
var images = document.querySelectorAll('img')
var index = 1

function showImage(n){
    images[n].classList.add('visible')
}

function hideImage(n){
    images[n].classList.remove('visible')
}

images[0].classList.add('visible')
showImage(1)
console.log(images.length)
console.log(images[0])
console.log(images[1])
console.log(images[2])
console.log(images[3])
console.log(index)


function update(){
if (index===images.length-1)
    index = 1
    // next.disabled = true
    else //next.disabled=false
        index=index

if(index===1)
    index = images.length-1
    // prev.disabled=true
    else //prev.disabled=false
    index=index
}

function goNext(){
    console.log("---------------"+index)
    console.log(images[index])
    hideImage(index)
    console.log(images[index])
    if (index===images.length-1)
        index = 0
    index++
    console.log(images[index])
    showImage(index)
    console.log(images[index])
    console.log("---------------"+index)
    // update()
}

function goPrev(){
    hideImage(index)
    if (index===1)
        index = 20
    index--
    showImage(index)
    // update()
}

var next =document.querySelector('#next')
var prev =document.querySelector('#prev')
next.addEventListener('click', goNext)
prev.addEventListener('click', goPrev)

// update()
