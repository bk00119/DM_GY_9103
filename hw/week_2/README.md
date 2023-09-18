# Week 2:  Create a React component: recipe card
**Author: Brian Kim**
**Due: 09/20/2023**
---
# Description
*Created a component that loads recipe data from ./src/components/RecipeCard/receipe-data.js and shows as a card with an image of dish, dish name, brief description, list of ingredients, and list of instructions*

***.public/index.html***
Added Jua font

***./src/assets/***
Contains an image of dish

***./src/components/Card***
General card component that has a child prop(component in this case)

***./src/components/RecipeCard/***
Details/files of the RecipeCard are here

***./src/components/RecipeCard/index.js***
Root component of RecipeCard loading RecipeImage, RecipeInfo, IngredientsList, and InstructionsList

***./src/components/RecipeCard/RecipeImage.js***
Component loading the image of dish

***./src/components/RecipeCard/RecipeInfo.js***
Component loading the name of dish and its brief description

***./src/components/RecipeCard/IngredientsList.js***
Component loading an unordered list of ingredients

***./src/components/RecipeCard/InstructionsList.js***
Component loading an ordered list of instructions

***./src/components/RecipeCard/recipe-data.js***
Const data exporting the details of the recipe

***./src/components/RecipeCard/index.csss***
CSS file for styling RecipeCard component