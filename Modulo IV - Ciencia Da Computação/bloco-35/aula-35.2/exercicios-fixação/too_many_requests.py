from time import sleep
import requests


# À partir da décima requisição somos bloqueados de acessar o recurso
# Código de status 429: Too Many Requests
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response.status_code)
    sleep(3)

# Este tempo limite normalmente é definido através de experimentações
# e análise do tempo de resposta normal de uma requisição.
try:
    # recurso demora muito a responder
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    # vamos fazer uma nova requisição
    response = requests.get("http://httpbin.org/delay/1", timeout=3)
finally:
    print(response.status_code)
