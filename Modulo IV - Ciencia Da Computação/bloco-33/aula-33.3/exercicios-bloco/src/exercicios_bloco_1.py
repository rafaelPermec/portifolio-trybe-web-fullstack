# Exercício 1: Escreva um programa que retorne uma lista com os valores
# numéricos de 1 a N, mas com as seguintes exceções:

# Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;

# Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;

# Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz” ao
# invés do número.

# Exemplo: 3 -> [1, 2, "Fizz"].

def fizzbuzz(n):
    stdout = []

    for number in range(1, n + 1):
        if number % 3 == 0 and number % 5 == 0:
            stdout.append('FizzBuzz')
        elif number % 5 == 0:
            stdout.append('Buzz')
        elif number % 3 == 0:
            stdout.append('Fizz')
        else:
            stdout.append(number)

    return stdout
