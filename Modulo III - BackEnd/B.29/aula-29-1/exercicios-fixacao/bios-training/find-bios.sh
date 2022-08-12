#!/bin/bash

mongo

./bios-db.sh

db.bios.find({}, { name: 1, award: 1, _id: 0 });
