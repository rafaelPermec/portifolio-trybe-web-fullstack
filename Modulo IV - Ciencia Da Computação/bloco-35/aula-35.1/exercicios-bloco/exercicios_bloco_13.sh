# Exercício 13: No conteúdo vimos o que são os protocolos SSL e TLS. Vamos subir nosso próprio servidor HTTPS, utilizando nosso próprio certificado!

# Vamos utilizar a ferramenta OpenSSL para gerar nossos certificados. Ela já vem instalada na maioria das distros Linux. No Docker, no entanto, você vai precisar executar:
!# .

# $sudo apt-get update && apt-get install python3 openssl

# Para gerar nosso próprio certificado auto-assinado, utilize os comandos abaixo. Lembrando que, como nós estamos gerando o certificado, ele não será reconhecido por nenhuma entidade certificadora, de modo que ele só nos servirá para utilizar o protocolo TLS com o HTTPS, não sendo capaz de ser aceito pelo navegador por não ter sido aprovado por nenhuma entidade reconhecida por ele.

$openssl genrsa -out key.pem
$openssl req -new -key key.pem -out csr.pem
$openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
$rm csr.pem

# Acabamos de gerar dois arquivos, o cert.pem (o certificado) e o key.pem (chave privada). Copie os dois arquivos para um diretório onde vamos criar nosso servidor HTTPS.

$mkdir https-server 
$mv cert.pem https-server && mv key.pem https-server/
$cd https-server

# Agora vamos escrever um servidor https usando os módulos nativos do python ssl e http.server. Embora esses módulos tenham muitos muitos recursos (muitos mesmo), nós vamos usar apenas alguns. Tente seguir as instruções a seguir:

# 4.1 Crie um contexto SSL com a classe SSLContext, usando o protocolo de versão mais alta disponível para servidores. (dica: as opções estão listadas na documentação).

# 4.2 Carregue no contexto SSL a cadeia de certificação, passando tanto a o arquivo de certificação quanto a sua chave. (dica: existe um método para isso).

# 4.3 Crie uma instância de HTTPServer. O endereço deve ser uma tupla ('localhost', 8000) e para responder as requisições, use SimpleHTTPRequestHandler. (dica: apesar do exemplo na documentação, não use with).

# 4.4 Crie um socket server-side usando o método wrap_socket do seu contexto SSL. Passe como parâmetro o socket do servidor (server.socket).

# 4.5 Substitua o socket do servidor pelo socket que você acabou de criar.

# 4.6 Execute o servidor com o método serve_forever.

# Acesse o servidor no endereço https://localhost:8000/ utilizando o Firefox (precisa ser o Firefox). Perceba que ele vai informar que o certificado não é reconhecido por ele, pois não foi assinado por nenhuma autoridade da confiança dele.

# 5.1 Chrome e Safari se recusam a acessar um site cujo certificado não está assinado por NENHUMA autoridade certificadora. Existem instruções para agir como uma autoridade certificadora, mas não precisa seguir por esse caminho.

# Acesse o servidor novamente, porém desta vez utilizando cURL (de fora do Docker, se você estiver usando).

# Por último, vamos utilizar um recurso do cURL, somente para testes (somente utilize, caso realmente você esteja esperando por aquilo), que é o parâmetro -k ou --insecure. Com ele, falamos para o nosso cURL prosseguir a request mesmo sabendo que a conexão não é “confiável”.