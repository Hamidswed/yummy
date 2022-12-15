import { useState } from "react";
import { styled } from "@mui/material/styles";
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
// import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
};
const RecipeItem = ({ recipeItem }: PropType) => {
  const [expanded, setExpanded] = useState(false);
  const [favoritClick, setFavoriteClick] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const favoriteHandler = () => {
    setFavoriteClick(!favoritClick);
  };
  return (
    <Card sx={{ width: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {recipeItem.strMeal.charAt(0)}
          </Avatar>
        }
        sx={{ fontFamily: "inherit" }}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={recipeItem.strMeal}
        subheader={recipeItem.strCategory}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipeItem.strMealThumb}
        alt={recipeItem.strMeal}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <h4>Ingredients:</h4>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          <p>
            1.{recipeItem.strIngredient1}: {recipeItem.strMeasure1}
          </p>
          <p>
            2.{recipeItem.strIngredient2}: {recipeItem.strMeasure2}
          </p>
          <p>
            3.{recipeItem.strIngredient3}: {recipeItem.strMeasure3}
          </p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            sx={{ color: favoritClick ? "red" : "gray" }}
            onClick={favoriteHandler}
          />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
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
  );
};
export default RecipeItem;
