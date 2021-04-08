import MongoClient from "mongodb";

const URL = "mongodb+srv://mscarangella:lDTghULW7mCUe7cj@cluster0.oewwc.mongodb.net/test";

MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection => {
  let database = connection.db("sample_airbnb");

  let collection = database.collection("listingsAndReviews");

  let cursor = collection.find({minimum_nights:{$eq:"2"}, beds: {$gte: "2"}, price: {$lt: 90.00}});
  
  cursor.forEach(document =>{
    console.log(document.name);
  }, () => {
    connection.close();
  })
})
.catch(error => {
  console.log("Error: " + error);
});