import { Link } from "react-router-dom";

export default function GameList() {
  const games = [
    { title: "Pong", route: "/pong", img: "/pong.png" },
    { title: "Snake", route: "/snake", img: "/snakeimg.png" },
    { title: "Calculatrice", route: "/calc", img: "/calculette.png" },
    { title: "Pierre Feuille Ciseaux", route: "/pfc", img: "/pfc.png" }
  ];

  return (
    <nav className="gameList">
      {games.map((g, i) => (
        <Link key={i} to={g.route} className="gameCard">
          <img src={g.img} alt={g.title} />
          <span>{g.title}</span>
        </Link>
      ))}
    </nav>
  );
}
