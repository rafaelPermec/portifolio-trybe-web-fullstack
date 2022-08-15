#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../../aula-29.3/exercicios-bloco/movies.json

# Exercício 10: Utilizando o operador $currentDate, crie um campo chamado lastUpdated com o tipo timestamp no filme Home Alone.

db.movies.updateOne({ title: "Godzilla" }, { $max: { imdbRating: 8.6 }, $set: { "category.1": "thriller" } });
