#!/bin/bash

mongo

# Exercício 1: Retorne o documento com o _id igual a 8.

db.bios.find({ _id: 8 });
