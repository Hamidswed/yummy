import { RecipeType } from "../../App";
import './FavoriteItem.css'

type PropType = {
  favoriteItem: RecipeType;
};
const FavoriteItem = ({ favoriteItem }: PropType) => {
  return (
    <div className="favorite-item">
      <div className="favorite-text">
        <h2>{favoriteItem.strMeal}</h2>
        <p><span>Category: </span>{favoriteItem.strCategory}</p>
      </div>
      <div className="favorite-img">
        <img src={favoriteItem.strMealThumb} alt={favoriteItem.strMeal} />
      </div>
    </div>
  );
};
export default FavoriteItem;
