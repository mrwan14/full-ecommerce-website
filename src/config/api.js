/**
 * API Configuration
 * Centralized configuration for all API endpoints
 */
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://ecommerce.routemisr.com';

export const API_ENDPOINTS = {
  // Auth endpoints
  SIGNIN: '/api/v1/auth/signin',
  SIGNUP: '/api/v1/auth/signup',
  FORGOT_PASSWORD: '/api/v1/auth/forgotPasswords',
  VERIFY_RESET_CODE: '/api/v1/auth/verifyResetCode',
  RESET_PASSWORD: '/api/v1/auth/resetPassword',
  UPDATE_USER_DATA: '/api/v1/users/updateMe',
  UPDATE_USER_PASSWORD: '/api/v1/users/changeMyPassword',
  
  // Product endpoints
  PRODUCTS: '/api/v1/products',
  PRODUCT_DETAILS: (id) => `/api/v1/products/${id}`,
  CATEGORIES: '/api/v1/categories',
  BRANDS: '/api/v1/brands',
  
  // Cart endpoints
  CART: '/api/v1/cart',
  CART_ITEM: (id) => `/api/v1/cart/${id}`,
  
  // Wishlist endpoints
  WISHLIST: '/api/v1/wishlist',
  WISHLIST_ITEM: (id) => `/api/v1/wishlist/${id}`,
  
  // Order endpoints
  ORDERS: '/api/v1/orders',
  ORDER: (id) => `/api/v1/orders/${id}`,
  
  // Coupon endpoints
  APPLY_COUPON: '/api/v1/coupons',
};

export const API_TIMEOUT = 10000; // 10 seconds

