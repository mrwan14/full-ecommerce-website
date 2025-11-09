/**
 * API Service Layer
 * Centralized API calls separated from component logic
 */
import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS, API_TIMEOUT } from '../config/api';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      error.message = 'Request timeout - Please check your connection';
    }
    return Promise.reject(error);
  }
);

/**
 * Auth Service
 */
export const authService = {
  signin: async (credentials) => {
    const response = await axiosInstance.post(API_ENDPOINTS.SIGNIN, credentials);
    return response.data;
  },
  
  signup: async (userData) => {
    const response = await axiosInstance.post(API_ENDPOINTS.SIGNUP, userData);
    return response.data;
  },
  
  forgotPassword: async (email) => {
    const response = await axiosInstance.post(API_ENDPOINTS.FORGOT_PASSWORD, { email });
    return response.data;
  },
  
  verifyResetCode: async (resetCode) => {
    const response = await axiosInstance.post(API_ENDPOINTS.VERIFY_RESET_CODE, { resetCode });
    return response.data;
  },
  
  resetPassword: async (email, newPassword) => {
    const response = await axiosInstance.post(API_ENDPOINTS.RESET_PASSWORD, { email, newPassword });
    return response.data;
  },
  
  updateUserData: async (userData) => {
    const response = await axiosInstance.put(API_ENDPOINTS.UPDATE_USER_DATA, userData);
    return response.data;
  },
  
  updateUserPassword: async (currentPassword, password, passwordConfirm) => {
    const response = await axiosInstance.put(API_ENDPOINTS.UPDATE_USER_PASSWORD, {
      currentPassword,
      password,
      passwordConfirm,
    });
    return response.data;
  },
};

/**
 * Product Service
 */
export const productService = {
  getAll: async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.PRODUCTS);
    return response.data;
  },
  
  getById: async (id) => {
    const response = await axiosInstance.get(API_ENDPOINTS.PRODUCT_DETAILS(id));
    return response.data;
  },
  
  getCategories: async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.CATEGORIES);
    return response.data;
  },
  
  getBrands: async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.BRANDS);
    return response.data;
  },
};

/**
 * Cart Service
 */
export const cartService = {
  getCart: async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.CART);
    return response.data;
  },
  
  addItem: async (productId) => {
    const response = await axiosInstance.post(API_ENDPOINTS.CART, { productId });
    return response.data;
  },
  
  updateQuantity: async (productId, count) => {
    const response = await axiosInstance.put(API_ENDPOINTS.CART_ITEM(productId), { count });
    return response.data;
  },
  
  removeItem: async (productId) => {
    const response = await axiosInstance.delete(API_ENDPOINTS.CART_ITEM(productId));
    return response.data;
  },
  
  clearCart: async () => {
    const response = await axiosInstance.delete(API_ENDPOINTS.CART);
    return response.data;
  },
};

/**
 * Wishlist Service
 */
export const wishlistService = {
  getWishlist: async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.WISHLIST);
    return response.data;
  },
  
  addItem: async (productId) => {
    const response = await axiosInstance.post(API_ENDPOINTS.WISHLIST, { productId });
    return response.data;
  },
  
  removeItem: async (productId) => {
    const response = await axiosInstance.delete(API_ENDPOINTS.WISHLIST_ITEM(productId));
    return response.data;
  },
};

/**
 * Order Service
 */
export const orderService = {
  createOrder: async (cartId, shippingAddress, paymentMethod = 'cash') => {
    const response = await axiosInstance.post(API_ENDPOINTS.ORDER(cartId), {
      shippingAddress,
      paymentMethod,
    });
    return response.data;
  },
};

/**
 * Coupon Service
 */
export const couponService = {
  applyCoupon: async (couponCode) => {
    const response = await axiosInstance.post(API_ENDPOINTS.APPLY_COUPON, { name: couponCode });
    return response.data;
  },
};

export default axiosInstance;

