import { RecipeType } from "../../App";
import RecipeItem from "../../components/RecipeItem/RecipeItem";
import Search from "../../components/Search/Search";
import "./Recipe.css";

type PropType = {
  recipeList?: RecipeType;
  userInput:string
  setUserInput: React.Dispatch<React.SetStateAction<string>>
};
const Recipe = ({ recipeList ,userInput,setUserInput}: PropType) => {
  return (
    <div>
      <div className="recipe-search">
        <Search userInput={userInput} setUserInput={setUserInput} recipeList={recipeList}/>
      </div>
      <div className="recipe">
        {recipeList?.meals.map((item) => {
          return <RecipeItem key={item.idMeal} recipeItem={item} />;
        })}
      </div>
    </div>
  );
};
export default Recipe;
