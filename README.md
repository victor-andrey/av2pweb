📘 Estudo de Caso – Aplicação Web + Mobile (React / React Native)

Este projeto consiste no desenvolvimento de uma aplicação completa composta por:

Aplicação Web (React + Vite)

Aplicação Mobile (React Native + Expo + Expo Router)

Consumo de API externa com Axios

Testes automatizados usando Vitest e Testing Library

O objetivo é listar alunos cadastrados na API, exibir detalhes individuais e permitir navegação tanto no web quanto no mobile.

🚀 Tecnologias Utilizadas
Web

React

React Router DOM

Axios

Vite

Bootstrap

Vitest + @testing-library/react

Mobile

React Native

Expo

Expo Router

Axios

📁 Estrutura do Projeto
meu-estudo-caso/
├── web/
│   ├── src/
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── StudentDetails.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── studentService.js
│   │   └── tests/
│   │       ├── Home.test.jsx
│   │       └── StudentDetails.test.jsx
│   ├── index.html
│   └── vite.config.js
│
└── mobile/
    ├── app/
    │   ├── index.js
    │   └── student/
    │       └── [id].js
    ├── src/
    │   └── screens/
    │       ├── Home.js
    │       └── StudentDetails.js
    ├── assets/
    ├── app.json
    ├── package.json
    └── tsconfig.json

💻 Como Rodar o Projeto Web
1️⃣ Instalar dependências

No diretório web/:

npm install

2️⃣ Rodar o projeto:
npm run dev

3️⃣ Acessar no navegador:
http://localhost:5173

📱 Como Rodar o Projeto Mobile
1️⃣ Instalar dependências

No diretório mobile/:

npm install

2️⃣ Rodar o Expo:
npm start

3️⃣ Abrir no celular:

Instale Expo Go na App Store ou Google Play

Escaneie o QR Code exibido no terminal

🔗 Rotas Implementadas
Web
Rota	Descrição
/	Lista de alunos
/student/:id	Detalhes do aluno
Mobile (Expo Router)
Arquivo	Rota Gerada
app/index.js	/
app/student/[id].js	/student/:id
🧪 Como rodar os testes (Web)

No diretório web/:

1️⃣ Instalar dependências de testes (já instaladas):
npm install

2️⃣ Rodar os testes:
npm test


Os testes usam:
✔ Vitest
✔ @testing-library/react
✔ jsdom

📡 API Consumida

Os dados são carregados a partir de uma API Fake (MockAPI ou similar), utilizando Axios.

Serviço implementado em:

web/src/services/studentService.js
mobile/src/screens/StudentDetails.js

👤 Autor

Victor Andrey
Projeto desenvolvido como parte da avaliação da disciplina.
