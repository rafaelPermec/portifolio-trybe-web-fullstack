#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 10: Retorne o total de super-heróis com cabelos pretos ou carecas ("No Hair").

db.superheroes.countDocuments({ "aspects.hairColor": { $in: ["Black", "No Hair"] } });
