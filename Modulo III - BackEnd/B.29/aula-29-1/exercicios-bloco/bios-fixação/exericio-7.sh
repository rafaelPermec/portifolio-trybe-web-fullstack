#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=books --file=books.json

# Exercício 7: Retorne a quantidade de documentos da coleção books.

db.books.countDocuments({});
