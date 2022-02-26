import Card from "components/card/Card";
import React from "react";
import { IRecipe } from "types/types";
import "./style.css";

function Home(): JSX.Element {
  const dataTemp: Array<IRecipe> = require("../../data/sampledata.json");
  //   const dataTemp: Array<IRecipe> = [
  //     {
  //       recipeId: 0,
  //       nameRecipe: "Ức gà sốt cam",
  //       urlImage: "images/card/card1.jpg",
  //       avatarImage: "images/avatar.jpg",
  //       clock: "20p",
  //       numberViewted: 22300,
  //       rating: 5,
  //     },
  //     {
  //       recipeId: 1,
  //       nameRecipe: "Ức gà sốt cam",
  //       urlImage: "images/card/card2.jpg",
  //       avatarImage: "images/avatar.jpg",
  //       clock: "20p",
  //       numberViewted: 200,
  //       rating: 5,
  //     },
  //     {
  //       recipeId: 2,
  //       nameRecipe: "Ức gà sốt cam",
  //       urlImage: "images/card/card3.jpg",
  //       avatarImage: "images/avatar.jpg",
  //       clock: "20p",
  //       numberViewted: 200000,
  //       rating: 5,
  //     },
  //     {
  //       recipeId: 3,
  //       nameRecipe: "Ức gà sốt cam",
  //       urlImage: "images/card/card4.jpg",
  //       avatarImage: "images/avatar.jpg",
  //       clock: "20p",
  //       numberViewted: 200000,
  //       rating: 2.5,
  //     },
  //     {
  //       recipeId: 4,
  //       nameRecipe: "Ức gà sốt cam",
  //       urlImage: "images/card/card5.jpg",
  //       avatarImage: "images/avatar.jpg",
  //       clock: "20p",
  //       numberViewted: 200000,
  //       rating: 4.6,
  //     },
  //     {
  //       recipeId: 5,
  //       nameRecipe: "Ức gà sốt cam",
  //       urlImage: "images/card/card6.jpg",
  //       avatarImage: "images/avatar.jpg",
  //       clock: "20p",
  //       numberViewted: 200000,
  //       rating: 1.8,
  //     },
  //     {
  //       recipeId: 6,
  //       nameRecipe: "Ức gà sốt cam",
  //       urlImage: "images/card/card7.jpg",
  //       avatarImage: "images/avatar.jpg",
  //       clock: "20p",
  //       numberViewted: 200000,
  //       rating: 5,
  //     },
  //     {
  //       recipeId: 7,
  //       nameRecipe: "Ức gà sốt cam",
  //       urlImage: "images/card/card8.jpg",
  //       avatarImage: "images/avatar.jpg",
  //       clock: "20p",
  //       numberViewted: 200000,
  //       rating: 5,
  //     },
  //   ];
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
            <img
              src="images/vegetarian-restaurant.png"
              alt=""
              className="category-icon"
            />
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
            <img
              src="images/hot-pot (1).png"
              alt=""
              className="category-icon"
            />
            <span>món lẩu</span>
          </a>
          <a className="category">
            <img src="images/dinner.png" alt="" className="category-icon" />
            <span>ăn tối</span>
          </a>
          <a className="category">
            <img src="images/salad.png" alt="" className="category-icon" />
            <span>món salad</span>
          </a>
        </section>
      </div>
      <div className="container-card">
        <div className="list-container">
          {dataTemp.map((item: IRecipe) => {
            return <Card Recipe={item} />;
          })}
          {/* <Card />
		  <Card />
		  <Card />
		  <Card />
		 <Card />
		 <Card />
		   <Card />
		  <Card /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
