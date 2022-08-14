#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 4: Retorne o total de super-heróis com até 1.80m.

db.superheroes.countDocuments({ "aspects.height": { $eq: 180 } });


