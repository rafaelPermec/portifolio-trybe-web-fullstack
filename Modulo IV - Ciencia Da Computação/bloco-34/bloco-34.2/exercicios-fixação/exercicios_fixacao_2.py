# Guarde este objeto iterador em uma variável e
# veja o que acontece quando chamar a função nativa
# next() passando esse objeto como parâmetro.

from exercicios_fixacao_1 import my_result


next_iterator = next(my_result)

print(next_iterator)
