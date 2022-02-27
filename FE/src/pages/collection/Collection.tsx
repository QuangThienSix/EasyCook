import React from "react";
import { selecttorsProduct, selecttorsProductView } from "app/ProductSilce";
import { useAppSelector } from "app/hooks";
import Card from "components/card/Card";
import { IRecipe } from "types/types";

function Collection(): JSX.Element {
  const ProductList = useAppSelector(selecttorsProductView) || [];

  return (
    <div className="container-card">
      <div className="list-container">
        {ProductList.map((item: IRecipe) => {
          if (item.likeUser === 1) return <Card Recipe={item} />;
        })}
      </div>
    </div>
  );
}

export default Collection;
