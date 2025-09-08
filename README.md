# Task API

Backend para gerenciamento de tarefas, desenvolvido com Node.js, TypeScript, Express e Prisma.  
Permite criar, listar, atualizar e excluir tarefas via API REST, além de fornecer documentação interativa com Swagger.

## O que esse backend faz?

- Gerencia tarefas (CRUD: criar, ler, atualizar, excluir)
- Expõe rotas REST para manipulação das tarefas
- Documenta automaticamente as rotas via Swagger
- Executa testes automatizados
- Possui pipeline CI/CD para garantir qualidade antes do deploy

## Como rodar o projeto

1. **Instale as dependências**
   ```bash
   npm install
   ```

2. **Configure o banco de dados**
   - Edite o arquivo `.env` com a string de conexão do seu banco (exemplo: PostgreSQL, SQLite, etc).
   - Execute as migrations do Prisma:
     ```bash
     npx prisma migrate dev
     ```

3. **Inicie o servidor**
   ```bash
   npm run dev
   ```
   O backend estará disponível em `http://localhost:3000`.

## Rotas da API

### Criar uma tarefa

```http
POST /tasks
Content-Type: application/json

{
  "title": "Nova tarefa",
  "description": "Descrição da tarefa"
}
```

### Listar todas as tarefas

```http
GET /tasks
```

### Buscar uma tarefa por ID

```http
GET /tasks/:id
```

### Atualizar uma tarefa

```http
PUT /tasks/:id
Content-Type: application/json

{
  "title": "Título atualizado",
  "description": "Descrição atualizada"
}
```

### Excluir uma tarefa

```http
DELETE /tasks/:id
```

## Documentação Swagger

Acesse [http://localhost:3000/docs](http://localhost:3000/docs) para visualizar e testar todas as rotas da API de forma interativa.

## Testes

Execute os testes automatizados com:
```bash
npm test
```

## CI/CD

O projeto possui pipeline automatizada no GitHub Actions.  
A cada push ou pull request na branch `main`, os testes são executados e, se aprovados, o deploy é realizado.

## Estrutura de pastas

```
src/
  routes/        # Rotas da API
  docs/          # Configuração do Swagger
  controllers/   # Lógica das rotas
  prisma/        # Configuração do ORM
  ...
```

## Contribuição

Pull requests são bem-vindos!  
Para grandes mudanças, abra uma issue primeiro.