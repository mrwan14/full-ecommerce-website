# E-Commerce Website

A full-featured e-commerce application built with React, featuring product browsing, shopping cart, wishlist, user authentication, and order management.

## Features

- 🛍️ **Product Browsing**: View all products, categories, and brands
- 🔍 **Product Details**: Detailed product information with image gallery
- 🛒 **Shopping Cart**: Add, update, and remove items from cart
- ❤️ **Wishlist**: Save favorite products for later
- 👤 **User Authentication**: Sign up, login, password reset
- 💳 **Checkout**: Secure checkout with shipping address and payment method selection
- 🎫 **Coupon Codes**: Apply discount coupons
- 📱 **Responsive Design**: Works on all devices
- ⚡ **Performance Optimized**: Lazy loading, code splitting, memoization

## Tech Stack

- **React 18** - UI library
- **React Router DOM** - Routing
- **Axios** - HTTP client
- **Formik & Yup** - Form handling and validation
- **React Toastify** - Notifications
- **Bootstrap 5** - Styling
- **React Icons** - Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd full-ecommerce-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory (optional):
```env
REACT_APP_API_URL=https://ecommerce.routemisr.com
```

4. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── Components/          # React components
│   ├── Cart/           # Shopping cart components
│   ├── Context/        # React Context providers
│   ├── Home/           # Home page components
│   ├── ProductCard/    # Reusable product card
│   ├── ProductDetails/ # Product detail page
│   └── ...
├── config/             # Configuration files
│   └── api.js          # API endpoints configuration
├── services/           # API service layer
│   └── apiService.js   # Centralized API calls
├── constants/          # Application constants
│   └── index.js        # Routes, messages, etc.
└── App.js              # Main app component
```

## API Configuration

The application uses a centralized API configuration. Update `src/config/api.js` to change the API base URL or endpoints.

## Features in Detail

### Authentication
- User registration and login
- Password reset flow
- Protected routes
- Session management

### Shopping Cart
- Add/remove products
- Update quantities
- Apply coupon codes
- Calculate totals

### Product Management
- Browse all products
- Filter by category
- View product details
- Add to wishlist

### Checkout
- Shipping address validation
- Payment method selection
- Order confirmation

## Performance Optimizations

- **Lazy Loading**: Routes are lazy-loaded for faster initial load
- **Code Splitting**: Components split into separate chunks
- **Memoization**: React.memo, useMemo, and useCallback used where appropriate
- **Image Optimization**: Lazy loading for product images
- **Error Boundaries**: Graceful error handling

## Testing

Run tests:
```bash
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please open an issue on GitHub.
