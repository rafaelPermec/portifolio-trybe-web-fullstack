estudantes_em_recuperacao = []

with open('./exemplo/alunos.txt') as file:
  for line in file:
    estudantes = line
    estudantes = estudantes.split(' ')
    if int(estudantes[1]) < 6:
      estudantes_em_recuperacao.append(estudantes[0])


with open('./exemplo/alunos_recuperacao.txt', mode = 'w') as abaixo_de_seis:
  for aluno in estudantes_em_recuperacao:
    print(aluno)
    abaixo_de_seis.writelines(aluno)
