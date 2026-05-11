const ecran = document.getElementById("ecran");
const boutons = document.querySelectorAll(".boutons button");

let operation = "";


boutons.forEach(boutons => {
    boutons.addEventListener("click", () => {
        let valeur = boutons.textContent;
        

        if (valeur === "C") {
            operation = "";
            ecran.textContent = "";
            return;
        }
        if (valeur === "=") {
            try {
                const resultat = eval(operation);
                ecran.textContent = resultat;
                operation = resultat.toString();
            } catch {
                ecran.textContent = "Erreur !!!!!!!!!";
                operation = "";
            }

            return;
        }

        operation += valeur;
        ecran.textContent = operation;
    });
});