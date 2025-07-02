import React, { useState } from "react";

export default function LembreteForm() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataHora, setDataHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/lembretes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify({ titulo, descricao, dataHora }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Lembrete criado!");
        setTitulo("");
        setDescricao("");
        setDataHora("");
      })
      .catch((err) => {
        console.error("Erro ao criar lembrete:", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Novo Lembrete</h2>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <br />
      <input
        type="datetime-local"
        value={dataHora}
        onChange={(e) => setDataHora(e.target.value)}
        required
      />
      <br />
      <button type="submit">Salvar</button>
    </form>
  );
}
