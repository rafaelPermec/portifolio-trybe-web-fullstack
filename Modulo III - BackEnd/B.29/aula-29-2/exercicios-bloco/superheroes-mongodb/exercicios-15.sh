#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg, sejam Humanos ou Mutantes e não sejam publicados pela DC Comics.

db.superheroes.find({ $and: [{ "publisher": { $ne: "DC Comics" } }, { "aspects.weight": { $gt: 80, $lt: 100 } }, { "race": { $in: ["Human", "Mutant"] } }]});
