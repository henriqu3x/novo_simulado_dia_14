
# Saber+ biblioteca

Api para manutenção de um acervo para uma biblioteca


## Tecnologias utilizadas

- Node
- Express
- Prisma
- Bcrypt
- JsonWebToken
- Swagger
- Cors
- Express-async-handler


## Variaveis de Ambiente

Para executar esse projeto voce precisa adicionar essas variaveis no arquivo .env na raiz do projeto

`DATABASE_URL: Url do banco de dados`

`JWT_SECRET: Senha para criação e verificação do token`


## Rodar localmente

Clone o projeto

```bash
  git clone https://link-to-project
```

Entre no diretorio do projeto

```bash
  cd my-project
```

Instale as dependencias

```bash
  npm install
```

Depois de configurar o .env, Execute esse comando para puxar as tabelas do banco caso elas ja estejam criadas

```bash
  npx prisma db pull
```

Ou caso não estejam criadas execute esse comando para cria-las

```bash
  npx prisma db push
```
Depois gere os models

```bash
  npx prisma generate
```

Rode o servidor

```bash
  npm run dev
```


## Estrutura de pastas

O projeto esta organizado da seguinte forma

```bash
  /prisma
  /src
    /repositories
    /services
    /controllers
    /routes
    /middlewares
    /database
    /errors
    /models
```


## API Documentação

#### Para acessar o swagger e verificar a documentação da api acesse essa rota

```http
  GET /api/v1/api-docs
```


