#!/bin/bash

mongo


mongoimport --db=rafaelPermec --collection=restaurants --file=restaurants.json

# Exercício 5: Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5, 6 e 7.

db.restaurants.countDocuments({ rating: { $nin: [ 5, 6, 7 ] } });
