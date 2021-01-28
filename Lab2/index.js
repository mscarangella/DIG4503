const axios = require("axios");

//fetching the url
axios('https://pokeapi.co/api/v2/pokemon/squirtle')
//then function
  .then(function (response){
    //using the data
    const pokemon = response.data;

    //url returns the data on the pokemon written
    console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
  })
  .catch(function (error){
    //if there is an error
    console.log("Error: " + error);
  });