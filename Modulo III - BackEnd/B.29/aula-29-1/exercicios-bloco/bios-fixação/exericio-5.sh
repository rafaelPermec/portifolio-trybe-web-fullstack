#!/bin/bash

mongo

# Exercício 5: Retorne os 3 primeiros documentos da coleção bios utilizando o método pretty().

db.bios.find().limit(3).pretty();
