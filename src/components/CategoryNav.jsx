export default function CategoryNav({ categories, activeId, onSelect }) {
  return (
    <nav className="category-nav">
      <button
        className={`nav-btn ${activeId === null ? "active" : ""}`}
        onClick={() => onSelect(null)}
      >
        Todos
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`nav-btn ${activeId === cat.id ? "active" : ""}`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </nav>
  );
}
