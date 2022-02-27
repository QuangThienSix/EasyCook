import { useAppSelector } from "app/hooks";
import { selecttorsProductrecipeSeen } from "app/ProductSilce";
import Card from "components/card/Card";
import React from "react";
import { IRecipe } from "types/types";

function PostsViewted(): JSX.Element {
  const ProductList = useAppSelector(selecttorsProductrecipeSeen) || [];

  return (
    <div className="container-card">
      <div className="list-container">
        {ProductList.map((item: IRecipe) => {
          if (item.likeUserSeen === 1) return <Card Recipe={item} />;
        })}
      </div>
    </div>
  );
}

export default PostsViewted;
