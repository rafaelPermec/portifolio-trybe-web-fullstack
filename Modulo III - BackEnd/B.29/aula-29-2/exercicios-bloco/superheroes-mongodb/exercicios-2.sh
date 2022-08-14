#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

#  Exercício 2: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está em centímetros.

db.superheroes.find({ "aspects.height": { $lt: 180 } });


