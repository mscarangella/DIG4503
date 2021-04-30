import Express from "express";
import fs from "fs";
import chalk from "chalk";
import fileUpload from "express-fileupload";

//const Express = require("express");
const App = Express();
const port = 3010;

//read database.json
let fileContents = fs.readFileSync("database.json");

//parse into json
let database = JSON.parse(fileContents);

App.use("/", Express.static("public"));

//letting it use fileUpload (NEW)
App.use(fileUpload())

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
    if(req.params.number == value.age){
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

  res.json(result);
});

//setting up fileUpload (NEW)
app.post('/upload-resume', async (req, res) => {
  try {
      if(!req.files) {
          res.send({
              status: false,
              message: 'No file uploaded'
          });
      } else {
          //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
          let resume = req.files.resume;
          
          //Use the mv() method to place the file in upload directory (i.e. "uploads")
          resume.mv('./uploads/' + resume.name);

          //send response
          res.send({
              status: true,
              message: 'File is uploaded',
              data: {
                  name: resume.name,
                  mimetype: resume.mimetype,
                  size: resume.size
              }
          });
      }
  } catch (err) {
      res.status(500).send(err);
  }
});

//port is running
App.listen(port, () => {
  //Chalk color added (NEW!!!!)
  console.log(chalk.blue.bold("Server Running!"));
})