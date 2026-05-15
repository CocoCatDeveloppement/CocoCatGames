import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"; 
import PongIframe from "./games/PongIframe";
import CalcIframe from "./games/CalcIframe";
import PfcIframe from "./games/PfcIframe";
import SnakeIframe from "./games/SnakeIframe";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<HomePage />} />

        {/* Jeux */}
        <Route path="/pong" element={<PongIframe />} />
        <Route path="/calc" element={<CalcIframe />} />
        <Route path="/pfc" element={<PfcIframe />} />
        <Route path="/snake" element={<SnakeIframe />} />
      </Routes>
    </BrowserRouter>
  );
}

