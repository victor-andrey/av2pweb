# 📚 Estudo de Caso — Aplicação Web + Mobile (React / React Native)

Este projeto consiste no desenvolvimento de uma aplicação completa composta por:

- **Aplicação Web (React + Vite)**
- **Aplicação Mobile (React Native + Expo + Expo Router)**
- **Consumo de API externa com Axios**
- **Testes automatizados usando Vitest + Testing Library**

O objetivo é listar alunos cadastrados na API, exibir detalhes e permitir navegação tanto no web quanto no mobile.

---

## 🚀 Tecnologias Utilizadas

### **🔵 Web**
- React
- React Router DOM
- Axios
- Vite
- Vitest + @testing-library/react
- Bootstrap

### **🟢 Mobile**
- React Native
- Expo
- Expo Router (file-based routing)
- Axios

---

## 📁 Estrutura do Projeto

projeto-react-app/
│
├── web/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ └── StudentDetails.jsx
│ │ ├── services/
│ │ │ ├── api.js
│ │ │ └── studentService.js
│ │ ├── tests/
│ │ │ ├── Home.test.jsx
│ │ │ └── StudentDetails.test.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ ├── index.html
│ └── vite.config.js
│
└── mobile/
├── app/
│ ├── index.js
│ └── student/
│ └── [id].js
└── src/
└── screens/
├── Home.js
└── StudentDetails.js
---

## 🌐 Como Rodar o Projeto **Web**

### 1️⃣ Instalar dependências  
No diretório **web/**:

### 2️⃣ Rodar o projeto  

### 3️⃣ Acessar no navegador  
👉 http://localhost:5173

---

## 📱 Como Rodar o Projeto **Mobile**

### 1️⃣ Instalar dependências  
No diretório **mobile/**:

### 2️⃣ Rodar o Expo  

### 3️⃣ Abrir no celular  
- Instale **Expo Go** (Android/iOS)
- Escaneie o QR Code exibido no terminal

---

## 🧭 Rotas Implementadas

### **Web**
| Rota | Descrição |
|------|-----------|
| `/` | Lista de alunos |
| `/student/:id` | Detalhes do aluno |

### **Mobile (Expo Router)**
| Rota | Arquivo |
|------|---------|
| `/` | app/index.js |
| `/student/[id]` | app/student/[id].js |

---

## 🧪 Como Rodar os Testes (Web)

No diretório **web/**:

### 1️⃣ Instalar dependências de testes  

### 2️⃣ Rodar os testes  

Os testes utilizam:  
✔️ Vitest  
✔️ @testing-library/react  
✔️ jsdom  

---

## 🌐 API Consumida

Os dados são carregados a partir de uma API Fake (MockAPI ou similar), utilizando **Axios**.

Pontos de consumo:

- `web/src/services/studentService.js`
- `mobile/src/screens/StudentDetails.js`

---

## 👤 Autor

**Victor Andrey**  
Projeto desenvolvido como parte da avaliação da disciplina.

---

