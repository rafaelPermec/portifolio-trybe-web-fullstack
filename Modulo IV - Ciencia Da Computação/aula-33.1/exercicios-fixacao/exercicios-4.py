# Exercício 4: Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.

from pickletools import float8
from unicodedata import decimal


book = 24.90
book_in_library = 24.90 * 0.6
first_transport = 3
second_transport = 0.75

print('O custo total para 60 unidades do livro será', 'R$', float.__round__((book_in_library * 60) + first_transport + (second_transport * 59)))
