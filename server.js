// Dependencies
const express = require('express');
const mysql = require('mysql12');
const cTable = require('console.table');

// PORT
const PORT = process.env.PORT || 3001;
const app = express(); 


// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect To Database 
const db = mysql.createConnection(
    {
      host: "localhost",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    console.log(`Connected to the employees_db database.`)
  );