#!/bin/bash

mongo


mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

#  Exercício 1: Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.

db.superheroes.countDocuments({});
# output: 734
