#!/bin/bash

mongo

# Exercício 9: Exiba os atributos title, isbn e pageCount dos 3 primeiros livros. NÃO retorne o atributo _id.

db.books.find({}, { title: 1, isbn: 1, pageCount: 1, _id: 0 }).limit(3);


