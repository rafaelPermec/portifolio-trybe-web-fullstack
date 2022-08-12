#!/bin/bash

mongo

# Exercício 3: Retorne apenas os atributos name e birth do documento com o _id igual a 8.

db.bios.find({ _id: 8 }, { _id: 1, birth: 1 });
