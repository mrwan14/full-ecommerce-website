import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { ProductContext } from "../Context/ProductContext";
import { couponService } from "../../services/apiService";
import { MESSAGES } from "../../constants";

/**
 * CouponForm Component
 * Handles coupon code application
 */
const CouponForm = ({ CartDetails }) => {
  const [couponCode, setCouponCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const { getUserCart } = useContext(ProductContext);
  const notify = (message) => toast(message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!couponCode.trim()) {
      notify("Please enter a coupon code");
      return;
    }

    if (!CartDetails?.data?._id) {
      notify("Cart is empty");
      return;
    }

    setLoading(true);
    try {
      const response = await couponService.applyCoupon(couponCode);
      if (response.status === "success") {
        setAppliedCoupon(response.data);
        notify(MESSAGES.COUPON_APPLIED);
        // Refresh cart to get updated price
        if (getUserCart) {
          await getUserCart();
        }
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      notify(error.response?.data?.message || MESSAGES.COUPON_INVALID);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="coupon d-flex justify-content-between w-100">
      <form className="email-input flex-grow-1 me-3" onSubmit={handleSubmit}>
        <input
          className="form-control bg-white fontAwesome"
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          disabled={loading || !!appliedCoupon}
          aria-label="Coupon Code"
          aria-required="false"
        />
      </form>
      <button
        className="btn Apply-Coupon"
        onClick={handleSubmit}
        disabled={loading || !!appliedCoupon}
        aria-label="Apply Coupon"
      >
        <p>{loading ? "Applying..." : appliedCoupon ? "Applied" : "Apply Coupon"}</p>
      </button>
      {appliedCoupon && (
        <div className="ms-2 text-success">
          <small>Discount: {appliedCoupon.discount}%</small>
        </div>
      )}
    </div>
  );
};

export default CouponForm;

