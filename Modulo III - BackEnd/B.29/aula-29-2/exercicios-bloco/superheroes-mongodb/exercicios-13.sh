#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 13: Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m.

db.superheroes.find({ $and: [{ "race": { $ne: "Human" } }, { "aspects.height": { $lt: 180 } }]});
