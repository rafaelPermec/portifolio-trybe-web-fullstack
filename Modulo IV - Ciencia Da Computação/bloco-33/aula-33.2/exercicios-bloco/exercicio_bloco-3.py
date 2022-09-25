# Exercício 3: Modifique o exercício anterior para que as
# palavras sejam lidas de um arquivo.
# Considere que o arquivo terá cada palavra em uma linha.

import random

MAX_ATTEMPTS = 3


def reading_file(file):
    return [word.strip() for word in file]


def secret_word(words):
    secret = random.choice(words)
    scramble_secret = ''.join(random.sample(secret, len(secret)))
    return secret, scramble_secret


def guesses():
    total_guesses = []
    for _attempt in range(MAX_ATTEMPTS):
        guess = input('Guess the word: ')
        total_guesses.append(guess)
    return total_guesses


def check_results(secret, guesses):
    if secret in guesses:
        print(f'You won!! The secret word is: {secret}')
    else:
        print(f'You lose... The secret word is: {secret} =/')


if __name__ == "__main__":
    with open('./inputs/words.txt') as file:
        WORDS = reading_file(file)
    secret, scrambled_word = secret_word(WORDS)
    print(
      "Let's play a game! You have 3 turns to scramble back a word! \n"
      f'Scrambled word is {scrambled_word}'
      )
    guesses = guesses()
    check_results(secret, guesses)
