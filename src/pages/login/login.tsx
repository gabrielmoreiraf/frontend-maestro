import React, { useState } from "react";
import "./login.css";

import bg1 from "../../assets/bg1.png";
import Maestro from "../../assets/Maestro1.png";
import logo1 from "../../assets/Logo-1 1.png";

import { Button } from "../../components/button/button";
import { Checkbox } from "../../components/checkbox/checkbox";
import { useNavigate } from "react-router-dom";

import { Eye, EyeOff } from "lucide-react";

import { api } from "../../services/api";

const Login: React.FC = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await api.post("/login", {
        email,
        password: senha,
      });

      console.log("Login OK:", response.data);
      alert("Login realizado com sucesso");

      navigate("/dashboard");
    } catch (error: any) {
      alert(error.response?.data?.detail || "Erro ao tentar fazer login");
    }
  }

  return (
    <div className="login-container">
      {/* LADO ESQUERDO */}
      <div className="left-section-0">
        <div className="left-section">
          <div className="logo">
            <img src={logo1} alt="Maestro" className="logo-icon" />
            <h1>Maestro</h1>
          </div>

          <h2 className="to-enter">Entrar</h2>

          <form className="form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-wrapper">
              <input
                type={mostrarSenha ? "text" : "password"}
                placeholder="Senha"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />

              <button
                type="button"
                className="eye-button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                aria-label="Mostrar ou ocultar senha"
              >
                {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="options">
              <Checkbox />

              <a className="links-login" href="#">
                Esqueceu a senha?
              </a>
            </div>

            {/* botão agora apenas submete o form */}
            <Button type="submit" />

            <p className="register">
              Você não tem conta?{" "}
              <a className="links-login" href="/register">
                Cadastrar
              </a>
            </p>
          </form>
        </div>
      </div>

      <div className="right-section">
        <p className="Name-1">Maestro</p>
        <p className="Name-2">Maestro</p>
        <img src={bg1} alt="Imagem decorativa" />
        <div className="maestro">
          <img src={Maestro} alt="logo-maestro" />
        </div>
      </div>
    </div>
  );
};

export default Login;
