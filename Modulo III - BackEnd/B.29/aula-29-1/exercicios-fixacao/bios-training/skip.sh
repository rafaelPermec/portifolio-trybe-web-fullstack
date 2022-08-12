#!/bin/bash

mongo
db.bios.find({}, { name: 1, "awards.award": 1, _id: 0 }).limit(3).skip(2);