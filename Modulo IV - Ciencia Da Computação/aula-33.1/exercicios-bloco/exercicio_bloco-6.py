
# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo", caso não seja possível formar um triângulo.

def triangle_type (side1, side2, side3):
  is_triangle = (
    side2 + side3 > side1 and
    side1 + side3 > side2 and
    side1 + side2 > side3 
  );

  equilatero = side1 == side2 == side3;
  isósceles = side1 == side2 or side2 == side3 or side1 == side3;

  if not is_triangle:
    return print('Não é um triângulo')
  elif equilatero:
    return print('triângulo equilátero')
  elif isósceles:
    return print('triângulo isósceles')
  else:
    return print('triângulo escaleno')


triangle_type(2, 4, 6)
triangle_type(2, 2, 2)
triangle_type(8, 4, 8)
triangle_type(4, 5, 6)
