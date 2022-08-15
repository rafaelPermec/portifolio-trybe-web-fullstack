#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=./movies.json

# Exercício 8: Retorne somente o título de todos os filmes com quatro elementos no array ratings.

db.movies.find({ ratings: { $size: 4 } }, { title: 1, _id: 0 });
