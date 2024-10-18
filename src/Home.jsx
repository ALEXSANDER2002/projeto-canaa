import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Estilos personalizados

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <h1>hemopa<span className="highlight">marabá</span> <span className="heart-icon">❤️</span></h1>
        </div>
        <nav className="navbar">
          <Link to="/cadastro">Cadastre-se</Link>
          <Link to="/quemsomos">Quem somos</Link>
          <Link to="/ondedoar">Onde doar</Link>
          <Link to="/aoshemocentros">Aos Hemocentros</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/comoapoiar">Como apoiar</Link>
          <Link to="/namidia">Na Mídia</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>hemopa <span className="highlight"></span></h2>
          <p>Saiba quando o seu tipo sanguíneo pode salvar alguém na sua região.</p>
          <p>Cadastre-se para ser notificado</p>
          <Link to="/cadastro" className="cta-button">Cadastre-se</Link>
        </section>

        <section className="image-section">
          <img src="" alt="" className="hero-image" />
        </section>
      </main>
    </div>
  );
}

export default Home;
