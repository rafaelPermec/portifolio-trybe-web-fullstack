# Exercício 3: Dado um arquivo contendo estudantes e suas
# respectivas notas, escreva um programa que:

# lê todas essas informações;
# aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# escreva seus nomes em outro arquivo.
# Considere que a nota miníma para aprovação é 6.

# Arquivo:

# Copiar
# Marcos 10
# Felipe 4
# José 6
# Ana 10
# Maria 9
# Miguel 5

estudantes_em_recuperacao = []

with open('./exemplo/alunos.txt') as file:
    for line in file:
        estudantes = line
        estudantes = estudantes.split(' ')
    if int(estudantes[1]) < 6:
        estudantes_em_recuperacao.append(estudantes[0])


with open('./exemplo/alunos_recuperacao.txt', mode='w') as abaixo_de_seis:
    for aluno in estudantes_em_recuperacao:
        print(aluno)
    abaixo_de_seis.writelines(aluno)
