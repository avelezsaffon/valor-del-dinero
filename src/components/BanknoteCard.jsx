import { useState } from "react";

export default function BanknoteCard({ item }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="card">
      <div className="card-image">
        {imgError ? (
          <div className="card-placeholder">
            <span className="placeholder-icon">💵</span>
            <span className="placeholder-text">{item.title}</span>
          </div>
        ) : (
          <img
            src={item.image}
            alt={`${item.title} - ${item.country}`}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="card-body">
        <h3>{item.title}</h3>
        <div className="card-meta">
          <span className="country">{item.country}</span>
          <span className="year">{item.year}</span>
        </div>
        <p>{item.description}</p>
      </div>
    </article>
  );
}
