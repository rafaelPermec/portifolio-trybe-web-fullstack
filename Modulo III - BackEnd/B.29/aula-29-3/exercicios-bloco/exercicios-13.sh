#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=./movies.json

# Exercício 13: Utilizando o operador $regex, retorne todos os filmes em que a descrição termine com a palavra "humanity.".

db.movies.find({ description: { $regex: /humanity.$/ } });
