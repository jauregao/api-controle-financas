CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    sobrenome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    usuario TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL
);

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    descricao TEXT UNIQUE NOT NULL
);

CREATE TABLE transacoes (
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL,
    valor INTEGER NOT NULL,
    data date,
    categoria_id INTEGER REFERENCES categorias(id),
    categoria_nome TEXT REFERENCES categorias(descricao),
    usuario_id INTEGER REFERENCES usuarios(id),
    tipo TEXT NOT NULL
);

INSERT INTO categorias (descricao) VALUES ('Alimentação'), ('Assinaturas e Serviços'), ('Casa'),
('Mercado'), ('Cuidados Pessoais'), ('Educação'), ('Lazer'), ('Roupas'), ('Saúde'), ('Transporte'),
('Salário');