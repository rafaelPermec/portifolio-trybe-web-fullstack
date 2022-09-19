# Exercício 14: Percorra a lista do exercício 13 e imprima "Múltiplo de 3" se o elemento for divisível por 3.

ratings = [6, 8, 5, 9, 10]

for rating in ratings:
  if rating % 3 == 0:
    print(f'{rating} é multiplo de 3')
  else:
    print(rating)
