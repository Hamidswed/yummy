import { RecipeType } from "../../App";
import RecipeItem from "../../components/RecipeItem/RecipeItem";
import Search from "../../components/Search/Search";
import "./Recipe.css";

type PropType = {
  recipeList?: RecipeType[];
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  addToFavorite: Function;
  removeFromFavorite: Function;
  checkIsFavorite: (id: number) => boolean
};
const Recipe = ({
  recipeList,
  setUserInput,
  addToFavorite,
  removeFromFavorite,
  checkIsFavorite
}: PropType) => {
  return (
    <div>
      <div className="recipe-search">
        <Search
          setUserInput={setUserInput}
          recipeList={recipeList}
        />
      </div>
      <div className="recipe">
        {recipeList?.map((item) => {
          return (
            <RecipeItem
              key={item.idMeal}
              recipeItem={item}
              addToFavorite={addToFavorite}
              removeFromFavorite={removeFromFavorite}
              isFavorite={checkIsFavorite(item.idMeal)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Recipe;
