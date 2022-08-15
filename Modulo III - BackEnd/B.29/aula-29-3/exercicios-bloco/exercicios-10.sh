#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=./movies.json

# Exercício 10: Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199, exibindo apenas os campos title, ratings e category.

db.movies.find({ $or: [{ category: { $all: ['sci-fi'] } },{ ratings: { $gt: 109 } }] }, { title: 1, ratings: 1, category: 1, _id: 0 });
