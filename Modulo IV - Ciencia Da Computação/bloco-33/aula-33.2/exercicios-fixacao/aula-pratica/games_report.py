import json

try:
    with open("video_games.json", mode="r") as file:
        video_games = json.load(file)
        print(video_games[0]["Title"])
except FileNotFoundError:
    print("Arquivo não encontrado")
except json.decoder.JSONDecodeError:
    print("Formatação de JSON incorreta")
