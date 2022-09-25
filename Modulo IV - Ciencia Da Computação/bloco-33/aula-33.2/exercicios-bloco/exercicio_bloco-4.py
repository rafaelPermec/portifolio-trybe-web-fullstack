# 🚀 Exercício 4: Dado o seguinte arquivo no formato JSON,
# leia seu conteúdo e calcule a porcentagem de livros em cada categoria
# em relação ao número total de livros. O resultado deve ser
# escrito em um arquivo no formato CSV como o exemplo abaixo.

# Saída:

# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

# PS: O percentual do exemplo acima esta errado, simplesmente pelo fato
# de que as pessoas fingem que não precisamos de matematica
# na programação =/

import json

with open('./exercicios-bloco/inputs/books.json', mode='r') as file:
    all_books = json.load(file)


def count_books_by_categorie(books):
    categories = {}
    for book in books:
        for category in book['categories']:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calcultate_percentage_of_books(books):
    all_books_by_percentage = []
    for book in books.items():
        percentage_books = {}
        percentage_books['category'] = book[0]
        percentage_books['percentage'] = f'''{
          round(
            (int(book[1]) * 100) / len(all_books), 2
            )
          }%'''
        all_books_by_percentage.append(percentage_books)

    return print(all_books_by_percentage)


counting_books_categories = count_books_by_categorie(all_books)
calcultate_percentage_of_books(counting_books_categories)
