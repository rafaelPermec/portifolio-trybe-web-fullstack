#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=../superheroes-mongodb/superheroes.json

# Exercício 18: Remova apenas um documento publicado pela Sony Pictures.

db.superheroes.removeOne({ "publisher": "Sony Pictures" });

db.superheroes.countDocuments({});
# 733
