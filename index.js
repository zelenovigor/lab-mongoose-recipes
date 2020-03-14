const mongoose = require("mongoose");
const Recipe = require("./models/Recipe.model"); // Import of the model Recipe from './models/Recipe.model.js'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipe-app-dev", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));
console.log(data);

//  Iteration 2 creating a new recipe and checking it on MongoDB

Recipe.create({
  title: "Pizza",
  level: "Easy Peasy",
  ingredients: ["Tomato sauce", "Prosciuto", "Cheese", "Mushrooms"],
  cuisine: "Italian",
  dishType: "Other",
  duration: 20,
  creator: "Igor"
});

//  Iteration 3 importing an array of recipes from the data.js
Recipe.insertMany(data)
  .then(res => console.log(res))
  .catch(err => console.log(err));

//  Iteration 4 updating property in an object "Rigatoni alla Genovese"

Recipe.updateOne({ title: "Rigatoni alla Genovese" }, { duration: 100 })
  .then(res => console.log(res))
  .catch(err => console.log(err));

//  Iteration 5 removing 'Carrot case' object from the database
Recipe.deleteOne({ title: "Carrot Cake" })
  .then(res => console.log(res))
  .catch(err => console.log(err));
