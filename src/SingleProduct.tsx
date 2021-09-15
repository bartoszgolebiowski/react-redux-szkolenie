import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardHeader, Avatar, Button } from "@material-ui/core";
import { addToCart } from "./features/counter/counterSlice";
import { TrendingProduct } from "./product";
import { useAppDispatch } from "./hooks";

type Props = {
  product: TrendingProduct;
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    margin: "2rem auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const SingleProduct = (props: Props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const addToCartFun = () => {
    dispatch(addToCart(props.product));
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title={props.product.title}
        subheader={props.product.price}
      />
      <img
        alt={props.product.title}
        src={props.product.Images[0].url_170x135}
      />
      <CardContent>
        <Typography>{props.product.description.slice(0, 100)}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={addToCartFun}>Add</Button>
      </CardActions>
    </Card>
  );
};
export default SingleProduct;
