#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../../aula-29.3/exercicios-bloco/movies.json

# Exercício 7: Renomeie o campo budget para estimatedBudget do filme Batman.

db.movies.updateOne({ title: "Batman" }, { $rename: { budget: "estimatedBudget" } });
