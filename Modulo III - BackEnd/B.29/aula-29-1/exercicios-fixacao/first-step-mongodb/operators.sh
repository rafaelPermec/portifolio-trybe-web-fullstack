#!/bin/bash

mongo
# Greater Than
db.products.find({ price: {$gt: 4} });
# Lower Than
db.products.find({ price: {$lt: 16} })
