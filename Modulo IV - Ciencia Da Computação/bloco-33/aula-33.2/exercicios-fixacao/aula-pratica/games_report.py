import json

try:
    with open("video_games.json", mode="r") as file:
        video_games = json.load(file)
except FileNotFoundError as apelido:
    print(f"Arquivo não encontrado. Erro: {apelido}")
except json.decoder.JSONDecodeError as apelido:
    print(f"Formatação de JSON incorreta. Erro: {apelido}")
# except:
#     print("não deu certo! =/")
finally:
    print("Tudo que era para acontecer, aconteceu. Pode coletar o lixo aqui!")


# Genres:
game_genres = set()

for game in video_games:
    print(game["Title"])
