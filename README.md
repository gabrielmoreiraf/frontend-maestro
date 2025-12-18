# Projeto Maestro – Frontend

## Visão Geral

O **Projeto Maestro** é uma aplicação frontend desenvolvida em **React com TypeScript**, estruturada para consumo de uma API backend e organizada seguindo boas práticas de componentização, separação de responsabilidades e reutilização de código.

O sistema possui páginas públicas (como login e cadastro) e páginas protegidas (como dashboard), com navegação controlada por rotas. A interface foi construída com foco em clareza, organização e escalabilidade.

---

## Arquitetura do Projeto

A aplicação segue uma arquitetura modular, dividida em **páginas**, **componentes reutilizáveis**, **serviços**, **assets** e **estilos**.

Estrutura base do projeto:

```
src/
├── assets/          # Imagens, logos e arquivos visuais
│
├── components/      # Componentes reutilizáveis
│   ├── button/
│   └── checkbox/
│
├── pages/           # Páginas da aplicação
│   ├── login/
│   ├── register/
│   └── dashboard/
│
├── routes/          # Configuração das rotas
│   └── index.tsx
│
├── services/        # Comunicação com a API
│   └── api.ts
│
├── styles/          # Estilos globais (se aplicável)
│
├── main.tsx         # Ponto de entrada da aplicação
└── App.tsx          # Componente raiz
```

### Pages

Cada página representa uma rota da aplicação e possui seu próprio arquivo de estilo. Exemplo:

- Login
- Cadastro
- Dashboard

### Components

Componentes reutilizáveis que evitam duplicação de código e facilitam a manutenção, como:

- Botões
- Checkboxes
- Outros elementos de UI

### Services

Camada responsável pela comunicação com o backend, centralizando chamadas HTTP e configurações da API.

### Assets

Armazena imagens, logos e elementos visuais utilizados na interface.

---

## Fluxo Geral da Aplicação

1. O usuário acessa a aplicação
2. Interage com páginas públicas (login/cadastro)
3. As credenciais são enviadas para a API
4. Após autenticação válida, o usuário é redirecionado para áreas internas
5. As páginas consomem dados da API conforme necessário

---

## Principais Dependências

### React

Biblioteca principal para construção da interface baseada em componentes.

### TypeScript

Adiciona tipagem estática ao JavaScript, aumentando a segurança e previsibilidade do código.

### React Router DOM

Responsável pelo gerenciamento de rotas e navegação entre páginas.

```bash
npm install react-router-dom
```

### Axios

Utilizado para realizar requisições HTTP para o backend.

```bash
npm install axios
```

### Lucide React

Biblioteca de ícones utilizada na interface.

```bash
npm install lucide-react
```

### CSS

Estilização feita com CSS tradicional, organizado por página e/ou componente.

---

## Execução do Projeto

### Pré-requisitos

- Node.js (versão LTS recomendada)
- npm ou yarn

### Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```

### Executar em Ambiente de Desenvolvimento

```bash
npm run dev
```

ou

```bash
yarn dev
```

A aplicação ficará disponível em:

```
http://localhost:5173
```

(A porta pode variar conforme a configuração do Vite.)

---

## Configuração da API

O arquivo `services/api.ts` centraliza a comunicação com o backend. Exemplo de configuração:

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});
```

O backend deve estar em execução para que as funcionalidades de autenticação e consumo de dados funcionem corretamente.

---

## Tratamento de Erros

- Requisições HTTP são encapsuladas em blocos `try/catch`
- Mensagens de erro retornadas pela API são tratadas e exibidas ao usuário
- Existe fallback para erros inesperados

---

## Boas Práticas Utilizadas

- Componentização
- Separação de responsabilidades
- Reutilização de código
- Organização por domínio (pages, components, services)
- Uso de formulários com `onSubmit`
- Código legível e manutenível

---

## Possíveis Evoluções

- Proteção de rotas autenticadas
- Gerenciamento global de estado
- Validação de formulários
- Controle de permissões
- Padronização visual com design system

---

## Autor

Projeto Maestro – Frontend em React
