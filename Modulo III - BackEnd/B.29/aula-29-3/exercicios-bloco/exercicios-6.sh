#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=./movies.json

# Exercício 6: Retorne os filmes da categoria adventure e com ratings maior do que 103, exibindo apenas os campos title, ratings e category.

db.movies.find({ ratings: { $elemMatch: { $gte: 103 } }, category: { $all: ["adventure"] } }, { title: 1, ratings: 1, category: 1, _id: 0 });
