import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="home">
      <header className="header">
        <h1>n3kosempai</h1>
        <p>Bienvenido a mi perfil de GitHub</p>
      </header>

      <main className="main">
        <section className="card">
          <h2>Sobre mí</h2>
          <p>
            Esta es mi página de perfil de GitHub Pages construida con Astro +
            React.
          </p>
          {mounted && <p className="status">React montado correctamente</p>}
          test 1
        </section>
      </main>

      <footer className="footer">
        <p>2024 n3kosempai</p>
      </footer>
    </div>
  );
}
