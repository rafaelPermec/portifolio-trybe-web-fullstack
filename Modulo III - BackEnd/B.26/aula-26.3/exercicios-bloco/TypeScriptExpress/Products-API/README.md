**Objetivos:**
- [x] Criar um **CRUD** completo de produtos.
- [x] Listar os produtos por faixa de preço.
- [x] Listar os produtos que ainda não estão vencidos.

**Rotas:**
- [x] Uma rota que lista todos os produtos;
- [x] Uma rota que exiba um único produto por meio de seu _id_;
- [x] Uma rota que permite cadastrar um novo produto;
- [x] Uma rota que permite editar o registro de um produto cadastrado;
- [x] Uma rota que permite deletar um produto a partir de seu _id_.
- [x] Uma rota que recebe via `query params` um preço inicial e final e listar todos produtos que se encaixem no filtro;
- [x] Uma rota que lista somente os produtos que ainda não estão vencidos;

**Regras:**
- [x] Um produto deve possuir as propriedades _id_, nome, nome da marca, preço, data de fabricação e data de validade;
- [x] Nenhuma propriedade de um produto pode ser nula ou vazia;
- [x] O nome da marca deve possuir pelo menos 3 caracteres;
- [x] O preço não pode receber um valor negativo;
- [x] A data de fabricação não pode ser igual a data de validade;
- [x] As `query params` de valor de preço inicial e final não podem receber valores negativos;
