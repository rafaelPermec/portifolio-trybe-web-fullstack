from src.exercicios_bloco_4 import filter_valid_emails

email = "username@website.com"


def test_if_dont_have_emails_returns_empty_list():
    assert filter_valid_emails([]) == []


def test_only_valid_emails():
    emails = [email]
    expected_emails = [email]
    assert filter_valid_emails(emails) == expected_emails


def test_invalid_emails_should_be_filtered():
    emails = ["inv*alid@website.com"]
    expected_emails = []
    assert filter_valid_emails(emails) == expected_emails


def test_valid_and_invalid_emails_returns_only_valids():
    emails = [email, "inv*alid@website.com"]
    expected_emails = [email]
    assert filter_valid_emails(emails) == expected_emails
