# 🚀 Exercício 4: Dado o seguinte arquivo no formato JSON,
# leia seu conteúdo e calcule a porcentagem de livros em cada categoria
# em relação ao número total de livros. O resultado deve ser
# escrito em um arquivo no formato CSV como o exemplo abaixo.

# Saída:

# Copiar
# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

import json

with open('./exercicios-bloco/inputs/books.json', mode='r') as file:
    all_books = json.load(file)

books_categorie = set()

for book in all_books:
    for categories in book["categories"]:
        for category in categories.split(','):
            books_categorie.add(category)

print(books_categorie)
