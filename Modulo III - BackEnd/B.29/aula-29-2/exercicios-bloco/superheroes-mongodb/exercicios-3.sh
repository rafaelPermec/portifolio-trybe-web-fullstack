#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

#   Exercício 3: Retorne o total de super-heróis menores que 1.80m.

db.superheroes.countDocuments({ "aspects.height": { $lt: 180 } });


