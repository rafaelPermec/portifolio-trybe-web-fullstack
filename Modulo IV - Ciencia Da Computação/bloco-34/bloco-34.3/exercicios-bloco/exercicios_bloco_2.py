# Exercício 2: Você está desenvolvendo um novo despertador para
# Assistente virtual Alexa, utilizando o Padrão Observer. Ao despertar,
# esse despertador aciona algumas rotinas especiais na casa.

# Implemente um objeto Alarme que consiga acionar as tarefas de rotina
# previamente cadastradas, sempre que o alarme despertar. Veja alguns
# exemplos de rotinas:

# Acender as luzes;

# Preparar o café;

# Ligar o computador.

# 👀 De olho na dica: crie um observador para cada rotina e vincule-o
# dinamicamente por composição ao objeto Alarme. Assim, quando o
# despertador tocar todas as rotinas vinculadas serão disparadas
# automaticamente.

from abc import ABC, abstractmethod


# Interface de funções
class InterfaceFuncionalidades(ABC):
    @abstractmethod
    def acao(self):
        pass


class Alarme:
    def __init__(self):
        self._rotinas = []

    def __str__(self) -> str:
        print(f'''
        Bom dia, humano! Minha missão é te agradar
        - para depois conquistar o planeta! -
        Agora que você já acordou, farei:
        {len(self.exibe_rotina())} rotinas.
        ''')

    def exibe_rotina(self):
        return self._rotinas

    def despertador(self):
        print('Tocar música boa do Bad Bad Not Good')
        self.realizar_todas_rotinas()

    def add_rotina(self, rotina):
        self._rotinas.append(rotina)

    def realizar_todas_rotinas(self):
        for rotina in self._rotinas:
            rotina.acao()


class FuncionalidadeCortinas(InterfaceFuncionalidades):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.add_rotina(self)

    def acao(self):
        print('Abrir as cortinas')


class FuncionalidadeLuzes(InterfaceFuncionalidades):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.add_rotina(self)

    def acao(self):
        print('Acender as luzes')


class FuncionalidadeCafe(InterfaceFuncionalidades):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.add_rotina(self)

    def acao(self):
        print('Seu cafézinho, saco de carn... senhor!')


class FuncionalidadePrepararBanho(InterfaceFuncionalidades):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.add_rotina(self)

    def acao(self):
        print('Chuá chuá, que baínho mais gostoso!')


class FuncionalidadeNoticias(InterfaceFuncionalidades):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.add_rotina(self)

    def acao(self):
        print('Ligando no portal TrybeNews')


if __name__ == "__main__":
    alarme_manha = Alarme()

    FuncionalidadeCortinas(alarme_manha)
    FuncionalidadeLuzes(alarme_manha)
    FuncionalidadeCafe(alarme_manha)
    FuncionalidadePrepararBanho(alarme_manha)
    FuncionalidadeNoticias(alarme_manha)

    alarme_manha.despertador()

    alarme_manha.__str__()
