#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=./xmen.json

# Exercício 16: Produza uma query onde os mutantes class omega ou gama passam a ter seu poder de 500 somente se seu poder for menor que 500.

db.xmen.updateMany({ $or: [ { class: "omega" }, { class: "gama" } ] }, { $max: { power: 500 } });
