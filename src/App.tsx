import "./App.css";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import Favorite from "./pages/Favorite/Favorite";
import Contact from "./pages/Contact/Contact";
import { useState, useEffect, useCallback } from "react";

export type RecipeType = {
  meals: {
    idMeal: number;
    strMeal: string;
    strCategory: string;
    strMealThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strInstructions: string;
  }[];
};

function App() {
  const [getRecipe, setGetRecipe] = useState<RecipeType>();
  const [userInput, setUserInput] = useState("");
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;
  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGetRecipe(data))
      .catch((error) => console.log(error));
  };
  const catchedData = useCallback(getData, [url]);
  useEffect(() => {
    catchedData();
  }, [catchedData]);


  return (
    <div className="App">
      <NavBarContainer />
      <Routes>
        <Route path="/" element={<Home recipeList={getRecipe}/>} />
        <Route
          path="/recipe"
          element={
            <Recipe
              recipeList={getRecipe}
              userInput={userInput}
              setUserInput={setUserInput}
            />
          }
        />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
