#!/bin/bash

mongo


mongoimport --db=rafaelPermec --collection=restaurants --file=restaurants.json

# Exercício 8: Selecione e faça a contagem dos restaurantes localizados nos bairros Queens, Staten Island e Brooklyn e possuem avaliação maior que 4.

db.restaurants.countDocuments({ $and: [{ rating: { $gte: 4 }}, { borough: { $in: ["Brooklyn", "Queens", "Staten Island"] }} ] });

