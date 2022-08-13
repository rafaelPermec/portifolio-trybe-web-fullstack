#!/bin/bash

mongo


mongoimport --db=rafaelPermec --collection=restaurants --file=../operators-mongodb/restaurants.json

# Exercício 2: Remova todos os restaurantes que possuem culinária do tipo American.

db.restaurants.deleteMany({ cuisine: "American" });
