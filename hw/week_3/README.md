# Week 3:  Ratings in Each Recipe Card
**Author: Brian Kim**
**Due: 09/27/2023**
---
# Description
*Continued from the class exercise on Sep 20. Some are changed from week_2 HW. Currently, multiple recipes are used. Instead of using CSS as stylesheet, all the CSS files are converted into CSS Modules. Most importantly, a new feature, recipe rating, is added*

<br />**Please run `npm install` before `npm start`**<br /><br />

***.public/index.html***
Modified title to "Dynamic Recipes" and changed the head icon, *page_icon.png*.

***.src/index.css***
This is the only global css file for this app. It only modifies styles of html element.

***.src/assets/***
Other recipe images are added.

***.src/components/Ratings/***
Ratings component is implemneted in each RecipeCard for rating recipes by clicking +/- for incrementing/decrementing ratings(number of stars; 5 stars is the max). useState is used to store/update ratings value.

***.src/components/Card/***
Modified CSS Module to show 2 cards in each row when the window width is greater than 1500px. When smaller than 1500px, only 1 recipe card will be displayed on each row.