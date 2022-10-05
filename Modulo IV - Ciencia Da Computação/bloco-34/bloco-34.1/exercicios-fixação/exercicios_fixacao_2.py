class Eletrodomestico:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.amperagem_atual_do_motor = 0

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.amperagem_atual_do_motor = ((
          self.__potencia / self.__voltagem
        ) / self.__velocidade) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.amperagem_atual_do_motor = 0
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Microondas(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)


class Batedeira(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)


class Fogao(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)


microondas = Microondas('Philips - Inox', 450, 127, 400)
batedeira = Batedeira('Planetaria Inox', 200, 127, 290)
fogao = Fogao('Preto - 8 bocas', 6000, 127, 8000)

print(f"O Microondas {microondas.cor} custa R${microondas.preco}")
print(f"A Batedeira {batedeira.cor} custa R${batedeira.preco}")
print(f"O Fogão {fogao.cor} custa R${fogao.preco}")
