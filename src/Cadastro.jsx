import React from 'react';

const Cadastro = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      <p>Preencha o formulário para realizar o cadastro.</p>
      {/* Aqui você pode adicionar seu formulário de cadastro */}
      <form>
        <label>Nome Completo:</label>
        <input type="text" placeholder="Digite seu nome" />

        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" />

        <label>Senha:</label>
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
