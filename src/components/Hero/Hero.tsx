import HeroImg from "../../assets/hero-img.jpg";
import Dish from "../../assets/dish.png"
import "./Hero.css";
import { RecipeType } from "../../App";


type PropType={
  recipeList?:RecipeType
}
const Hero = ({recipeList}:PropType) => {
  return (
    <div className="hero">
      <section>
        <div className="hero-img">
          <img src={HeroImg} alt="hero-img" />
        </div>
        <div className="dish">
          <img src={Dish} alt='dish'/>
        </div>
        <h2>
          Not Healthy
          <br />
          <span>
            But <br />
            delicuous recepies
          </span>
        </h2>
      </section>

      <section className="hero-text">
        <h3>Popular food</h3>
        <p>
          We provides variety of food and beverage recepies with height taste
          from famous chefs
        </p>
      </section>

      <section className="hero-imgBox">
        {recipeList?.meals.slice(0,5).map((item)=>{
          return <div className="hero-imgItem">
            <img src={item.strMealThumb} alt={item.strMeal} />
          </div>
        })}
      </section>
    </div>
  );
};
export default Hero;
