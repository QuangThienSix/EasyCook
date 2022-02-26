import React from "react";
import { Resources } from "types/types";
import "./style.css";

function TutorialPage(props: { resources: Resources }) {
  const { resources } = props;
  return (
    <div className="resource-list">
      <div className="content_left">{resources.name}. {resources.value}</div>
    </div>
  );
}

export default TutorialPage;
