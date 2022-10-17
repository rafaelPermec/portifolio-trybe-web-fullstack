# Exercício 8: Envie pacotes para o servidor UDP utilizando o Netcat (nc).
#  Em seguida pare o servidor e perceba que como não há conexão nada é
#   sentido pelo client.
#! .

$nc -u 127.0.0.1 8084
