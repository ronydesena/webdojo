# 📘 Documentação de Testes Automatizados – Webdojo (Cypress)

## 📌 Visão Geral
Este projeto contém os **testes automatizados end-to-end (E2E)** da aplicação **Webdojo**, utilizando o **Cypress**. A aplicação Webdojo está localizada **no mesmo repositório**, sendo necessário executá-la localmente antes da execução dos testes.

Os testes simulam o comportamento real do usuário, validando fluxos críticos da aplicação em diferentes resoluções (desktop e mobile).

---

## 🧪 Tecnologias Utilizadas
- **Node.js** (versão LTS recomendada)
- **NPM**
- **Cypress**
- **JavaScript**

---

## 📂 Estrutura do Projeto

```bash
WEBDOJO/
├── .github/
├── .vscode/
├── api/
├── web/
│   ├── cypress/
│   │   ├── e2e/
│   │   ├── fixtures/
│   │   │   ├── cep.json
│   │   │   ├── consultancy.json
│   │   │   └── example.json
│   │   ├── support/
│   │   │   ├── actions/
│   │   │   │   └── consultancy.actions.js
│   │   │   ├── commands.js
│   │   │   ├── e2e.js
│   │   │   └── utils.js
│   │   └── teste.pdf
│   ├── cypress.config.js
│   └── package.json
```

---

## ▶️ Executando a Aplicação Webdojo

```bash
npm run dev
```

Aplicação disponível em:
```
http://localhost:3000
```

---

## ▶️ Executando os Testes Automatizados

### Executar todos os testes (Desktop)
```bash
npm run test
```

### Abrir Cypress UI
```bash
npm run test:ui
```

### Executar teste de login (Mobile)
```bash
npm run test:login:mobile
```

---

## 📜 Scripts Disponíveis

```json
"scripts": {
  "dev": "serve -s dist -p 3000",
  "test": "npx cypress run --config 'viewportWidth=1920,viewportHeight=1080'",
  "test:ui": "npx cypress open",
  "test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896"
}
```

---

## 🧠 Boas Práticas
- Uso de fixtures
- Commands customizados
- Actions reutilizáveis
- Testes independentes

---

## 👨‍💻 Autor
Projeto de testes automatizados da aplicação **Webdojo**.
