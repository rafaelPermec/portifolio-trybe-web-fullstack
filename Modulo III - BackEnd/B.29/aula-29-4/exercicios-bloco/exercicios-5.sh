#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../../aula-29.3/exercicios-bloco/movies.json

# Exercício 5: Aumente em 5 o budget do filme Home Alone.

db.movies.updateOne({ title: "Home Alone" }, { $inc: { budget: 5 } });
