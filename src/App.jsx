import { useState } from "react";
import Header from "./components/Header";
import IdeaSection from "./components/IdeaSection";
import CategoryNav from "./components/CategoryNav";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { categories } from "./data/collection";
import "./App.css";

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="app">
      <Header />
      <IdeaSection />
      <CategoryNav
        categories={categories}
        activeId={activeCategory}
        onSelect={setActiveCategory}
      />
      <Gallery categories={categories} activeCategory={activeCategory} />
      <Footer />
    </div>
  );
}
