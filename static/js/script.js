const chat = document.getElementById("chat");

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const chatX = window.innerWidth - 20 - chat.width;

    if (mouseX < chatX - 50){
        chat.src = "../static/img/chat_gauche.png";
    }
    else if (mouseX > chatX + 50) {
        chat.src = "../static/img/chat_droite.png";
    }
    else {
        chat.src = "../static/img/chat_face.png";
    }

})