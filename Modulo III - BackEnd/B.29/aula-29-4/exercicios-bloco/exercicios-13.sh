#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../../aula-29.3/exercicios-bloco/movies.json

# Exercício 13: Para os filmes Batman ou Home Alone, atribua a imdbRating o valor 17, caso o valor de imdbRating seja menor que 17.

db.movies.updateMany({ $or: [ { title: "Batman" }, { title: "Home Alone" } ]}, { $max: { imdbRating: 17 } });
