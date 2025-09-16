//CommonJS => require
//const http = require("http");

//ESModules => import/export
import http from "node:http";

// - HTTP
//   -  Método HTTP
//   -  URL

// GET, POST, PUT, PATCH ,DELETE

// GET - Buscar um recurso do back-end
// POST - Criar um recurso no back-end
// PUT - Atualizar um recurso no back-end
// PATCH - Atualizar uma informação específica de um recurso no back-end
// DELETE - Deletar um recurso no back-end

// GET /users -  Buscando usuários do back-end
// POST /users - Criando um usuário no back-end

// Stateful - Mantém o estado da aplicação (Ex: sessão de usuário)
// Stateless - Não mantém o estado da aplicação (Ex: requisições HTTP)

// JSON - JavaScript Object Notation

// Cabeçalhos (Headers) - Metadados da requisição ou resposta

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    // Early return
    return res
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({ id: 1, name: "John Doe", email: "johndoe@example.com" });

    return res.end("Criação de usuário");
  }

  return res.end("Hello World!");
});

server.listen(3333);
