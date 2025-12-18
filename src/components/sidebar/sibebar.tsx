import { useState } from "react";
import "./sidebar.css";
import logo1 from "../../assets/Logo-1 1.png";

type SubItem = {
  label: string;
};

type MenuItem = {
  label: string;
  path?: string;
  subItems?: SubItem[];
};

const menu: MenuItem[] = [
  { label: "Dashboard", path: "/dashboard" },
  {
    label: "Requisitos",
    subItems: [
      { label: "Tarefas" },
      { label: "Épicos" },
      { label: "Requisitos Funcionais" },
      { label: "Requisitos Não Funcionais" },
      { label: "Regras de Negócios" },
      { label: "Histórias de Usuário" },
      { label: "Casos de Uso" },
      { label: "Critérios de Aceitação" },
    ],
  },
  { label: "Desenvolvimento", subItems: [{ label: "" }] },
  { label: "Testes de Software", subItems: [{ label: "" }] },
];

export function Sidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>("Requisitos");

  function toggleMenu(label: string) {
    setOpenMenu(openMenu === label ? null : label);
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo1} alt="Maestro" className="logo-icon" />
        <h1>Maestro</h1>
      </div>

      <nav className="sidebar-nav">
        {menu.map((item) => (
          <div key={item.label} className="menu-group">
            <div
              className={`menu-primary ${
                openMenu === item.label ? "active" : ""
              }`}
              onClick={() => item.subItems && toggleMenu(item.label)}
            >
              <span>{item.label}</span>

              {item.subItems && (
                <span className="arrow">
                  {openMenu === item.label ? "▴" : "▾"}
                </span>
              )}
            </div>

            {openMenu === item.label && item.subItems && (
              <div className="menu-secondary">
                <div className="menu-line" />
                <div className="menu-secondary-items">
                  {item.subItems.map((sub) => (
                    <span key={sub.label} className="menu-secondary-item">
                      {sub.label}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
