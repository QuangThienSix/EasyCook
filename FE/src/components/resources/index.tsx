import React from "react";
import { Resources } from "types/types";
import "./style.css";

function ResourcesPage(props: { resources: Resources }) {
  const { resources } = props;
  return (
    <div className="resource-list">
      <div className="content_left">{resources.name}</div>
      <div className="content_right">{resources.value}</div>
    </div>
  );
}

export default ResourcesPage;
