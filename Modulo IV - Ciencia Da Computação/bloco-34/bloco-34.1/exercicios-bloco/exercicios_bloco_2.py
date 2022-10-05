from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, numbers):
        return sum(numbers) / len(numbers)

    @classmethod
    def mediana(cls, numbers):
        numbers.sort()
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

    @classmethod
    def moda(cls, numbers):
        number, _ = Counter(numbers).most_common()[0]
        return number


list_of_numbers = [30, 40, 50, 42, 80, 45, 30, 40, 55, 50, 32, 30]

print(Estatistica.media(list_of_numbers))
print(Estatistica.mediana(list_of_numbers))
print(Estatistica.moda(list_of_numbers))
