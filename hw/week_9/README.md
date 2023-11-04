# Week 9: Reusable Common UI Components with TailwindsCSS
**Author: Brian Kim**
**Due: 11/08/2023**
---
# Description
*Continued from the class exercise on 11/1. Currently, multiple recipes are used. Instead of using CSS as stylesheet, all the CSS files are converted into CSS Modules. Most importantly, a new feature, recipe rating, is added*

<br />**Please run `npm install` before `npm start`**<br /><br />

***.src/pages.HomePage.js***
This is the page with Link components

***.src/components/Link.js***
This component lets the user route to another page. It takes props for custom styles and checks for any conflicting prop types.

***./jsconfig.json***
Used for absolute imports.