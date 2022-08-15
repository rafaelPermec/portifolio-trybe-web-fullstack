#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=./movies.json

# Exercício 9: Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2.

db.movies.find({ ratings: { $size: 4 } }, { title: 1, _id: 0 });
