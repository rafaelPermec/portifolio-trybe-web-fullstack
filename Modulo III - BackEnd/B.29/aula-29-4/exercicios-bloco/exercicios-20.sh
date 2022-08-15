#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=./xmen.json

# Exercício 20: Em apenas uma query, adicione o campo areas com ["Outside"] a todos os Junior Staff que não tenham o campo areas definido.

db.xmen.updateMany({ occupation: 'Junior Staff', area: { $exists: false }}, { $set: { area: ["Outside"] } });
