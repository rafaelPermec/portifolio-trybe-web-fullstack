#!/bin/bash

mongo


mongoimport --db=rafaelPermec --collection=restaurants --file=restaurants.json

# Exercício 9: Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1, nem o campo culinária seja do tipo American.

db.restaurants.countDocuments({ $nor: [{ rating: 1 }, { cuisine: "American" }]});

