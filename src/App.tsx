import "./global.css";

import { Button } from "./components/button/button";

import "./styles.css";

export function App() {
  return (
    <div className="container">
      <Button name="Criar" onClick={() => alert("Criado !")} />
      <Button name="Editar" />
      <Button name="Remover" />
    </div>
  );
}
