# 🌍 World Clock Frontend

Este é o **frontend** do projeto *World Clock*, uma aplicação fullstack que exibe o horário atual em diversas cidades ao redor do mundo ao clicar em um botão central. A interface foi desenvolvida com **Next.js**, **TypeScript** e **TailwindCSS**, com suporte a **modo claro/escuro**.

---

## 🔗 Demo

🚀 Acesse o app online: []

---

## ✨ Funcionalidades

- Botão central "Clique aqui" que consulta o horário mundial.
- Exibição dos horários de diversas cidades: São Paulo, Nova York, Londres, Tóquio, etc.
- Modo **dark/light** com comutador (em breve).
- Estilização com **TailwindCSS**.
- Comunicação com backend via **API REST**.

---

## 🧱 Tecnologias

- [Next.js 14+](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

---

## 🧩 Estrutura do Projeto
world-clock-front/
│
├── src/
│ ├── app/
│ │ └── page.tsx # Página principal com botão e exibição dos horários
│ ├── styles/
│ │ └── globals.css # Estilos globais do Tailwind
│
├── public/ # Arquivos públicos (favicon, etc.)
├── tailwind.config.ts # Configuração do Tailwind (modo dark ativado)
├── next.config.js # Configuração de proxy para chamadas ao backend
├── tsconfig.json # Configuração do TypeScript
├── package.json # Dependências e scripts
└── README.md # Este arquivo

