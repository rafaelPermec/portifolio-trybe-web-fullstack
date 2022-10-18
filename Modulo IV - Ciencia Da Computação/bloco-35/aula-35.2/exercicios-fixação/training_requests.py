import requests

SUBLINHADO = "\033[4m"
RESET = "\033[0m"

# Requisição do tipo GET
response = requests.get("https://www.betrybe.com/")
print(f"""\n {SUBLINHADO}response.status_code:{RESET} \n {
  response.status_code
  }""")  # código de status
print(f'''\n {SUBLINHADO}response.headers["Content-Type"]:{RESET} \n {
  response.headers["Content-Type"]
  }''')  # conteúdo no formato html

# Conteúdo recebido da requisição
print(f"\n {SUBLINHADO}response.text:{RESET} \n {response.text}")

# Bytes recebidos como resposta
print(f"\n {SUBLINHADO}response.content:{RESET} \n {response.content}")

# Requisição do tipo post
response = requests.post("http://httpbin.org/post", data="some content")
print(f"\n {SUBLINHADO}response.text:{RESET} \n {response.text}")

# Requisição enviando cabeçalho (header)
response = requests.get(
  "http://httpbin.org/get",
  headers={
    "Accept": "application/json"
    })
print(f"\n {SUBLINHADO}response.text:{RESET} \n {response.text}")

# Requisição a recurso binário
response = requests.get("http://httpbin.org/image/png")
print(f"\n {SUBLINHADO}response.content:{RESET} \n {response.content}")

# Recurso JSON
response = requests.get("http://httpbin.org/get")

# Equivalente ao json.loads(response.content)
print(f"\n {SUBLINHADO}response.json():{RESET} \n {response.json()}")

# Podemos também pedir que a resposta lance uma exceção caso o status
# não seja OK
response = requests.get("http://httpbin.org/status/404")
print(f"\n {SUBLINHADO}response.raise_for_status():{RESET}")
response.raise_for_status()
