# Exercício 10: Agora, vamos utilizar um tipo de proxy que pode ser bastante útil no nosso cotidiano como pessoas desenvolvedoras: o NGROK. Com ele conseguimos criar um túnel para o nosso localhost.

# Crie um servidor HTTP em sua máquina executando na porta 80 (pode ser um front-end ou um back-end criado em aulas anteriores).

# Baixe o ngrok e extraia o arquivo baixado em uma pasta de sua preferência, conforme instruções do site oficial.

# Conforme instruções do site, crie um túnel para a porta 80 de sua máquina.

# Acesse o o link disponibilizado em seu navegador. Utilize ele para acessar de outros dispositivos, como seu smartphone ou outro computador 😎.
#! .

$mkdir reuse-server && cd reuse-server

$python3 -m http.server 80

$unzip /ngrok.zip

$./ngrok http 80
