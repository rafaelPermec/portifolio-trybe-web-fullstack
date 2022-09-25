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
# finally:
#     print(
#       "Tudo que era para acontecer, aconteceu. Pode coletar o lixo aqui!"
#     )

# Capturando titles:
game_titles = set()

for game in video_games:
    for title in game["Title"].split(','):
        game_titles.add(title)

print(f'São {len(game_titles)} titulos disponiveis.')

# Capturando genres:
game_genres = set()

for game in video_games:
    for genre in game["Metadata"]["Genres"].split(','):
        game_genres.add(genre)

print(
  f"São {len(game_genres)} generos de jogos citados no documento. \n"
  f"Os generos citados no documento são: {game_genres}"
  )

# Capturando consoles:
console = set()

for game in video_games:
    console.add(game['Release']['Console'])

print(
  f"{len(console)} consoles estão disponiveis para jogar! \n"
  f'Os consoles disponiveis no documento são: {console}'
  )
