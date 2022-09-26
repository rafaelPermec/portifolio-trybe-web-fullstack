import pytest
from src.exercicios_bloco_2 import telephone_letters


def test_abc_should_be_converted_in_2():
    assert telephone_letters("ABC") == "222"


def test_def_should_be_converted_in_3():
    assert telephone_letters("DEF") == "333"


def test_ghi_should_be_converted_in_4():
    assert telephone_letters("GHI") == "444"


def test_jkl_should_be_converted_in_5():
    assert telephone_letters("JKL") == "555"


def test_mno_should_be_converted_in_6():
    assert telephone_letters("MNO") == "666"


def test_pqrs_should_be_converted_in_7():
    assert telephone_letters("PQRS") == "7777"


def test_tuv_should_be_converted_in_8():
    assert telephone_letters("TUV") == "888"


def test_wxyz_should_be_converted_in_9():
    assert telephone_letters("WXYZ") == "9999"


def test_dashe_zero_one_should_be_keeped():
    assert telephone_letters("0-1") == "0-1"


def test_expression_should_be_at_least_one_char():
    with pytest.raises(ValueError):
        telephone_letters("")


def test_expression_maximum_are_thirty_chars():
    long_expression = (
        "1111111111"  # 10 chars
        "1111111111"
        "1111111111"
        "1"
    )
    with pytest.raises(ValueError):
        telephone_letters(long_expression)


def test_expression_with_invalid_chars():
    with pytest.raises(ValueError):
        telephone_letters("I-****-MY_JOB")
