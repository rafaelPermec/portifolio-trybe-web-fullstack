#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 14: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics.

db.superheroes.find({ $and: [{ "publisher": "Marvel Comics" }, { "aspects.height": { $in: [180, 200] } }]});
