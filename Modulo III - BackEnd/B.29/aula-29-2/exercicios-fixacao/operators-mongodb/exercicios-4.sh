#!/bin/bash

mongo


mongoimport --db=rafaelPermec --collection=restaurants --file=restaurants.json

# Exercício 4: Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4.

db.restaurants.countDocuments({ rating: { $lt: 4 } });
