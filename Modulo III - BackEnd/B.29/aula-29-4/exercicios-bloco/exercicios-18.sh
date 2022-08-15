#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=./xmen.json

# Exercício 18: Decremente em 100 o poder dos mutantes que não possuem a propriedade class.

db.xmen.updateMany({ class: { $exists: false } }, { $inc:{ power: -100 } });
