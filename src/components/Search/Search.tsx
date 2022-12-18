import { createTheme, ThemeProvider } from "@mui/material";
import TextField from "@mui/material/TextField";
import { RecipeType } from "../../App";
import "./Search.css";

type PropType = {
  userInput:string
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  recipeList?: RecipeType[];
};

const theme = createTheme({
  typography: {
    fontFamily: ['"Rajdhani"', "sans-serif"].join(","),
  },
});

const Search = ({ userInput,setUserInput, recipeList }: PropType) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value;
    setUserInput(result);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="search">
        <TextField
          id="standard-basic"
          label="Please enter the name"
          value={userInput}
          variant="standard"
          onChange={inputHandler}
          color="warning"
          sx={{
            input: { color: "#fff" },
            fontFamily: "'Rajdhani', sans-serif",
          }}
          InputLabelProps={{
            style: { color: "#f8951d", fontFamily: "'Rajdhani', sans-serif" },
          }}
        />
        {!recipeList ? (
          <p>Sorry we have not got this recipe yet !</p>
        ) : (
          <p style={{ color: "lightgray" }}>suggestion: pizza, pork, lamb</p>
        )}
      </div>
    </ThemeProvider>
  );
};
export default Search;
