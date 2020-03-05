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

//  Iteration 2

Recipe.create({
  title: "Pizza",
  level: "Easy Peasy",
  ingredients: ["Tomato sauce", "Prosciuto", "Cheese", "Mushrooms"],
  cuisine: "Italian",
  dishType: "Other",
  duration: 20,
  creator: "Igor"
})

  .then(res => console.log(res))
  .catch(err => console.log(err));
