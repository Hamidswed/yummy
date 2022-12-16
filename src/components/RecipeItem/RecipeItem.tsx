import { useState } from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./RecipeItem.css";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Rajdhani"',
      'sans-serif',
    ].join(','),
  },
});

type RecipeType = {
  idMeal: number;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strInstructions: string;
};
type PropType = {
  recipeItem: RecipeType;
  addToFavorite: Function;
  removeFromFavorite: Function;
};
const RecipeItem = ({
  recipeItem,
  addToFavorite,
  removeFromFavorite,
}: PropType) => {
  const [expanded, setExpanded] = useState(false);
  const [favoritClick, setFavoriteClick] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ width: 345 , fontFamily:"'Rajdhani', sans-serif"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {recipeItem.strMeal.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={recipeItem.strMeal}
        subheader={recipeItem.strCategory}
        className="card"
      />
      <CardMedia
        component="img"
        height="194"
        image={recipeItem.strMealThumb}
        alt={recipeItem.strMeal}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{marginBottom:"10px"}}>
          Ingredients:
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left" sx={{lineHeight:"25px"}}>
          1.{recipeItem.strIngredient1}: {recipeItem.strMeasure1}
          <br />
          2.{recipeItem.strIngredient2}: {recipeItem.strMeasure2}
          <br />
          3.{recipeItem.strIngredient3}: {recipeItem.strMeasure3}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            setFavoriteClick(!favoritClick);
            favoritClick
              ? removeFromFavorite(recipeItem.idMeal)
              : addToFavorite(recipeItem);
          }}
        >
          <FavoriteIcon sx={{ color: favoritClick ? "red" : "gray" }} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={()=>handleExpandClick()}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Instruction:</Typography>
          <Typography paragraph>{recipeItem.strInstructions}</Typography>
        </CardContent>
      </Collapse>
    </Card>
    </ThemeProvider>
  );
};
export default RecipeItem;
