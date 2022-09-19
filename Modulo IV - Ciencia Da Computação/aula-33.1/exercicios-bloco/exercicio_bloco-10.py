# Exercício 10: Um posto está vendendo combustíveis com a seguinte tabela de descontos:
#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.

A_price = 1.90
G_price = 2.50

def fuel_store (type, litters):
  if type == 'A':
    if litters <= 20:
      total_price = (litters * A_price) - (litters * 3/100)
      return print(f'R${total_price}')
    if litters > 20:
      total_price = (litters * A_price) - (litters * 5/100)
      return print(f'R${total_price}')
  elif type == 'G':
    if litters <= 20:
      total_price = (litters * G_price) - (litters * 4/100)
      return print(f'R${total_price}')
    if litters > 20:
      total_price = (litters * G_price) - (litters * 6/100)
      return print(f'R${total_price}')

fuel_store('A', 10)
fuel_store('A', 30)
fuel_store('G', 10)
fuel_store('G', 30)
