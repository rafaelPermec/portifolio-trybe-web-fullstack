# Exercício 11: Identifique o IP interno e externo da sua máquina.
!#.

$curl ifconfig.me

# Exercício 12: Identifique as interfaces de redes utilizadas por sua máquina e identifique qual está em uso agora.

$sudo lsof -nP -iTCP -sTCP:LISTEN

$ip a
