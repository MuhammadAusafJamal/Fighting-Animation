const char1 = document.getElementById("character1");
const char2 = document.getElementById("character2")
var forward = 0
var backward = 0

function char2move() {
    console.log(event.keyCode)
    if (event.keyCode === 39 && forward <= 1100) {
        forward += 10
        char1.style.left = forward + "px"
        char1.src = "Iron Man/iron-walk.gif"
        char1.style.transform = "scalex(1)";
        setTimeout(function () {
            char1.src = "Iron Man/iron-man-stance.gif";
        }, 1000)

        // console.log(forward)
    }
    if (event.keyCode === 37 && forward >= 10) {
        forward -= 10
        char1.style.left = forward + "px"
        char1.src = "Iron Man/iron-walk.gif"
        char1.style.transform = "scalex(-1)";
        setTimeout(function () {
            char1.src = "Iron Man/iron-man-stance.gif";
        }, 1000)
    }
    if (event.keyCode === 38) {
        char1.src = "Iron Man/iron-jump.gif"
        char1.style.width = "350px"
        char1.style.height = "350px"
        setTimeout(function () {
            char1.src = "Iron Man/iron-man-stance.gif";
            char1.style.width = "200px"
            char1.style.height = "150px"
        }, 2000)
    }
    if (event.keyCode === 40) {
        char1.src = "Iron Man/ironman-shield.gif"
        // char1.style.width = "300px"
        // char1.style.height = "300px"
        setTimeout(function () {
            char1.src = "Iron Man/iron-man-stance.gif";
            char1.style.width = "200px"
            char1.style.height = "150px"
        }, 2000)
    }
    if (event.keyCode === 68 && backward >= 0) {
        backward -= 10
        char2.style.right = backward + "px"
        char2.src = "Captian America/spidey-walk1.gif"
        char2.style.transform = "scalex(1)";
        setTimeout(function () {
            char2.src = "Captian America/m-spiderman stance.gif";
        }, 1000)
    }
    if (event.keyCode === 65 && backward <= 1100) {
        backward += 10
        char2.style.right = backward + "px"
        char2.src = "Captian America/spidey-walk1.gif"
        char2.style.transform = "scalex(-1)";
        setTimeout(function () {
            char2.src = "Captian America/m-spiderman stance.gif";
        }, 1000)
    }
    if (event.keyCode === 87) {
        char2.src = "Captian America/spider-jump.gif"
        char2.style.width = "350px"
        char2.style.height = "350px"
        setTimeout(function () {
            char2.src = "Captian America/m-spiderman stance.gif";
            char2.style.width = "200px"
            char2.style.height = "150px"
        }, 2000)
    }
    if (event.keyCode === 83) {
        char2.src = "Captian America/spidey-flipkick-fk dowm.gif"
        char2.style.width = "400px"
        char2.style.height = "400px"
        setTimeout(function () {
            char2.src = "Captian America/m-spiderman stance.gif";
            char2.style.width = "200px"
            char2.style.height = "150px"
        }, 2000)
    }
}
window.onkeydown = char2move;


var btn = document.getElementById("btn")
const close =()=>{
    var modal = document.getElementById("modal");
    modal.innerText=""
    console.log("chl jaaaaaa")
}

btn.addEventListener("click" , close)