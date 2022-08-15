#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=./movies.json

# Exercício 4: Retorne todos os filmes com ratings entre 100 e 105, exibindo apenas os campos title e ratings.

db.movies.find({ ratings: { $elemMatch: { $gte: 100, $lte: 105  } } }, { title: 1, ratings: 1, _id: 0 });
