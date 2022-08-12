#!/bin/bash

mongo

# Exercício 4: Retorne todos os documentos em que o atributo name.first seja igual a John, utilizando o método pretty().

db.bios.find({ "name.first": "John" }).pretty();
