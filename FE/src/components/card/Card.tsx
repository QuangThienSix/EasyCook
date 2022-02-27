import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import * as ROUTE from "../../constants/route";
import { IRecipe } from "types/types";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  productActions,
  selecttorsProduct,
  selecttorsProductrecipeSeen,
  selecttorsProductView,
} from "app/ProductSilce";

function Card(props: { Recipe: IRecipe }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let ProductList = useAppSelector(selecttorsProductView) || [];
  const ProductListTemp = useAppSelector(selecttorsProduct) || [];
  let ProductListSeen = useAppSelector(selecttorsProductrecipeSeen) || [];

  const { Recipe } = props;
  const formatNumberViewted = (number: number) => {
    if (number >= 1000) {
      number = number / 1000;
      return number + "K";
    }
    return number + "";
  };

  const handleDetail = (Recipe: IRecipe) => {
    if (ProductListSeen.length === 0) {
      ProductListSeen = ProductListTemp;
    }
    const newItems = ProductListSeen.map((i) =>
      i.recipeId === Recipe.recipeId ? { ...i, likeUserSeen: 1 } : i
    );
    dispatch(productActions.SeenSuccess(newItems));
    navigate(`${ROUTE.DETAILS_RECIPE}${Recipe.recipeId}`);
  };
  const handleView = (Recipe: IRecipe) => {
    if (ProductList.length === 0) {
      ProductList = ProductListTemp;
    }
    const newItems = ProductList.map((i) =>
      i.recipeId === Recipe.recipeId ? { ...i, likeUser: 1 } : i
    );
    dispatch(productActions.liewViewSuccess(newItems));
  };

  return (
    <div
      className="food-list"
      onClick={() => {
        handleDetail(Recipe);
      }}
    >
      <div className="food-card">
        <div className="img__food-card">
          <img src={`/${Recipe.urlImage}`} alt="" className="card food-img" />
          <div className="icon__img">
            <FavoriteIcon
              onClick={() => handleView(Recipe)}
              className="icon__icon"
              color="success"
            />
          </div>
        </div>

        <div className="flex-div">
          <img src={`/${Recipe.avatarImage}`} alt="" />
          <div className="food-info">
            <Link to={ROUTE.DETAILS_RECIPE + Recipe.recipeId}>
              {Recipe.nameRecipe}
            </Link>
            <div className="view-icon">
              <img src="/images/card/clock.png" alt="" className="clock-icon" />
              <p>{Recipe.clock}</p>
              <img src="/images/card/eye.png" alt="" className="eye-icon" />
              <p>{formatNumberViewted(Recipe.numberViewted)}</p>
            </div>
            <Rating
              name="half-rating-read"
              precision={0.5}
              defaultValue={0}
              readOnly
              value={Recipe?.rating}
              size="small"
            />
            {/* <div className="rating">
								<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
							</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
