import React from "react";
import { IRecipe } from "types/types";
import Card from "components/card/Card";

function MyRecipe(): JSX.Element {
  const dataTemp: Array<IRecipe> = require("../../data/sampledata.json");
  return (
    <div className="container-card">
      <div className="list-container">
        {dataTemp.map((item: IRecipe) => {
          return <Card Recipe={item} />;
        })}
      </div>
    </div>
  );
}

export default MyRecipe;
