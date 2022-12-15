import Hero from "../../components/Hero/Hero";
import './Home.css'
import { RecipeType } from "../../App";

type PropType={
  recipeList?:RecipeType[]
}
const Home = ({recipeList}:PropType) => {
  return (
    <div className="home">
      <Hero recipeList={recipeList}/>
    </div>
  );
};
export default Home;
