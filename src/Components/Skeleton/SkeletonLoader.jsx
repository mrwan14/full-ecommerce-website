import React from "react";

/**
 * SkeletonLoader Component
 * Displays skeleton loading placeholders
 */
export const ProductCardSkeleton = () => (
  <div className="col-md-4 col-lg-3 col-sm-6">
    <div className="product-container">
      <div className="img-container">
        <div className="skeleton-image" style={{ 
          width: "100%", 
          height: "250px", 
          backgroundColor: "#e0e0e0",
          borderRadius: "8px",
          animation: "pulse 1.5s ease-in-out infinite"
        }}></div>
      </div>
      <div className="product-desc m-3">
        <div className="skeleton-text" style={{ 
          height: "16px", 
          width: "60%", 
          backgroundColor: "#e0e0e0",
          marginBottom: "8px",
          borderRadius: "4px",
          animation: "pulse 1.5s ease-in-out infinite"
        }}></div>
        <div className="skeleton-text" style={{ 
          height: "20px", 
          width: "80%", 
          backgroundColor: "#e0e0e0",
          marginBottom: "8px",
          borderRadius: "4px",
          animation: "pulse 1.5s ease-in-out infinite"
        }}></div>
        <div className="skeleton-text" style={{ 
          height: "16px", 
          width: "40%", 
          backgroundColor: "#e0e0e0",
          borderRadius: "4px",
          animation: "pulse 1.5s ease-in-out infinite"
        }}></div>
      </div>
    </div>
  </div>
);

export const ProductListSkeleton = ({ count = 8 }) => (
  <div className="row">
    {Array.from({ length: count }).map((_, index) => (
      <ProductCardSkeleton key={index} />
    ))}
  </div>
);

// Add CSS animation
const style = document.createElement("style");
style.textContent = `
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;
document.head.appendChild(style);

