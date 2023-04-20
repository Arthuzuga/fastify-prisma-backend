# Fastify + Prisma + SQLite

- Projeto com foco de criar um backend simples usando:

1. fastify como framework de nodeJS;
2. prisma como ORM;
3. SQLite como base de dados.

## Como rodar

- Clone o projeto através do comando:

```git
git clone git@github.com:Arthuzuga/fastify-prisma-backend.git
```

- Instale as dependências do projeto:

```javascript
yarn install
```

- Rode as migrações iniciais

```javascript
yarn migrate --name init
```

- Levante o servidor na porta 3001

```javascript
yarn dev
```

## Como contribuir

### Criando novo modelo de dados

- Na pasta prisma, dentro do arquivo schema.prisma, crie um novo modelo para a nova tabela do banco de dados do domínio que deseja trabalhar;

- Rode o comando de migração para criar as tabelas no banco de dados.

### Criando novas rotas

- Na pasta routes, crie um arquivo com o domínio que deseja trabalhar

- Crie as rotas internas seguindo o modelo do arquivo **_routes/questions.ts_** primeiramente sem integração com o prisma e entidades de validação.

- Cadastre as novas rotas no arquivo **_server.ts_** adicionando no formato similar ao abaixo

```javascript
app.register(newRoutes);
```

### Criando novas entidades de validações

- Na pasta entities, crie um arquivo com o domínio com o mesmo nome da nova rota;

- Para requisições de POST, PATCH ou PUT, crie funções de validação com o nome do tipo de ação;

- Crie o parser baseado no formato da lib zod, exemplo no arquivo **_entities/questions.ts_**;

- Exporte a devolutiva da validação já com o parser feito;

- Adicione as entidades às requests das rotas.

### Criando novos serviços

- Na pasta services, crie um arquivo com o domínio com o mesmo nome da nova rota e da nova entidade;

- Instancie o prisma;

- Crie funções para todo o CRUD (Create-Read-Update-Delete) do novo modelo que deseja fazer de ação;

- Exporte as funções de requests;

- Adicione as funções às requests das rotas.
