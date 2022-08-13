#!/bin/bash

mongo


mongoimport --db=rafaelPermec --collection=restaurants --file=restaurants.json

# Exercício 6: Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5, essa consulta também deve retornar restaurantes que não possuem o campo de avaliação.

db.restaurants.countDocuments({ $nor: [{ rating: { $lte: 5 }} ] });

