# Exercício 12: O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Por exemplo, o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5. Escreva um código que calcule o fatorial de um número inteiro.

number = 5
counter = 1
result = 1

while counter <= number:
  result *= counter
  counter += 1
  
print(result)
