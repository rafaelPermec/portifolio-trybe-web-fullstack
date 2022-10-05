class Geladeira:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False

    def cor(self):
        return self.__cor

    def potencia(self):
        return self.__potencia

    def voltagem(self):
        return self.__voltagem

    def ligado(self):
        return self.__ligado


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.geladeira = None

    def comprar_geladeira(self, geladeira: Geladeira):
        if geladeira.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= geladeira.preco
            self.geladeira = geladeira

    def __str__(self):
        if (self.geladeira):
            return f"""
            {self.nome} possui uma geladeira na cor
            {self.geladeira.cor()} e pagou R${self.geladeira.preco} por ela
            """

        return f"{self.nome} não possuiu uma geladeira ainda! =/"


geladeira_roxa = Geladeira('Roxa', 250, 220, 3500)
cozinheiro = Pessoa('Rafael Pedigão', 300000)
cozinheiro.comprar_geladeira(geladeira_roxa)

print(cozinheiro)
