# Exercício 1: Faça um programa que receba um nome e imprima
# o mesmo na vertical em escada invertida. Exemplo:

# Entrada:

# PEDRO
# Saída:

# PEDRO
# PEDR
# PED
# PE
# P

def escada_vertical(word):
    for removed_letters in range(len(word)):
        for index in range(len(word) - removed_letters):
            print(word[index], end="")
    print()


if __name__ == "__main__":
    nome_input = input(
        'Digite seu nome aqui: '
    )
    escada_vertical(nome_input)
