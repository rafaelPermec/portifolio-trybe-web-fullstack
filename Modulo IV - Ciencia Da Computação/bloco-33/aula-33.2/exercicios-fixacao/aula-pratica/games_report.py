import json

# Metódo Try para captar excessões:
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


# Capturando genres:
game_genres = set()

for game in video_games:
    for genre in game["Metadata"]["Genres"].split(','):
        game_genres.add(genre)

print(game_genres)
