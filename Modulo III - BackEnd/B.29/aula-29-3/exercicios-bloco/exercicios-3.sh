#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=./movies.json

# Exercício 3:  Retorne todos os filmes com ratings maior do que 103, exibindo apenas os campos title e ratings.

db.movies.find({ ratings: { $elemMatch: { $gt: 103 } } }, { title: 1, ratings: 1, _id: 0 });
