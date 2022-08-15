#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../../aula-29.3/exercicios-bloco/movies.json

# Exercício 4: Aumente em 2 o imdbRating do filme Batman.

db.movies.updateOne({ title: "Batman" }, { $inc: { imdbRating: 2 } });
