import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";
import { RecipeType } from "../../App";
import "./Favorite.css";


type PropType = {
  favorite: RecipeType[];
  removeFromFavorite:Function
};
const Favorite = ({ favorite,removeFromFavorite }: PropType) => {
  return (
    <div className="favorite">
      <h1>Favorite Recipe List</h1>
      {favorite.length === 0 ? <p>Please add your favorite recipe!</p> : null}
      {favorite.map((item) => {
        return <FavoriteItem key={item.idMeal} favoriteItem={item} removeFromFavorite={removeFromFavorite}/>;
      })}
    </div>
  );
};
export default Favorite;
