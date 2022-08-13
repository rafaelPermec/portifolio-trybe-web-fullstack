#!/bin/bash

mongo


mongoimport --db=rafaelPermec --collection=restaurants --file=../operators-mongodb/restaurants.json

# Exercício 2: Ordene os restaurantes de forma decrescente baseado nas avaliações.

db.restaurants.find({}, { name: 1, cuisine: 1, _id: 0 }).sort({ rating: -1 });

