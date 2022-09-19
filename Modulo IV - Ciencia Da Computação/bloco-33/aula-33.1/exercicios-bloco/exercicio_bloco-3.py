# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 

def square (sides):
  if sides < 1:
    print('O lado deve ser maior que 1!')
  else:
    for _row in range(sides):
      print(sides * '*')

square(10)
