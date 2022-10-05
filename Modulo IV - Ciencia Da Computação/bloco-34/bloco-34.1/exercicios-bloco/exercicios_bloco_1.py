class TV:
    def __init__(self, tamanho):
        self._volume = 50
        self.canal = 1
        self.tamanho = tamanho
        self._ligada = False

    def aumentar_volume(self):
        if self._volume < 99:
            self._volume += 1

    def diminuir_volume(self):
        if self._volume > 0:
            self._volume -= 1

    def modificar_canal(self, canal):
        if canal <= 1 or canal >= 99:
            raise ValueError('Assine um plano de TV a cabo')
        else:
            self.canal = canal

    def ligar_desligar(self):
        self._ligada = not self._ligada


tv = TV(50)
tv.ligar_desligar()
tv.aumentar_volume()
tv.modificar_canal(42)

print(f'''
  A TV de {tv.tamanho}" está ligada? {tv._ligada}
  Ela se encontra no volume {tv._volume} e no canal {tv.canal}
''')
