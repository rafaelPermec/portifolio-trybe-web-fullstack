#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 16: Retorne o total de documentos que não contêm o campo race.

db.superheroes.find({ race: { $exists: false } });
