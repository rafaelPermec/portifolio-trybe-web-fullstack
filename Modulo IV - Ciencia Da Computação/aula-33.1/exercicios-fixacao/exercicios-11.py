# Exercício 11: Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?

from typing import Counter


my_list = [20, 20, 1, 2]

counter = Counter(my_list)

print(counter)
