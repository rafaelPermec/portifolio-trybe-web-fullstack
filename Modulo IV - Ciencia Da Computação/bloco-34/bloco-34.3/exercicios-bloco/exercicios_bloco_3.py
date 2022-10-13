# Exercício 3: Você recebeu um convite para ajudar com uma atualização
# de segurança em um sistema interno de uma empresa. Esse sistema atende
# os setores de vendas, financeiro e suporte. Para respeitar a nova Lei
# Geral de Proteção de Dados, a empresa precisa garantir que as
# informações internas serão expostas somente a quem tem necessidade.
# Assim devemos ter os seguintes perfis de acesso:

# Conta de Suporte: Acesso apenas ao sistema de suporte
# Conta de Suporte e Vendas: Acesso aos sistemas vendas e suporte
# Conta de Gerente: Acesso a todos os sistemas vendas, financeiro e suporte
# 👀 De olho na dica: esse problema lembra o de combos na hamburgueria,
# que você já conhece! Aqui precisamos de uma implementação semelhante,
# utilizando o padrão Factory.

# 👀 De olho na dica: a Account pode ser sua Interface Criadora, que
#  será herdada pelas fábricas, que podem ser classes referentes aos
#  perfis de acessos.
