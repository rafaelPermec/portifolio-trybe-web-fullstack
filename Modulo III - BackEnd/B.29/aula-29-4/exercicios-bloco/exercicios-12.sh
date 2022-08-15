#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../../aula-29.3/exercicios-bloco/movies.json

# Exercício 12: Utilizando uma única operação, remova os campos budget e estimatedBudget em todos os documentos.

db.movies.updateMany({ }, { $unset: { budget: '', estimatedBudget: '' } });
