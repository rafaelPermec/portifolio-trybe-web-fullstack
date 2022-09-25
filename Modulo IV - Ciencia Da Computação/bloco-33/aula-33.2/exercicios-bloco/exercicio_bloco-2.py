# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a
# pessoa usuária tenha que adivinhar uma palavra que será mostrada
# com as letras embaralhadas.
# O programa terá uma lista de palavras e escolherá uma aleatoriamente.
# O jogador terá três tentativas para adivinhar a palavra.
# Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou
# ou perdeu o jogo.

# 🦜 Para embaralhar uma palavra faça:
# scrambled_word = "".join(random.sample(word, len(word)))

# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando
# o método choice:
# random.choice(["word1", "word2", "word3"]) -> "word2".

import random

WORDS = [
  'cadê',
  'meu',
  'feedback',
  'estruturado',
  'apos',
  'estudo',
  'anual',
  'voltado',
  'para',
  'empresa',
  'XP?'
]

MAX_ATTEMPTS = 3


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
    secret, scrambled_word = secret_word(WORDS)
    print(
      "Let's play a game! You have 3 turns to scramble back a word! \n"
      f'Scrambled word is {scrambled_word}'
      )
    guesses = guesses()
    check_results(secret, guesses)
