import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [robotChoix, setRobotChoix] = useState('')
  const [resultat, setResultat] = useState('')
  const [score, setScore] = useState(0)
  // Fonction robot
  const Robot = () => {
    const objets = ["Pierre", "Feuille", "Ciseaux"]
    return objets[Math.floor(Math.random() * objets.length)]
  }

  // Quand le joueur clique
  const afficherTexte = (joueurChoix,e) => {
    setText(joueurChoix)
    const btn = e.target 

    btn.classList.add("pop")
    setTimeout(()=>btn.classList.remove("pop"),150)

    btn.classList.add("glow")
    setTimeout(()=>btn.classList.remove("glow"),400)

    const choixRobot = Robot()
    setRobotChoix(choixRobot)

    // Détermination du gagnant
    if (
      (joueurChoix === "Pierre" && choixRobot === "Ciseaux") ||
      (joueurChoix === "Feuille" && choixRobot === "Pierre") ||
      (joueurChoix === "Ciseaux" && choixRobot === "Feuille")
    ) {
      setResultat("Gagné ! 🙌")
        setScore(prev => prev + 1)
    }
    else if (
      (joueurChoix === "Pierre" && choixRobot === "Feuille") ||
      (joueurChoix === "Feuille" && choixRobot === "Ciseaux") ||
      (joueurChoix === "Ciseaux" && choixRobot === "Pierre")
    ) {
      setResultat("Perdu 😒")
    }
    else {
      setResultat("Égalité 😐")
    }
  }

  return (
    <div className="App">
      <h2>Choisi ton objet !</h2>

      <div>
        <button onClick={(e) => afficherTexte("Pierre",e)}>Pierre</button>
        <button onClick={(e) => afficherTexte("Feuille",e)}>Feuille</button>
        <button onClick={(e) => afficherTexte("Ciseaux",e)}>Ciseaux</button>
      </div>

      <h3 className={`resultat ${
  resultat.includes("Gagné") ? "gagne" :
  resultat.includes("Perdu") ? "perdu" :
  "egalite"
}`}>
  {resultat} - Score : {score}
</h3>

    </div>
  )
}

export default App

