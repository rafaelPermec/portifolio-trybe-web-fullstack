# Exercício 6: Você está trabalhando em um sistema de orçamentos que faz
# cálculos de impostos e precisa ser refatorado para adicionar novos, que
# no caso são o PIS (0,65%) e o COFINS (3%). Mas durante a refatoração,
# você se depara com uma má prática de código. Encontre essa má prática
# e a solucione em conjunto com a refatoração.

# class Orcamento:
#     def __init__(self, valor):
#         self.valor = valor

#     def calcular_imposto(self, imposto):
#         if imposto == 'ISS':
#             return self.__calcular_iss()
#         elif imposto == 'ICMS':
#             return self.__calcular_icms()

#     def __calcular_iss(self):
#         return self.valor * 0.1

#     def __calcular_icms(self):
#         return self.valor * 0.06

# orcamento = Orcamento(1000)
# print(f"ISS: {orcamento.calcular_imposto('ISS')}")
# print(f"ICMS: {orcamento.calcular_imposto('ICMS')}")


from abc import ABC, abstractmethod


class CalculaImposto(ABC):
    @classmethod
    @abstractmethod
    def calcular_imposto(cls, valor):
        raise NotImplementedError


class ISS(CalculaImposto):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.1


class ICMS(CalculaImposto):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.06


class PIS(CalculaImposto):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.065


class COFINS(CalculaImposto):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.03


class FacadaNoLombo:
    def __init__(self, valor):
        self.valor = valor

    def peixera_do_leao(self, navalha):
        return navalha.calcular_imposto(self.valor)


lapada_na_raxada = FacadaNoLombo(3500)

icms = lapada_na_raxada.peixera_do_leao(ICMS)
pis = lapada_na_raxada.peixera_do_leao(PIS)
iss = lapada_na_raxada.peixera_do_leao(ISS)
cofins = lapada_na_raxada.peixera_do_leao(COFINS)

total = lapada_na_raxada.valor - (icms + pis + iss + cofins)

print(f"ISS: R${lapada_na_raxada.peixera_do_leao(ISS)}")
print(f"ICMS: R${lapada_na_raxada.peixera_do_leao(ICMS)}")
print(f"PIS: R${lapada_na_raxada.peixera_do_leao(PIS)}")
print(f"COFINS: R${lapada_na_raxada.peixera_do_leao(COFINS)}")

print(f"No total de R${total}")
