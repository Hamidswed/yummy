import "./App.css";
import NavBarMain from "./components/NavBar/NavBarMain";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import Favorite from "./pages/Favorite/Favorite";
import Contact from "./pages/Contact/Contact";
import { useState, useEffect, useCallback } from "react";

export type RecipeType = {
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
};

function App() {
  const [getRecipe, setGetRecipe] = useState<RecipeType[]>([]);
  const [userInput, setUserInput] = useState("");
  const [favorite, setFavorite] = useState<RecipeType[]>([]);
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;
  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGetRecipe(data.meals))
      .catch((error) => console.log(error));
  };
  const catchedData = useCallback(getData, [url]);
  useEffect(() => {
    catchedData();
  }, [catchedData]);

  const addToFavorite = (recipeItem: RecipeType) => {
    const updatedFavorite = [...favorite];
    const recipeIndex = updatedFavorite.findIndex(
      (item) => item.idMeal === recipeItem.idMeal
    );
    if (recipeIndex === -1) {
      setFavorite([...updatedFavorite, recipeItem]);
    } else {
      removeFromFavorite(recipeItem.idMeal);
    }
  };

  const removeFromFavorite = (id: number) => {
    const updatedFavorite = favorite.filter((item) => item.idMeal !== id);
    setFavorite(updatedFavorite);
  };

  return (
    <div className="App">
      <NavBarMain favorite={favorite} />
      <Routes>
        <Route path="/" element={<Home recipeList={getRecipe} />} />
        <Route
          path="/recipe"
          element={
            <Recipe
              recipeList={getRecipe}
              setUserInput={setUserInput}
              addToFavorite={addToFavorite}
              removeFromFavorite={removeFromFavorite}
            />
          }
        />
        <Route path="/favorite" element={<Favorite favorite={favorite} removeFromFavorite={removeFromFavorite}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
