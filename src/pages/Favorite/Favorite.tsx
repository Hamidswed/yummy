import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";
import { RecipeType } from "../../App";
import './Favorite.css'

type PropType={
  favorite:RecipeType[]
}
const Favorite = ({favorite}:PropType) => {
  return (
    <div className="favorite">
      <h1>Favorite Recipe List</h1>
      {favorite.length===0 ? <p>Please add you favorite recipe!</p>:null}
      {favorite.map((item)=>{
        return <FavoriteItem key={item.idMeal} favoriteItem={item}/>
      })}
      
    </div>
  );
};
export default Favorite;
