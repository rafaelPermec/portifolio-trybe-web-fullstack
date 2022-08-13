#!/bin/bash

mongo


mongoimport --db=rafaelPermec --collection=restaurants --file=../operators-mongodb/restaurants.json

# Exercício 1: Ordene alfabeticamente os restaurantes pelo nome (atributo name).


db.restaurants.find({}, { name: 1, cuisine: 1, _id: 0 }).sort({ name: 1 });

