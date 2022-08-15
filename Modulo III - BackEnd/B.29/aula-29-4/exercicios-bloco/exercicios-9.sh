#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../../aula-29.3/exercicios-bloco/movies.json

# Exercício 9: Utilize o operador $max para alterar o imdbRating para 8.6 do filme Godzilla. Além disso, altere a categoria "adventure" para "thriller" do filme Godzilla.

db.movies.updateOne({ title: "Godzilla" }, { $max: { imdbRating: 8.6 }, $set: { "category.1": "thriller" } });
