# Exercício 9: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.

def integer_number (n):
  total = 0
  for number in range(1, n + 1):
    total += number
  return print(total)


integer_number(10)
integer_number(42)
integer_number(5)


def summ (n):
    return print(sum(range(1, n + 1)))


summ(10)
summ(42)
summ(5)
