# Em seu terminal Python, crie uma lista (do conhecido tipo list)
# com alguns elementos. Agora, chame a função nativa iter(),
# passando essa lista como parâmetro, e veja que é retornado
# um objeto iterador do tipo list_iterator.

my_list = [
            {"name": "Morgana", "age": "22"},
            {"name": "Sarah", "age": "24"},
            {"name": "Will", "age": "33"},
            {"name": "Rick", "age": "23"},
            {"name": "John", "age": "22"},
            {"name": "Peter", "age": "35"},
            {"name": "Groove", "age": "48"},
            {"name": "Sam", "age": "19"},
        ]


my_result = iter(my_list)

print(my_result)
