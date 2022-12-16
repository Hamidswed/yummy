# Yummy - React App

The purpose of this assignment is to practice TypeScript

## How to run project

1. Step 1: `yarn`
2. Step 2: `yarn start`

## Link to My Web Page:

https://catering-yummy.vercel.app/

## Requirements

1. Your application should have 4 pages namely: `Home`, `Recipe` ,`Favorite` and `Contact`
2. Create a form where the user can insert the meal name
3. Using the user input above to get the recipe using this api : `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`. For example, if the user type `pizza` then the url will be: `https://www.themealdb.com/api/json/v1/1/search.php?s=pizza`
4. If the recipe is not found, display this message: `Sorry we have not got this recipe yet ! `
5. The user can add their favorite by clicking the heart icon and the favorite recipes show in `Favorite` page.
6. Styling had to be similar with the screenshot below

## Screenshots

1. Home page
   ![homePage](./src/assets/HomePage.jpg)

2. Recipe page
   ![recipePage](./src/assets/RecipePage.jpg)

3. Search in Recipe page
   ![searchPage](./src/assets/RecipeSearch.jpg)

4. Favorite recipe
   ![favoriteRec](./src/assets/RecipeFav.jpg)

5. Favorite page
   ![favoritePage](./src/assets/FavoritePage.jpg)

6. Contact page
   ![contactPage](./src/assets/ContactPage.jpg)

## Notes

1. The API docs: `https://www.themealdb.com/api.php`
2. The images can be found in `assets` folder
3. Google font: `https://fonts.google.com/` (`Rajdhani ,sans-serif`)
4. MUI:`https://mui.com/`
5. Ant design: `https://ant.design/`

## Reading materials MUI

1. Text Field: use in `Search` component (`https://mui.com/material-ui/react-text-field/#main-content`)
2. Card: use to display each recipe (`https://mui.com/material-ui/react-card/#main-content`)
3. Icons (`https://mui.com/material-ui/material-icons/#main-content`)
4. Button (`https://mui.com/material-ui/react-button/#main-content`)
5. Badge: (`https://mui.com/material-ui/react-badge/#main-content`)
