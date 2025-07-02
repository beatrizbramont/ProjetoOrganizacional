import React, { useEffect, useState } from "react";

export default function LembreteList() {
  const [lembretes, setLembretes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/lembretes", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setLembretes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar lembretes:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando lembretes...</p>;

  return (
    <div>
      <h2>Meus Lembretes</h2>
      {lembretes.length === 0 ? (
        <p>Nenhum lembrete encontrado.</p>
      ) : (
        <ul>
          {lembretes.map((l) => (
            <li key={l.id}>
              <strong>{l.titulo}</strong> - {l.descricao} -{" "}
              {new Date(l.dataHora).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
