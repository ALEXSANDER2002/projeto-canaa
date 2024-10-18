import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './login.jsx';
import Forms from './forms.jsx';
import Cadastro from './Cadastro.jsx';
import QuemSomos from './QuemSomos.jsx';
import OndeDoar from './OndeDoar.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial */}
        <Route path="/login" element={<Login />} /> {/* Página de Login */}
        <Route path="/cadastro" element={<Forms />} /> {/* Página de Cadastro */}
        <Route path="/quemsomos" element={<QuemSomos />} /> {/* Página Quem Somos */}
        <Route path="/ondedoar" element={<OndeDoar />} /> {/* Página Onde Doar */}
      </Routes>
    </Router>
  </StrictMode>,
);
