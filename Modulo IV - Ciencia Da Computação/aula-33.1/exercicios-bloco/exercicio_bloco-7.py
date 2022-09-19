# Exercício 7: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.

number_list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 9, 1, -40]


def lowest_number (numbers):
  lowest = numbers[0]
  for number in numbers:
    if number < lowest:
      lowest = number
  return print(lowest)


lowest_number(number_list)


def minimum_function (numbers):
  return print(min(numbers))

minimum_function(number_list)
