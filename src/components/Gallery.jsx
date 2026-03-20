import BanknoteCard from "./BanknoteCard";

export default function Gallery({ categories, activeCategory }) {
  const filtered = activeCategory
    ? categories.filter((c) => c.id === activeCategory)
    : categories;

  return (
    <main className="gallery">
      {filtered.map((category) => (
        <section key={category.id} className="category-section">
          <div className="section-header">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
          </div>
          <div className="card-grid">
            {category.items.map((item) => (
              <BanknoteCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
