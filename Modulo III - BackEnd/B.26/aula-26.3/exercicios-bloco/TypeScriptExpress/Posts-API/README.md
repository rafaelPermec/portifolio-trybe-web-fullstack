**Objetivos:**
- [x] Criar um **CRUD** completo de _Blog Posts_.
- [x] Listar _posts_ por autor, categoria ou data de criação.

**Rotas:**
- [x] Uma rota que lista todos os posts;
- [x] Uma rota que exiba um único post por meio de seu _id_;
- [x] Uma rota que permite cadastrar um novo post;
- [x] Uma rota que permite editar o registro de um post cadastrado a partir de seu _id_;
- [x] Uma rota que permite deletar um post a partir de seu _id_.
- [x] Uma rota que recebe via `query params` o **autor, a categoria ou a data de criação** e lista todos os _posts_ que se encaixem no filtro;

**Regras:**
- [x] Um post deve possuir as propriedades _id_, título, nome do autor, nome da categoria e data de criação;
- [x] Nenhuma propriedade de um _post_ pode ser nula ou vazia;
- [x] O nome do autor deve possuir pelo menos 3 caracteres;
- [x] A nome da categoria deve possuir pelo menos 3 caracteres;
- [x] A `query param` de data de criação deve ser no formato: aaaa-mm-dd;
