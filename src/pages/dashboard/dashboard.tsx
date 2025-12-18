import { useState } from "react";
import { Sidebar } from "../../components/sidebar/sibebar";
import logo1 from "../../assets/Logo-1 1.png";
import "./dashboard.css";
import construcion from "../../assets/construcion.svg";

export function Dashboard() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  function toggleMenu(label: string) {
    setOpenMenu(openMenu === label ? null : label);
  }

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <img src={logo1} alt="Maestro" className="logo-icon" />
        <h1>Maestro</h1>
        <div className="dashboard-info">
          <img
            src={construcion}
            alt="Página em construção"
            className="dashboard-image"
          />
          <p>Página em construção</p>
        </div>
      </div>
    </div>
  );
}
