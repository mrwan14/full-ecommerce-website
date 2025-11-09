import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export let ProductContext = createContext(0);

// Create axios instance with timeout
const axiosInstance = axios.create({
  timeout: 10000, // 10 seconds timeout
});

/**
 * ProductContextProvider Component
 * Provides global state management for products, cart, wishlist, and API operations
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} ProductContext provider with global state
 */
export function ProductContextProvider(props) {
  const notify = (paramter) => toast(paramter);
  const BaseUrl = "https://ecommerce.routemisr.com";

  const [Products, setProducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [Brands, setBrands] = useState([]);
  const [WishList, setWishList] = useState([]);
  const [Cart, setCart] = useState([]);
  const [CartDetails, setCartDetails] = useState([]);
  const [ProductDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  async function getBrands() {
    try {
      let { data } = await axiosInstance.get(`${BaseUrl}/api/v1/brands`);
      setBrands(data.data || []);
      return true;
    } catch (error) {
      console.error("Error fetching brands:", error);
      if (error.code === 'ECONNABORTED') {
        notify("API timeout - Server may be slow or unavailable");
        setHasError(true);
      } else if (error.response) {
        notify(`Failed to load brands: ${error.response.status}`);
      } else {
        notify("Failed to load brands - Network error");
        setHasError(true);
      }
      setBrands([]); // Set empty array on error
      return false;
    }
  }
  async function getcategories() {
    try {
      let { data } = await axiosInstance.get(`${BaseUrl}/api/v1/categories`);
      setcategories(data.data || []);
      return true;
    } catch (error) {
      console.error("Error fetching categories:", error);
      if (error.code === 'ECONNABORTED') {
        notify("API timeout - Server may be slow or unavailable");
        setHasError(true);
      } else if (error.response) {
        notify(`Failed to load categories: ${error.response.status}`);
      } else {
        notify("Failed to load categories - Network error");
        setHasError(true);
      }
      setcategories([]); // Set empty array on error
      return false;
    }
  }

  async function getProducts() {
    try {
      let { data } = await axiosInstance.get(`${BaseUrl}/api/v1/products`);
      setProducts(data.data || []);
      return true;
    } catch (error) {
      console.error("Error fetching products:", error);
      if (error.code === 'ECONNABORTED') {
        notify("API timeout - Server may be slow or unavailable. The API server at ecommerce.routemisr.com is not responding.");
        setHasError(true);
      } else if (error.response) {
        notify(`Failed to load products: ${error.response.status}`);
      } else {
        notify("Failed to load products - Network error");
        setHasError(true);
      }
      setProducts([]); // Set empty array on error
      return false;
    }
  }
  async function getWishList() {
    const token = localStorage.getItem("userToken");
    if (!token) return;
    
    try {
      let { data } = await axiosInstance.get(`${BaseUrl}/api/v1/wishlist`, {
        headers: { token },
        timeout: 10000,
      });
      setWishList(data.data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      // Don't notify if user is not logged in
      if (error.response?.status !== 401) {
        if (error.code === 'ECONNABORTED') {
          notify("Request timeout - Please check your connection");
        } else {
          notify("Failed to load wishlist");
        }
      }
    }
  }

  async function getSpecificCategory(catogry) {
    try {
      let { data } = await axiosInstance.get(
        `${BaseUrl}/api/v1/categories/${catogry._id}`,
        { timeout: 10000 }
      );
      // Category data can be used for filtering products if needed
      return data;
    } catch (error) {
      console.error("Error fetching category:", error);
      if (error.code === 'ECONNABORTED') {
        notify("Request timeout - Please check your connection");
      } else {
        notify("Failed to load category");
      }
    }
  }

  const addToWishList = async (product) => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      notify("Please login to add items to wishlist");
      return;
    }
    
    try {
      let { data } = await axiosInstance.post(
        `${BaseUrl}/api/v1/wishlist`,
        { productId: product.id },
        {
          headers: { token },
          timeout: 10000,
        }
      );
      if (data.status === "success") {
        notify(data.message);
        getWishList();
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      if (error.code === 'ECONNABORTED') {
        notify("Request timeout - Please try again");
      } else {
        notify(error.response?.data?.message || "Failed to add to wishlist");
      }
    }
  };
  async function removeFromWishList(product) {
    const token = localStorage.getItem("userToken");
    if (!token) return;
    
    try {
      let { data } = await axiosInstance.delete(
        `${BaseUrl}/api/v1/wishlist/${product.id}`,
        {
          headers: { token },
          timeout: 10000,
        }
      );
      setWishList(WishList.filter((item) => item.id !== product.id));
      notify(data.message);
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      if (error.code === 'ECONNABORTED') {
        notify("Request timeout - Please try again");
      } else {
        notify(error.response?.data?.message || "Failed to remove from wishlist");
      }
    }
  }
  async function getUserCart() {
    const token = localStorage.getItem("userToken");
    if (!token) {
      setCart([]);
      setCartDetails({});
      return;
    }
    
    try {
      let { data } = await axiosInstance.get(
        `${BaseUrl}/api/v1/cart`,
        {
          headers: { token },
          timeout: 10000,
        }
      );
      setCart(data.data.products);
      setCartDetails(data);
    } catch (error) {
      console.error("Error fetching cart:", error);
      if (error.response?.status !== 401) {
        if (error.code === 'ECONNABORTED') {
          notify("Request timeout - Please check your connection");
        } else {
          notify("Failed to load cart");
        }
      }
      setCart([]);
      setCartDetails({});
    }
  }
  async function addProductToCart(product) {
    const token = localStorage.getItem("userToken");
    if (!token) {
      notify("Please login to add items to cart");
      return;
    }
    
    try {
      let { data } = await axiosInstance.post(
        `${BaseUrl}/api/v1/cart`,
        { productId: product.id },
        {
          headers: { token },
          timeout: 10000,
        }
      );
      if (data.status === "success") {
        notify(data.message);
        getUserCart();
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      if (error.code === 'ECONNABORTED') {
        notify("Request timeout - Please try again");
      } else {
        notify(error.response?.data?.message || "Failed to add to cart");
      }
    }
  }
  async function updateCartProductQuantity(product, updateMethod) {
    const token = localStorage.getItem("userToken");
    if (!token) return;
    
    try {
      await axiosInstance.put(
        `${BaseUrl}/api/v1/cart/${product.product._id}`,
        { count: `${product.count + (updateMethod === "increament" ? 1 : -1)}` },
        {
          headers: { token },
          timeout: 10000,
        }
      );

      await getUserCart();

      if (product.count < 1) {
        deleteSpesificProductFromCart(product);
      }
    } catch (error) {
      console.error("Error updating cart quantity:", error);
      if (error.code === 'ECONNABORTED') {
        notify("Request timeout - Please try again");
      } else {
        notify(error.response?.data?.message || "Failed to update cart");
      }
    }
  }
  async function deleteSpesificProductFromCart(product) {
    const token = localStorage.getItem("userToken");
    if (!token) return;
    
    try {
      await axiosInstance.delete(`${BaseUrl}/api/v1/cart/${product.product._id}`, {
        headers: { token },
        timeout: 10000,
      });
      setCart(Cart.filter((item) => item.id !== product.product._id));
    } catch (error) {
      console.error("Error deleting from cart:", error);
      if (error.code === 'ECONNABORTED') {
        notify("Request timeout - Please try again");
      } else {
        notify(error.response?.data?.message || "Failed to remove from cart");
      }
    }
  }
  async function clearUserCart() {
    const token = localStorage.getItem("userToken");
    if (!token) return;
    
    setCart([]);

    try {
      let { data } = await axiosInstance.delete(`${BaseUrl}/api/v1/cart`, {
        headers: { token },
        timeout: 10000,
      });
      notify(data.message);
    } catch (error) {
      console.error("Error clearing cart:", error);
      if (error.code === 'ECONNABORTED') {
        notify("Request timeout - Please try again");
      } else {
        notify(error.response?.data?.message || "Failed to clear cart");
      }
    }
  }

  // Clear cart and wishlist state (for logout)
  function clearUserData() {
    setCart([]);
    setCartDetails([]);
    setWishList([]);
  }

  async function getProductDetails(product) {
    try {
      let { data } = await axiosInstance.get(`${BaseUrl}/api/v1/products/${product._id}`, {
        timeout: 10000,
      });
      setProductDetails(data.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
      if (error.code === 'ECONNABORTED') {
        notify("Request timeout - Please check your connection");
      } else {
        notify("Failed to load product details");
      }
    }
  }

  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      setHasError(false);
      
      // Load all data in parallel
      const results = await Promise.allSettled([
        getBrands(),
        getProducts(),
        getcategories(),
      ]);
      
      // Only fetch user-specific data if logged in
      const token = localStorage.getItem("userToken");
      if (token) {
        getWishList();
        getUserCart();
      }
      
      // Check if any request succeeded
      const hasSuccess = results.some(result => result.status === 'fulfilled' && result.value === true);
      
      setIsLoading(false);
      
      if (!hasSuccess && results.every(result => result.status === 'rejected' || result.value === false)) {
        notify("Unable to connect to API server. Please check your internet connection or try again later.");
      }
    };
    
    loadInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Use a ref to prevent rapid re-renders
  const renderContent = () => {
    if (isLoading) {
      return (
        <div key="loading" className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <div>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading products...</p>
          </div>
        </div>
      );
    }
    
    if (hasError && Products.length === 0 && categories.length === 0 && Brands.length === 0) {
      return (
        <div key="error" className="d-flex justify-content-center align-items-center flex-column" style={{ minHeight: "100vh" }}>
          <div className="text-center p-5">
            <h3 className="text-danger mb-3">API Connection Error</h3>
            <p className="mb-4">
              Unable to connect to the API server. The server at <code>ecommerce.routemisr.com</code> is not responding.
            </p>
            <p className="mb-4 text-muted">
              This could be due to:
            </p>
            <ul className="text-start d-inline-block">
              <li>API server is down or slow</li>
              <li>Network connectivity issues</li>
              <li>CORS configuration problems</li>
            </ul>
            <button 
              className="btn btn-primary mt-4"
              onClick={() => {
                setIsLoading(true);
                setHasError(false);
                window.location.reload();
              }}
            >
              Retry Connection
            </button>
          </div>
        </div>
      );
    }
    
    return (
      <div key="content"> {props.children} </div>
    );
  };

  return (
    <ProductContext.Provider
      value={{
        Products,
        categories,
        Brands,
        addToWishList,
        removeFromWishList,
        WishList,
        getSpecificCategory,
        addProductToCart,
        Cart,
        updateCartProductQuantity,
        clearUserCart,
        CartDetails,
        getProductDetails,
        ProductDetails,
        clearUserData,
      }}
    >
      {renderContent()}
    </ProductContext.Provider>
  );
}
