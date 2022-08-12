#!/bin/bash

mongo

# Exercício 1: Selecione e faça a contagem dos restaurantes presentes nos bairros Queens, Staten Island e Bronx. (utilizando o atributo borough).

db.restaurants.countDocuments({ borough: { $in: ["Queens", "Staten Island", "Bronx"] } });
