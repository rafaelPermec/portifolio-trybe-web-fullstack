# Exercício 5: Em um sistema de compras online, temos um código que
# efetua a compra do pedido. Este código possui code smells e precisa
# ser refatorado. Qual é o code smell? Efetue a refatoração do código.

# class Order:
#     def __init__(
#         self,
#         items,
#         credit_card_name,
#         credit_card_number,
#         credit_card_month,
#         credit_card_year,
#         credit_card_security_code,
#     ):
#         self.items = items
#         self.credit_card_name = credit_card_name
#         self.credit_card_number = credit_card_number
#         self.credit_card_month = credit_card_month
#         self.credit_card_year = credit_card_year
#         self.credit_card_security_code = credit_card_security_code

class Order:
    def __init__(self, items, credit_card):
        self.items = items
        self.credit_card = credit_card


class CreditCard:
    def __init__(self, name, number, month, year, security_code):
        self.name = name
        self.number = number
        self.month = month
        self.year = year
        self.security_code = security_code
