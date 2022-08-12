#!/bin/bash

mongo
db.products.findOne(
  { "productName": "Borracha" }, 
  { "productName" : 1, "price": 1, "_id": 0 } 
  );
