import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import "./style.css";
import { IRecipe } from "types/types";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StreetviewIcon from "@mui/icons-material/Streetview";
import { Rating } from "@mui/material";

export interface ICarouselProps {
  Recipe: IRecipe[];
}

export default function CarouselPage(props: ICarouselProps) {
  const [products, setProducts] = useState(props.Recipe);
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (recipe: IRecipe) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="mb-3">
            <img
              src={`/${recipe.urlImage}`}
              alt={recipe.nameRecipe}
              className="product-image"
            />
          </div>
          <div>
            <h4 className="mb-1">{recipe.nameRecipe}</h4>
            <h6 className="mt-0 mb-3 time_line">
              <AccessTimeIcon />
              <span style={{ marginRight: "15px" }}>{recipe.clock}</span>
              <StreetviewIcon />
              <span>{recipe.numberViewted}</span>
            </h6>
            <div className="car-buttons mt-5">
              <Rating name="read-only" value={recipe.rating} readOnly />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="carousel-demo">
      <div className="card">
        <Carousel
          value={products}
          numVisible={4}
          numScroll={4}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
          header={<h3 style={{ padding: "10px 3rem" }}>Món Tương Tự</h3>}
        />
      </div>
    </div>
  );
}
