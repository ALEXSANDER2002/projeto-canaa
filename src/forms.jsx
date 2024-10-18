import React, { useState } from 'react';
import './forms.css';

const Forms = () => {
  const [formData, setFormData] = useState({
    nome: '',
    tipoSanguineo: '',
    idade: '',
    email: '',
    senha: '',
    telefone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <div className="form-container">
      <div className="form-info">
        <h1>Bem Vindo!</h1>
        <p>
          Para efetuar o cadastro é necessário preencher algumas informações
          necessárias para inserirmos no nosso banco de dados, como: Nome, Tipo
          Sanguíneo, idade, e um email e senha para login
        </p>
        <h3>Doar sangue salva vidas!</h3>
      </div>

      <form className="form-inputs" onSubmit={handleSubmit}>
        <h2>Cadastro</h2>

        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          value={formData.nome}
          onChange={handleChange}
        />

        <select name="tipoSanguineo" value={formData.tipoSanguineo} onChange={handleChange}>
          <option value="">Tipo Sanguíneo</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <input
          type="number"
          name="idade"
          placeholder="Idade"
          value={formData.idade}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
        />

        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Forms;
