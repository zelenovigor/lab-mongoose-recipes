const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
   title = {type: String, required: true, unique: true},
   level = {type: String, enum: ['Easy Peasy']},
   ingredients = {enum:[]}
   cuisine = 
   dishType = 
   let 

});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
