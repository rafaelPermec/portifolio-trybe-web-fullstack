#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.

db.superheroes.find({ "aspects.height": { $gte: 200 } });


