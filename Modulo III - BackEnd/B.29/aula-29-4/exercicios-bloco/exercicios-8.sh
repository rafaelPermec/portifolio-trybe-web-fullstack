#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../../aula-29.3/exercicios-bloco/movies.json

# Exercício 8: Utilize o operador $min para alterar o budget para 5 do filme Home Alone.

db.movies.updateOne({ title: "Home Alone" }, { $min: { budget: 5 } });
