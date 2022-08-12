#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=books --file=books.json

# Exercício 8: Conte quantos livros existem com o status = "PUBLISH".

db.books.countDocuments({ status: "PUBLISH" });

