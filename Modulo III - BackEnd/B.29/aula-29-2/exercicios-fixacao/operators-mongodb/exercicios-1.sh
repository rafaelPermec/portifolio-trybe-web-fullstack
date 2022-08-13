#!/bin/bash

mongo

mongoimport --db=rafaelPermec --collection=restaurants --file=restaurants.json


# Exercício 1: Selecione e faça a contagem dos restaurantes presentes nos bairros Queens, Staten Island e Bronx. (utilizando o atributo borough).

db.restaurants.countDocuments({ borough: { $in: ["Queens", "Staten Island", "Bronx"] } });
