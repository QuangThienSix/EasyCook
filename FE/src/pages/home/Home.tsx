import Card from "components/card/Card";
import React from "react";
import './style.css';

function Home(): JSX.Element {
  return (
    <div>
		<div className="categories">
		<section className="category-section">
			<a className="category active">
				<img src="images/table.png" alt="" className="category-icon" />
				<span>tất cả</span>
			</a>
			<a className="category">
				<img src="images/breakfast.png" alt="" className="category-icon" />
				<span>ăn sáng </span>
			</a>
			<a className="category">
				<img src="images/vegetarian-restaurant.png" alt="" className="category-icon" />
				<span>món chay</span>
			</a>
			<a className="category">
				<img src="images/fried-rice.png" alt="" className="category-icon" />
				<span>món chính</span>
			</a>
			<a className="category">
				<img src="images/antipasto.png" alt="" className="category-icon" />
				<span>khai vị</span>
			</a>
			<a className="category">
				<img src="images/hot-pot (1).png" alt="" className="category-icon" />
				<span>món lẩu</span>
			</a>
			<a className="category">
				<img src="images/dinner.png" alt="" className="category-icon" />
				<span>ăn tối</span></a>
			<a className="category">
				<img src="images/salad.png" alt="" className="category-icon" />
				<span>món salad</span></a>
		</section>
	</div>
      <div className="container-card">
        <div className="list-container">
          <Card />
		  <Card />
		  <Card />
		  <Card />
		  <Card />
		  <Card />
		  <Card />
		  <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
