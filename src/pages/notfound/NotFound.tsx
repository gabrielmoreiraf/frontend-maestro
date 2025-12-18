import "./notfound.css";

export function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Página não encontrada</h2>

        <p className="notfound-text">
          Opa! A página que você tentou acessar não existe ou foi movida.
        </p>

        <a href="/" className="notfound-button">
          Voltar para o início
        </a>
      </div>
    </div>
  );
}
