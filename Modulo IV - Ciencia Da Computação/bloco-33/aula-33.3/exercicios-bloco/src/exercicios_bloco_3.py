# Exercício 3 Faça uma função que valide um e-mail nos seguintes critérios
# abaixo, lançando uma exceção quando o valor for inválido.
# Endereços de email válidos devem seguir as seguintes regras:

# Devem seguir o formato nomeusuario@nomewebsite.extensao;

# O nome de usuário deve conter somente letras, dígitos, traços e underscores;

# O nome de usuário deve iniciar com letra;

# O nome do website deve conter somente letras e dígitos;

# O tamanho máximo da extensão é três.

# 🦜 As funções isalpha, isdigit e isnumeric podem ser utilizadas para
# verificar se uma letra ou palavra são compostas de somente
# caracteres ou dígitos.
# Exemplo:
# "1".isalpha() -> False , "a".isalpha() -> True, "123".isnumeric() -> True.

def validate_email(email):
    index = 0
    if not email[index].isalpha():
        raise ValueError("Username should starts with a letter")

    # validate username
    while email[index] != "@" and index < len(email):
        letter = email[index]
        if (
            not letter.isalpha()
            and not letter.isdigit()
            and letter not in ("_", "-")
        ):
            raise ValueError(
                "Username should contains only letters, "
                "digits, dashes or underscores"
            )
        index += 1
    index += 1  # @
    # validate website
    while email[index] != "." and index < len(email):
        letter = email[index]
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError(
                "Website should contains only letters, and digits"
            )
        index += 1

    index += 1  # .
    # validate extension
    counter = 0
    while index < len(email):
        counter += 1
        index += 1
    if counter > 3:
        raise ValueError("Extension maximum length is 3")
    return None
