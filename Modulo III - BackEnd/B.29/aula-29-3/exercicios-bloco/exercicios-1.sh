#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=./movies.json

# Exercício 1: Utilizando o operador $all, retorne todos os filmes que contenham action e adventure no array category.

db.movies.find({ category: { $all: ['action', 'adventure'] } });
