CREATE TABLE
  clientes (
    id serial PRIMARY KEY,
    web TEXT NOT NULL UNIQUE,
    username VARCHAR(80) NOT NULL,
    situcao BOOLEAN NOT NULL,

  );
  