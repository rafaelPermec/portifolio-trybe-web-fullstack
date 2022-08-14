#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 12: Utilizando o operador $not, retorne o total de super-heróis que não tenham mais de 1.80m de altura.

db.superheroes.countDocuments({ "aspects.height": { $not: { $ne: 180 }  } });
