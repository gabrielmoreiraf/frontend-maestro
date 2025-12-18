import { useState } from "react";
import { Sidebar } from "../../components/sidebar/sibebar";
import "./dashboard.css";
import construcion from "../../assets/construcion.svg";

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={sidebarOpen} />

      <main className="dashboard-main">
        <button
          className="menu-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        <div className="dashboard-info">
          <img
            src={construcion}
            alt="Página em construção"
            className="dashboard-image"
          />
          <p>Página em construção</p>
        </div>
      </main>
    </div>
  );
}
