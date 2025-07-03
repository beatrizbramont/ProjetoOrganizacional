import React from "react";
import LembreteList from "./components/lembreteList";
import LembreteForm from "./components/lembreteForm";

function App() {
  return (
    <div className="App">
      <h1>Minha Agenda de Lembretes</h1>
      <LembreteForm />
      <LembreteList />
    </div>
  );
}

export default App;
