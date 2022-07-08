##### Atividade 1:

**Objetivos:**
- [x] Criar um **CRUD** completo de pessoas usuárias de uma aplicação.
- [x] Permitir que pessoas usuárias dessa aplicação façam _login_ utilizando suas credenciais.

**Rotas:**
- [x] Uma rota que lista todos as pessoas usuárias da aplicação;
- [x] Uma rota que exiba uma única pessoa usuária a partir de seu _id_;
- [x] Uma rota que permite cadastrar uma nova pessoa usuária da aplicação;
- [x] Uma rota que permite editar o registro de uma única pessoa usuária cadastrada por meio de seu _id_;
- [x] Uma rota que permite deletar uma pessoa usuária da aplicação a partir de seu _id_.

**Regras:**
- [x] Uma pessoa usuária da aplicação deve possuir as propriedades _id_, nome, _email_ e senha;
- [x] Nenhuma propriedade de uma pessoa usuária da aplicação pode ser nula ou vazia;
- [x] _id_ deve ser gerado automaticamente;
- [x] A senha deve possuir no mínimo 6 e no máximo 12 caracteres;
- [x] O nome deve possuir pelo menos 3 caracteres;
- [x] O _email_ deve possuir um formato de _email_ válido (email@email.com);
- [x] Ao criar um novo `user`, o _email_ não pode já estar cadastrado.
