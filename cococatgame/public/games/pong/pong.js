const can = document.getElementById("can");

const ctx = can.getContext("2d");

let user = {
    x : 300,
    y : 200,
    width : 50,
    height : 100,
    speedForce : 8,
    score : -1
};

let ball = {
    x : 50,
    y : 200,
    width : 25,
    height : 25,
    dx : 5,
    dy : 5
};

window.addEventListener("keydown",(e) => {
    if (e.key === "ArrowUp") {
        user.y -= user.speedForce;
    }
    else if(e.key === "ArrowDown") {
        user.y += user.speedForce;
    }
});

function draw_user() {
    ctx.fillStyle = "red";
    ctx.fillRect(user.x,user.y,user.width,user.height);

}

function draw_ball(){
    ctx.fillStyle = "yellow";
    ctx.fillRect(ball.x,ball.y,ball.width,ball.height);
 
}

function collision() {

    ball.x += ball.dx;
    ball.y += ball.dy;

    // MUR GAUCHE
    if (ball.x < 0) {
        ball.dx = -ball.dx;
    }

    // MUR BAS
    if (ball.y + ball.height > can.height) {
        ball.dy = -ball.dy;
    }

    // MUR HAUT (score + reset)
    if (ball.y < 0) {
        user.score++;
        ball.x = can.width / 2;
        ball.y = can.height / 2;
        ball.dy = -ball.dy;
    }

    // COLLISION JOUEUR (rebond horizontal)
    if (
    ball.x + ball.width > user.x &&
    ball.x < user.x + user.width &&
    ball.y + ball.height > user.y &&
    ball.y < user.y + user.height
) {
    ball.dx = -ball.dx; // rebond horizontal
    ball.x = user.x - ball.width; // repositionne la balle juste avant le paddle
}

}



function boucle() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
    ctx.fillRect(0, 0, can.width, can.height);

    draw_user();
    draw_ball();
    collision();
    ctx.fillStyle = "white";
    ctx.font = "bold 20px Arial";
    ctx.fillText(`Score : ${user.score}`, 10, 20);

    requestAnimationFrame(boucle);
    
}

boucle();