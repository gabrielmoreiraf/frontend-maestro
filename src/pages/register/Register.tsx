import { useState } from "react";
import "./register.css";
import bg1 from "../../assets/bg1.png";
import Maestro from "../../assets/Maestro1.png";
import logo1 from "../../assets/Logo-1 1.png";
import { Button } from "../../components/button/button-register";
import { CheckboxRegister } from "../../components/checkbox/checkbox-register";
import { Eye, EyeOff } from "lucide-react";
import DOMPurify from "dompurify";
import { api } from "../../services/api";

export function Register() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [nome, setNome] = useState("");
  const [documento, setDocumento] = useState("");

  const [emailError, setEmailError] = useState("");
  const [senhaError, setSenhaError] = useState("");
  const [confirmarSenhaError, setConfirmarSenhaError] = useState("");
  const [telefoneError, setTelefoneError] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [documentoError, setDocumentoError] = useState("");

  const sanitizeInput = (value: string) =>
    DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    }).trim();

  function validateEmail(value: string): boolean {
    const v = sanitizeInput(value).toLowerCase();

    if (!v) {
      setEmailError("O e-mail é obrigatório");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      setEmailError("E-mail inválido");
      return false;
    }

    setEmailError("");
    return true;
  }

  function validateSenha(value: string): boolean {
    const v = value.trim();

    if (!v) {
      setSenhaError("A senha é obrigatória");
      return false;
    }

    if (v.length < 8) {
      setSenhaError("A senha deve ter no mínimo 8 caracteres");
      return false;
    }

    if (!/[A-Z]/.test(v) || !/[a-z]/.test(v) || !/\d/.test(v)) {
      setSenhaError("Use letras maiúsculas, minúsculas e pelo menos um número");
      return false;
    }

    setSenhaError("");
    return true;
  }

  function validateConfirmarSenha(value: string): boolean {
    if (!value.trim()) {
      setConfirmarSenhaError("Confirme a senha");
      return false;
    }

    if (value !== senha) {
      setConfirmarSenhaError("As senhas não coincidem");
      return false;
    }

    setConfirmarSenhaError("");
    return true;
  }

  function validateTelefone(value: string): boolean {
    const v = value.replace(/\D/g, "");

    if (v.length < 10 || v.length > 11) {
      setTelefoneError("Telefone inválido");
      return false;
    }

    setTelefoneError("");
    return true;
  }

  function validateNome(value: string): boolean {
    const v = sanitizeInput(value);

    if (!v) {
      setNomeError("Nome obrigatório");
      return false;
    }

    if (v.split(" ").length < 2) {
      setNomeError("Informe nome e sobrenome");
      return false;
    }

    setNomeError("");
    return true;
  }

  function validateDocumento(value: string): boolean {
    const v = sanitizeInput(value).replace(/\D/g, "");

    if (!v || (v.length !== 11 && v.length !== 14)) {
      setDocumentoError("CPF ou CNPJ inválido");
      return false;
    }

    setDocumentoError("");
    return true;
  }

  function handleDataNascimento(valor: string) {
    let v = valor.replace(/\D/g, "").slice(0, 8);

    if (v.length > 2) v = v.replace(/^(\d{2})(\d)/, "$1/$2");
    if (v.length > 5) v = v.replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");

    setDataNascimento(v);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const isValid =
      validateEmail(email) &&
      validateSenha(senha) &&
      validateConfirmarSenha(confirmarSenha) &&
      validateTelefone(telefone) &&
      validateNome(nome) &&
      validateDocumento(documento);

    if (!isValid) return;

    try {
      const payload = {
        email: sanitizeInput(email),
        senha: senha.trim(),
        telefone: sanitizeInput(telefone),
        nome: sanitizeInput(nome),
        documento: sanitizeInput(documento),
        dataNascimento,
      };

      const response = await api.post("/register", payload);

      console.log("Cadastro OK:", response.data);
      alert("Cadastro realizado com sucesso!");

      window.location.href = "/login";
    } catch (error: any) {
      alert(error.response?.data?.detail || "Erro ao realizar cadastro");
    }
  }

  return (
    <div className="register-container">
      <div className="register-left-wrapper">
        <div className="register-left">
          <div className="register-logo">
            <img src={logo1} alt="Maestro" className="register-logo-icon" />
            <h1>Maestro</h1>
          </div>

          <h2 className="register-title">Cadastro</h2>

          <form className="register-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
              />
              {emailError && <span className="error">{emailError}</span>}
            </div>

            <div className="box-password">
              <div className="field">
                <div className="register-password-wrapper">
                  <input
                    type={mostrarSenha ? "text" : "password"}
                    placeholder="Senha*"
                    value={senha}
                    onChange={(e) => {
                      setSenha(e.target.value);
                      validateSenha(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    className="register-eye-button"
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                  >
                    {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {senhaError && <span className="error">{senhaError}</span>}
              </div>

              <div className="field">
                <div className="register-password-wrapper">
                  <input
                    type={mostrarConfirmacao ? "text" : "password"}
                    placeholder="Confirmar senha*"
                    value={confirmarSenha}
                    onChange={(e) => {
                      setConfirmarSenha(e.target.value);
                      validateConfirmarSenha(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    className="register-eye-button"
                    onClick={() => setMostrarConfirmacao(!mostrarConfirmacao)}
                  >
                    {mostrarConfirmacao ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                {confirmarSenhaError && (
                  <span className="error">{confirmarSenhaError}</span>
                )}
              </div>
            </div>

            <div className="tel-dat">
              <div className="field">
                <input
                  type="text"
                  placeholder="Telefone"
                  value={telefone}
                  onChange={(e) => {
                    setTelefone(e.target.value);
                    validateTelefone(e.target.value);
                  }}
                />
                {telefoneError && (
                  <span className="error">{telefoneError}</span>
                )}
              </div>

              <div className="field">
                <input
                  type="text"
                  placeholder="Data de nascimento"
                  value={dataNascimento}
                  onChange={(e) => handleDataNascimento(e.target.value)}
                />
              </div>
            </div>

            {/* NOME */}
            <div className="field">
              <input
                type="text"
                placeholder="Nome completo*"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                  validateNome(e.target.value);
                }}
              />
              {nomeError && <span className="error">{nomeError}</span>}
            </div>

            {/* DOCUMENTO */}
            <div className="field">
              <input
                type="text"
                placeholder="CNPJ/CPF*"
                value={documento}
                onChange={(e) => {
                  setDocumento(e.target.value);
                  validateDocumento(e.target.value);
                }}
              />
              {documentoError && (
                <span className="error">{documentoError}</span>
              )}
            </div>

            <div className="register-options">
              <CheckboxRegister />
              <span>
                Estou de acordo com os{" "}
                <a href="/login" className="register-link">
                  Termos de serviço e política de privacidade
                </a>
              </span>
            </div>

            <Button />

            <p className="register-footer">
              Já tem uma conta?{" "}
              <a href="/login" className="register-link">
                Entrar
              </a>
            </p>
          </form>
        </div>
      </div>

      <div className="register-right">
        <img src={bg1} alt="" />
        <div className="register-maestro">
          <img src={Maestro} alt="logo-maestro" />
        </div>
      </div>
    </div>
  );
}
