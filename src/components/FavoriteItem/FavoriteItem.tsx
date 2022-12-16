import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { RecipeType } from "../../App";
import "./FavoriteItem.css";

type PropType = {
  favoriteItem: RecipeType;
  removeFromFavorite: Function;
};
const FavoriteItem = ({ favoriteItem, removeFromFavorite }: PropType) => {
  return (
    <div className="favorite-item">
      <div className="favorite-text">
        <h2>{favoriteItem.strMeal}</h2>
        <p>
          <span>Category: </span>
          {favoriteItem.strCategory}
        </p>
      </div>
      <div className="favorite-img">
        <img src={favoriteItem.strMealThumb} alt={favoriteItem.strMeal} />
      </div>
      <IconButton
        aria-label="delete"
        onClick={() => removeFromFavorite(favoriteItem.idMeal)}
        sx={{ position: "absolute", right: 0, color: "red" }}
      >
        <DeleteForeverIcon />
      </IconButton>
    </div>
  );
};
export default FavoriteItem;
