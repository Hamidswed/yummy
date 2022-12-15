import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { RecipeType } from "../../App";

type PropType = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  recipeList?: RecipeType;
};
const Search = ({ userInput, setUserInput, recipeList }: PropType) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value;
    setUserInput(result);
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", color: "#fff" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          onChange={inputHandler}
        />
      </Box>
      {recipeList?.meals===null ? (
        <p>Sorry we have not got this recipe yet !</p>
      ) : null}
    </div>
  );
};
export default Search;
