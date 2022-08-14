#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.

db.superheroes.countDocuments({ "aspects.hairColor": { $nin: ["Black", "No Hair"] } });
