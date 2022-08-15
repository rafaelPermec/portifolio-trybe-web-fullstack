#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=./movies.json

# Exercício 11: Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family", mas que não tenha o imdbRating menor que 7.

db.movies.find({ $and: [{ category: { $in: ['adventure', 'family'] } },{ ratings: { $size: 4 } }, { imdbRating: { $not: { $lt: 7 }} }] }, { title: 1, ratings: 1, category: 1, _id: 0 });
