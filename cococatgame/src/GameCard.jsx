export default function GameCard({ title, img, link }) {
  return (
    <a href={link} className="gameCard">
      <img src={img} alt={title} width="200" height="200" />
      <span>{title}</span>
    </a>
  );
}
