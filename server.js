const express = require('express');
const mysql = require('mysql12');

const PORT = process.env.PORT || 3001;
const app = express(); 


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));