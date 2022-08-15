#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../../aula-29.3/exercicios-bloco/movies.json

# Exercício 2: Altere budget para 1 no filme Godzilla.

db.movies.updateOne({ title: "Godzilla" }, { $set: { budget: 1 } });
