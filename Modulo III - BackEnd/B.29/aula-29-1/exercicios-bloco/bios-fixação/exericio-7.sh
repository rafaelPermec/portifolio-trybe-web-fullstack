#!/bin/bash

mongo

# Exercício 7: Retorne a quantidade de documentos da coleção books.

db.books.countDocuments({});
