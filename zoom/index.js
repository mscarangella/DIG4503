import Express from "express";
import fs from "fs";

//const Express = require ("express");
//const fs = require('fs');
const App = Express();
const port = 3010;

//read database.json
let fileContents = fs.readFileSync("database.json");

//parse into json
let database = JSON.parse(fileContents);

//find employee name
App.get("/api/employees/name/:name", (req, res) => {
  let result = { "error" : "Not Available"};

  database.forEach((value) => {
    if(req.params.name == value.name){
      result = value;
    }
  });
  res.json(result);
});

//find employee age
App.get("/api/employees/ages/:number", (req, res) => {
  let result = { "error" : "Not Available"};

  database.forEach((value) => {
    if(req.params.number == value.number){
      result = value;
    }
  });
  res.json(result);
})

//port is running
App.listen(port, () => {
  console.log("Server Running!");
})