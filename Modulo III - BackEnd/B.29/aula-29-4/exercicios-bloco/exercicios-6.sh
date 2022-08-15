#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../../aula-29.3/exercicios-bloco/movies.json

# Exercício 6: Multiplique por 4 o imdbRating do filme Batman.

db.movies.updateOne({ title: "Batman" }, { $mul: { imdbRating: 4 } });
