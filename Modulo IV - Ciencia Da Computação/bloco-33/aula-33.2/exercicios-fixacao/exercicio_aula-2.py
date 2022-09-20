# Exercício 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: “Erro ao somar valores, {valor} é um valor inválido”. Ao final, você deve imprimir a soma dos valores válidos.

numeros_usuario = input(
  '''Por favor, coloque os valores que deseja somar, separados por espaço! 
  Aqui: '''
  )

input_numeros_em_dict = numeros_usuario.split(' ')

soma = 0

for numero in input_numeros_em_dict:
  if not numero.isdigit():
    print(f'O caracter {numero} não é um número inteiro valido.')
  else: 
    soma += int(numero)

print(f'''A soma dos valores que você digitou é: 

TANTANTAAAAAAAN ! ~fogos de arificio~ ~xablau pra todo lado~

{soma} !!!''')

