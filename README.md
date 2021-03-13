<h2 align="center">Ignite - Node.js - Desafio 02</h2>

---

<p align="center">
  <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F602f7ad0-d45f-476a-80b9-d8d0c45cdf64%2Fcover-node.js.png?table=block&id=c15c8a2e-2128-4603-9a36-7cc7b763c6dd&width=2730&userId=65ef7c70-b393-45fc-aebe-b0309815cdf3&cache=v2" width="300" heigth="300">
</p>

<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
</p>

---

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

---

<img src="https://readme-maker.herokuapp.com/uploads/87e2daaeab5bda5a-teste2.png" width="1200">

### Sobre

API de gerenciamento de tarefas (todo) que permite criar um usuário e fazer todo o CRUD da lista de tarefas do usuário.

### Objetivo do desafio

Trabalhar mais a fundo com middlewares no Express.

### Requisitos

- [x] Deve ser possível usuário criar uma nova tarefa quando for um plano gratuito e tiver menos que 10 tarefas
- [x] Deve ser possível usuário criar uma nova tarefa quando for um plano Pro
- [x] Deve ser possível encontrar usuário pelo username e passar objeto pela request.user
- [x] Deve ser possível encontrar usuário pelo id que é passado nas rotas e enviar como propriedade na request.user

### Regras de negócio

- [x] Não deve ser possível usuário criar uma nova tarefa quando for um plano gratuito e tiver mais que 10 tarefas
- [x] Não deve ser possível encontrar um usuário quando o username recebido na header não existe
- [x] Não deve ser possível enviar usuário como propriedade na request.user quando ele não existe

### Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js
- Express
- Uuid

### Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
