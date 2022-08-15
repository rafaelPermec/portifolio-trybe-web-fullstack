#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 19: Remova todos os documentos publicados pelo George Lucas.

db.superheroes.remove({ "publisher": "George Lucas" });

db.superheroes.countDocuments({});
# 719
