# Exercício 5: Utilizando o arquivo pokemons.json, vamos escrever um
# programa que sorteie um pokemon aleatoriamente. O programa deve perguntar
# à pessoa usuária “Quem é esse pokemon?” até que ela o acerte.
# A cada erro, apresente um número de letras do nome daquele pokemon
# igual ao número de erros.

# Exemplo: O pokemon sorteado pelo programa é butterfree;
# a pessoa usuária chuta charizard; o programa deve exibir b. Em seguida,
# a pessoa chuta blastoise; o programa deve exibir bu; e assim por diante
# até a pessoa acertar.

# 🦜 Você pode utilizar o método choice do modulo random para sortear
# aleatoriamente um pokemon.
# Ex: random.choice(pokemon) -> {"name": "Pikachu" }.

import json
import random


def shot(pokemon_name):
    wrong_shot = True
    num_of_shots = 0
    while (wrong_shot):
        num_of_shots += 1
        shot = input("Quem é esse pokemon? ")
        if (shot == pokemon_name):
            print("Você acertou! Parabéns!")
            break
        elif num_of_shots == len(pokemon_name):
            print("Você errou!")
            break
        else:
            print("Dica: ", end="")
            for i in range(0, num_of_shots):
                print(pokemon_name[i], end="")
            print("")


if __name__ == "__main__":
    with open("./exercicios-bloco/inputs/pokemons.json") as file:
        pokemons = json.load(file)["results"]
        pokemon = random.choice(pokemons)
        pokemon_name = pokemon["name"]

    shot(pokemon_name)
