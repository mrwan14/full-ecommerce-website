
// Routes
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAILS: (id) => `/productDetails/${id}`,
  CART: '/cart',
  WISHLIST: '/wishlist',
  LOGIN: '/login',
  SIGNUP: '/signup',
  CHECKOUT: '/createCashOrder',
  CONTACT: '/contact',
  ABOUT: '/about',
  MANAGE_ACCOUNT: '/manageaccount',
  UPDATE_USER_DATA: '/updateUserData',
  UPDATE_PASSWORD: '/updateUserPassword',
  FORGOT_PASSWORD: '/forgetPassword',
  VERIFY_RESET_CODE: '/verifyResetPassword',
  RESET_PASSWORD: '/resetPassword',
};

// Messages
export const MESSAGES = {
  LOGIN_SUCCESS: 'Logged in successfully',
  LOGOUT_SUCCESS: 'Logged out successfully',
  SIGNUP_SUCCESS: 'Account created successfully',
  ADD_TO_CART_SUCCESS: 'Product added to cart',
  REMOVE_FROM_CART_SUCCESS: 'Product removed from cart',
  ADD_TO_WISHLIST_SUCCESS: 'Product added to wishlist',
  REMOVE_FROM_WISHLIST_SUCCESS: 'Product removed from wishlist',
  ORDER_SUCCESS: 'Order placed successfully',
  COUPON_APPLIED: 'Coupon applied successfully',
  COUPON_INVALID: 'Invalid coupon code',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  TIMEOUT_ERROR: 'Request timeout. Please try again.',
  UNAUTHORIZED: 'Please login to continue',
  VALIDATION_ERROR: 'Please fill all required fields',
};

// Payment Methods
export const PAYMENT_METHODS = {
  CASH: 'cash',
  BANK: 'bank',
};

// Validation Rules
export const VALIDATION = {
  PHONE_MIN_LENGTH: 10,
  PHONE_MAX_LENGTH: 11,
  PASSWORD_MIN_LENGTH: 6,
};

// UI Constants
export const UI = {
  TOAST_DURATION: 3000,
  LOADING_TIMEOUT: 10000,
  DEBOUNCE_DELAY: 300,
};

// Product Display
export const PRODUCT_DISPLAY = {
  ITEMS_PER_PAGE: 10,
  FLASH_SALES_COUNT: 10,
  FEATURED_COUNT: 8,
};

