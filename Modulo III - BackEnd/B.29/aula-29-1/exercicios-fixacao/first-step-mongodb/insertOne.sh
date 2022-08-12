#!/bin/bash

mongo
db.products.insertOne({
    productName: "Caixa",
    price: 20,
})
