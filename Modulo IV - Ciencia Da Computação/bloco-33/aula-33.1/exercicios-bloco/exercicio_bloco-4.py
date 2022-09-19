# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def bigger_name (vector):
  biggest_name = vector[0]
  for name in names:
    if len(name) > len(biggest_name):
      biggest_name = name
  return print(biggest_name)

bigger_name(names)
