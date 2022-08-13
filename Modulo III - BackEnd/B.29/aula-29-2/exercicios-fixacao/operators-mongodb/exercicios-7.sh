#!/bin/bash

mongo


mongoimport --db=rafaelPermec --collection=restaurants --file=restaurants.json

# Exercício 7: Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6, ou restaurantes localizados no bairro Brooklyn.

db.restaurants.countDocuments({ $or: [{ rating: { $gte: 6 }}, { borough: "Brooklyn" } ] });

