from src.exercicios_bloco_1 import fizzbuzz


def test_fizzbuzz_returning_a_list():
    assert fizzbuzz(5) == [1, 2, 'Fizz', 4, 'Buzz']


def test_fizzbuzz_divisible_for_three():
    assert fizzbuzz(3)[-1] == 'Fizz'
    assert fizzbuzz(6)[-1] == 'Fizz'
    assert fizzbuzz(12)[-1] == 'Fizz'


def test_fizzbuzz_divisible_for_five():
    assert fizzbuzz(5)[-1] == 'Buzz'
    assert fizzbuzz(10)[-1] == 'Buzz'
    assert fizzbuzz(20)[-1] == 'Buzz'


def test_fizzbuzz_divisible_for_three_and_five():
    assert fizzbuzz(15)[-1] == 'FizzBuzz'
    assert fizzbuzz(30)[-1] == 'FizzBuzz'
    assert fizzbuzz(45)[-1] == 'FizzBuzz'
