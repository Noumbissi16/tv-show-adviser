import React from "react";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

function FiveStarRating({ rating }) {
  const starList = [];
  const starFillCount = Math.floor(rating);
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  for (let index = 1; index <= starFillCount; index++) {
    starList.push(<StarFill key={"star-fill" + index} />);
  }
  if (hasHalfStar) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  for (let index = 1; index <= emptyStarCount; index++) {
    starList.push(<Star key={"star-empty" + index} />);
  }
  return <div>{starList}</div>;
}

export default FiveStarRating;
