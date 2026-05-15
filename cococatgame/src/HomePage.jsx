import Header from "./Header";
import GameList from "./GameList";
import FooterCat from "./FooterCat";
import "./HomePage.css"; // On va créer ce fichier

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <Header />

      <section className="hero-section">
        <div className="hero-content">
          <h2>Les jeux deviennent très addictifs !</h2>
          <p>Ne pas sous-estimer leur pouvoir sur nous. Jamais !</p>

          <a href="https://cococatforum-production.up.railway.app/" className="forum-btn">
            Rejoignez la communauté <span>CocoCatForum</span>
          </a>
        </div>
      </section>

      <main className="main-content">
        <GameList />
      </main>

      <FooterCat />
    </div>
  );
}