import Express from "express";
import fs from "fs";

//const Express = require("express");
const App = Express();
const port = 3010;

//read database.json
let fileContents = fs.readFileSync("database.json");

//parse into json
let database = JSON.parse(fileContents);

App.use("/", Express.static("public"));

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

//find employee position (NEW!!!)
App.get("/api/employees/position/:position", (req, res) => {
  let result = { "error" : "Not Available"};

  database.forEach((value) => {
    if(req.params.position == value.position){
      result = value;
    }
  });
  res.json(result);
})

//find employee years of experience (NEW!!!)
App.get("/api/employees/years/:years", (req, res) => {
  let result = { "error" : "Not Available"};

  database.forEach((value) => {
    if(req.params.years == value.years){
      result = value;
    }
  });
  res.json(result);
})

App.post("/api/employees/:name/:age", (req, res) => {
  let result = {
    "name": req.params.name, 
    "age": parseInt(req.params.age),
    "position": req.params.position,
    "years": parseInt(req.params.years)
  };

  database.push(result);

  fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));

  res.JSON(result);
});

//port is running
App.listen(port, () => {
  console.log("Server Running!");
})