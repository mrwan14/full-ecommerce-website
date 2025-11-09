import React, { memo } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import StarRating from "../StarRating/StarRating";
import { ROUTES } from "../../constants";

/**
 * ProductCard Component
 * Reusable product card component for displaying products
 * @param {Object} product - Product object
 * @param {Function} onAddToCart - Callback for adding to cart
 * @param {Function} onAddToWishlist - Callback for adding to wishlist
 * @param {Function} onViewDetails - Callback for viewing product details
 * @param {Boolean} showAddToCart - Whether to show add to cart button
 */
const ProductCard = memo(({ 
  product, 
  onAddToCart, 
  onAddToWishlist, 
  onViewDetails,
  showAddToCart = true,
  className = "col-md-4 col-lg-3 col-sm-6"
}) => {
  const isLoggedIn = !!localStorage.getItem("userToken");

  return (
    <div className={className}>
      <div className="product-container">
        <div className="img-container">
          <img 
            src={product.imageCover} 
            alt={product.title || "Product image"}
            loading="lazy"
          />
          <div className="icons d-flex justify-content-between">
            <div className="mins">
              <p>20%</p>
            </div>
            <div className="right-icons">
              <button
                className="d-block"
                onClick={() => onAddToWishlist && onAddToWishlist(product)}
                aria-label="Add to wishlist"
              >
                <AiOutlineHeart className="d-block mb-1 rounded-circle bg-white" />
              </button>
              <Link
                to={ROUTES.PRODUCT_DETAILS(product._id)}
                className="text-black"
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails && onViewDetails(product);
                }}
                aria-label={`View ${product.title} details`}
              >
                <AiOutlineEye className="d-block mb-1 bg-white rounded-circle" />
              </Link>
            </div>
          </div>
          {isLoggedIn && showAddToCart && (
            <div className="add-to-cart">
              <button
                className="text-white fs-6"
                onClick={() => onAddToCart && onAddToCart(product)}
                aria-label={`Add ${product.title} to cart`}
              >
                Add To Cart
              </button>
            </div>
          )}
        </div>
        <div className="product-desc m-3">
          <h5 className="text-success fs-6">{product.category?.name}</h5>
          <h5>{product.title}</h5>
          <div className="price d-flex">
            <p className="text-danger me-3">${product.price}</p>
            <p className="text-muted text-decoration-line-through">
              ${product.price + 100}
            </p>
          </div>
          <div className="star-rating d-flex">
            <StarRating rating={product.ratingsAverage || 0} readOnly={true} />
            <p className="mt-2 ms-3">{product.ratingsAverage || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;

