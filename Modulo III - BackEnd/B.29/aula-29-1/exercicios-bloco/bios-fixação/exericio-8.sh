#!/bin/bash

mongo

# Exercício 8: Conte quantos livros existem com o status = "PUBLISH".

db.books.countDocuments({ status: "PUBLISH" });

