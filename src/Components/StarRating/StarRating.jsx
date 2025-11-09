import React, { useState } from "react";
import "./StarRating.css";

export default function StarRating({ rating: initialRating = 4, onRatingChange, readOnly = false }) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
  
  const handleClick = (index) => {
    if (!readOnly) {
      setRating(index);
      if (onRatingChange) {
        onRatingChange(index);
      }
    }
  };
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => !readOnly && setHover(index)}
            onMouseLeave={() => !readOnly && setHover(rating)}
            disabled={readOnly}
          >
            <span className="star">&#9733; </span>
          </button>
        );
      })}
    </div>
  );
}
