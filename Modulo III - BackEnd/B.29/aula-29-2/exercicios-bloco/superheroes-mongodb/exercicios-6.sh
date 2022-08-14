#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 6: Retorne o total de super-heróis com 2.00m ou mais.

db.superheroes.countDocuments({ "aspects.height": { $gte: 200 } });


