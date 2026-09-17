function Card({ title, description, icon }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default Card;