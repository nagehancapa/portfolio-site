import React from "react";
import { useParams } from "react-router-dom";

const PortfolioItem = (props) => {
  const { id } = useParams();
  return (
    <div>
      <h1>A Thing I've Done</h1>
      <p>This page is for the item with id of {id}</p>
    </div>
  );
};

export default PortfolioItem;
