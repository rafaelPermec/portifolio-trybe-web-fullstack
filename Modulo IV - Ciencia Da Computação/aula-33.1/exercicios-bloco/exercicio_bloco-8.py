# Exercício 8: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:

def print_triangle (rows):
  for row in range(1, rows + 1):
    print(row * '*')


print_triangle(10)
