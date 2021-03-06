import Express from "express";
import cors from "cors";
import fs from "fs";

const App = Express();
const port = 3010;
App.use(cors());

//read database.json
let fileContents = fs.readFileSync("database.json");

//parse into json
let database = JSON.parse(fileContents);

App.use("/", Express.static("client/build"));

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
App.get("/api/employees/ages/:age", (req, res) => {
  let result = { "error" : "Not Available"};

  database.forEach((value) => {
    if(req.params.age == value.age){
      result = value;
    }
  });
  res.json(result);
})

App.post("/api/employees/:name/:age", (req, res) => {
  let result = {
    "name": req.params.name, 
    "age": parseInt(req.params.age)
  };

  database.push(result);

  fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));

  res.JSON(result);
});

//port is running
App.listen(port, () => {
  console.log("Server Running!");
})