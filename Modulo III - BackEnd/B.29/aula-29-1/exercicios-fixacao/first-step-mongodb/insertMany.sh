#!/bin/bash

mongo
db.products.insertMany([
    { productName: "Lapis", stock: 10, price: 20,status:"A"},
    { productName: "Tesoura", price: 5, status: "B" },
    { productName: "Borracha", price: 15, status: "A" }
])
