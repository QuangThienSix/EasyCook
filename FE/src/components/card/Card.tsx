import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import * as ROUTE from '../../constants/route';
import { IRecipe } from 'types/types';
import Rating from '@mui/material/Rating';

function Card (props: {Recipe: IRecipe}){

	const navigate = useNavigate ();


	const {Recipe} = props;
	const formatNumberViewted = (number: number) => {
		if(number >= 1000){
			number = number / 1000;
			return number + 'K';
		}
		return number + '';
	}

	const handleDetail = (Recipe: IRecipe) => {
		navigate(`${ROUTE.DETAILS_RECIPE}${Recipe.recipeId}`);
	}


	return (
		<div className="food-list" onClick={()=>{handleDetail(Recipe)}}>
				<div className="food-card">
					<img src={`/${Recipe.urlImage}`} alt="" className="card" />
					<div className="flex-div">
						<img src={`/${Recipe.avatarImage}`} alt="" />
						<div className="food-info">
							<Link to={ROUTE.DETAILS_RECIPE + Recipe.recipeId}>{Recipe.nameRecipe}</Link>
							<div className="view-icon">
								<img src="/images/card/clock.png" alt="" className="clock-icon" />
								<p>{Recipe.clock}</p>
								<img src="/images/card/eye.png" alt="" className="eye-icon" />
								<p>{formatNumberViewted(Recipe.numberViewted)}</p>
							</div>
							<Rating name="half-rating-read" precision={0.5} defaultValue={0} readOnly value={Recipe?.rating} size="small" />
							{/* <div className="rating">
								<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
							</div> */}
						</div>
					</div>
				</div>
			</div>
	)
}

export default Card;