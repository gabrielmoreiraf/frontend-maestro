import { Sidebar } from "../../components/sidebar/sibebar";
import "./dashboard.css";
import construcion from "../../assets/construcion.svg";

export function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-main">
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
