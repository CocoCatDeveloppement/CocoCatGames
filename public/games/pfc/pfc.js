const ecran = document.getElementById("ecran");
const boutons = document.querySelectorAll(".boutons button");

const photo = document.getElementById("photo");
const photoRobot = document.getElementById("photorobot");

const choix = ["Pierre", "Feuille", "Ciseaux"];

// --- HOVER POUR AFFICHER L’IMAGE ---
boutons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        const id = btn.id; // pierre / feuille / ciseaux
        photo.src = `..//${id}.png`;
    });
});

// --- CLICK POUR JOUER ---
boutons.forEach(btn => {
    btn.addEventListener("click", () => {

        const userChoice = btn.textContent;
        const robotChoice = choix[Math.floor(Math.random() * 3)];

        // Affichage image robot
        photoRobot.src = `../static/img/${robotChoice.toLowerCase()}.png`;

        let resultat = "";

        if (userChoice === robotChoice) {
            resultat = "Égalité !";
        }
        else if (
            (userChoice === "Pierre" && robotChoice === "Ciseaux") ||
            (userChoice === "Feuille" && robotChoice === "Pierre") ||
            (userChoice === "Ciseaux" && robotChoice === "Feuille")
        ) {
            resultat = "Gagné !";
        }
        else {
            resultat = "Perdu !";
        }

        ecran.querySelector(".resultat").textContent = `${userChoice} vs ${robotChoice} → ${resultat}`;
    });
});
