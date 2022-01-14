import React from 'react';
import './style.css';

function Card (props: any){
	return (
		<div className="food-list">
				<div className="food-card">
					<a href=""><img src="images/card/card1.jpg" alt="" className="card" /></a>
					<div className="flex-div">
						<img src="images/avatar.jpg" alt="" />
						<div className="food-info">
							<a href="">ức gà sốt cam</a>
							<div className="view-icon">
								<img src="images/card/clock.png" alt="" className="clock-icon" />
								<p>20p</p>
								<img src="images/card/eye.png" alt="" className="eye-icon" />
								<p>232.48K</p>
							</div>
							<div className="rating">
								<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
							</div>
						</div>
					</div>
				</div>
			</div>
	)
}

export default Card;