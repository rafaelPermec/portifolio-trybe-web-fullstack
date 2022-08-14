#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 7: Selecione todos os super-heróis que têm olhos verdes.

db.superheroes.find({ "aspects.eyeColor": { $eq: 'green' } });


