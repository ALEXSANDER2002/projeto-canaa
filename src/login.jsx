import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate('/cadastro'); // Redireciona para o formulário de cadastro
  };

  return (
    <div className="container">
      <div className="welcome-section">
        <h1>Bem Vindo!</h1>
        <p>Se você já possui um cadastro, efetue o login, caso contrário, efetue o cadastro</p>
        <button onClick={handleCadastroClick}>Cadastrar</button>
      </div>

      <div className="login-section">
        <h2>Login</h2>
        <label htmlFor="username">Usuário</label>
        <input type="text" id="username" placeholder="seu usuário" />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder="sua senha" />

        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
