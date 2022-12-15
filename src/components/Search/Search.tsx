import TextField from "@mui/material/TextField";
import { RecipeType } from "../../App";
import "./Search.css";

type PropType = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  recipeList?: RecipeType[];
};
const Search = ({ userInput, setUserInput, recipeList }: PropType) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value;
    setUserInput(result);
  };
  return (
    <div className="search">
      <TextField
        id="standard-basic"
        label="Please enter the name"
        variant="standard"
        onChange={inputHandler}
        InputLabelProps={{
          style: { color: "#f8951d", fontFamily: "inherit",},
        }}
      />
      {!recipeList ? (
        <p>Sorry we have not got this recipe yet !</p>
      ) : (
        <p style={{ color: "lightgray" }}>suggestion: pizza, pork, lamb</p>
      )}
    </div>
  );
};
export default Search;
