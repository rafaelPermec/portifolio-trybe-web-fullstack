#!/bin/bash

mongo


mongoimport --db=rafaelPermec --collection=restaurants --file=restaurants.json

# Exercício 10: Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 ou menor que 10, E esteja localizado no bairro Brooklyn OU não possuem culinária do tipo Delicatessen.

db.restaurants.countDocuments({ $and: [{ rating: { $gt: 4, $lt: 10 }}, { $or: [ { borough: "Brooklyn" }, { cuisine: { $ne: "Delicatessen" } } ]} ] });

