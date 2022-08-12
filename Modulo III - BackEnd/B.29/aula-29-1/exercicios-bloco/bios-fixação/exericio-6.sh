#!/bin/bash

mongo

# Exercício 6: Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.

db.bios.find().limit(2).skip(5).pretty();
