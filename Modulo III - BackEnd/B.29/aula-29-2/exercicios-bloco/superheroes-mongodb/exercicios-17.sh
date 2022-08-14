#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 17: Retorne o total de documentos que contêm o campo hairColor.

db.superheroes.countDocuments({ "aspects.hairColor": { $exists: 1 } });
