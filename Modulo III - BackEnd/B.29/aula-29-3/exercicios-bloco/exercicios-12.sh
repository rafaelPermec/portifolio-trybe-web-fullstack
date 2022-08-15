#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=./movies.json

# Exercício 12: Utilizando o operador $regex, retorne todos os filmes em que a descrição comece com a palavra "The".

db.movies.find({ description: { $regex: /^The/ } });
