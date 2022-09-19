# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

paint_cover_per_litter = 3
paint_can_size = 18
paint_can_cost = 80

def gallons_per_square_metter (area):
  required_litters = area / paint_cover_per_litter
  required_cans = required_litters // paint_can_size
  if required_litters % 18:
    required_cans += 1
  return print('Número de lata necessárias:', required_cans, 'No total de:', f'R${required_cans * paint_can_cost}')

gallons_per_square_metter(300)
