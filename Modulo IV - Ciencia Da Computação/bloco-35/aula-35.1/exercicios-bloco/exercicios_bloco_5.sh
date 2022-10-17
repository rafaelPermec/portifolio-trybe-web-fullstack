# Exercício 5: Utilizando o comando telnet ou o Netcat (nc):

# Conecte no server do exercício anterior e envie informações. O server deverá imprimir as mensagens enviadas no console.

# Pare o servidor e verifique o que aconteceu com a conexão que estava aberta com o comando telnet ou nc.
#! .

$nc -t 127.0.0.1 8085 || telnet 127.0.0.1 8085
