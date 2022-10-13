# Exercício 3: Com o baralho tradicional pronto,
# implemente uma subclasse de Baralho chamada BaralhoInverso,
# que produz um iterador
# para fornecer as cartas na ordem inversa. Ou seja, sem embaralhar,
# a primeira carta deve ser o <K de paus> em vez do <A de copas>,
# como acontece na implementação atual.

from collections.abc import Iterator
from exercicios_bloco_2 import Baralho


class IteradorReverso(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._page = -1

    def __next__(self):
        try:
            carta = self._cartas[self._page]
        except IndexError:
            raise StopIteration()
        else:
            self._page -= 1
            return carta


class BaralhoReverso(Baralho):
    def __iter__(self):
        return IteradorReverso(self._cartas)


print(next(iter(BaralhoReverso())))
