 #  Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

values = [6, 8, 5, 9, 10]

def lean (vector):
  total = 0;
  for index in vector:
    total += index
  return print(total / len(vector))

lean(values)
