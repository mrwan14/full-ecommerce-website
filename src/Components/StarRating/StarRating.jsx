import React, { useContext, useState } from "react";
import "./StarRating.css";
import { ProductContext } from "../Context/ProductContext";
import { process } from "@progress/kendo-data-query";
export default function StarRating() {
  let { Products } = useContext(ProductContext);
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733; </span>
          </button>
        );
      })}
    </div>
  );
}
