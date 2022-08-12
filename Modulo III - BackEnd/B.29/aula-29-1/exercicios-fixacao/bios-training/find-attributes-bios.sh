#!/bin/bash

mongo
 db.bios.find({"name.last": "Hopper" }, { name: 1, "awards.award": 1, _id: 0 });
