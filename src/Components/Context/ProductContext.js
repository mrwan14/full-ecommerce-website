import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export let ProductContext = createContext(0);
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

  async function getBrands() {
    let { data } = await axios.get(`${BaseUrl}/api/v1/brands`);

    setBrands(data.data);
  }
  async function getcategories() {
    let { data } = await axios.get(`${BaseUrl}/api/v1/categories`);

    setcategories(data.data);
  }

  async function getProducts() {
    let { data } = await axios.get(`${BaseUrl}/api/v1/products`);
    setProducts(data.data);
  }
  async function getWishList() {
    let { data } = await axios.get(`${BaseUrl}/api/v1/wishlist`, {
      headers: { token: localStorage.getItem("userToken") },
    });
    setWishList(data.data);
  }

  async function getSpecificCategory(catogry) {
    let { data } = await axios.get(
      `${BaseUrl}/api/v1/categories/${catogry._id}`
    );
  }

  const addToWishList = async (product) => {
    let { data } = await axios.post(
      `${BaseUrl}/api/v1/wishlist`,
      { productId: product.id },

      {
        headers: { token: localStorage.getItem("userToken") },
      }
    );
    if (data.status === "success") {
      notify(data.message);
      getWishList();
    }
  };
  async function removeFromWishList(product) {
    let { data } = await axios.delete(
      `${BaseUrl}/api/v1/wishlist/${product.id}`,
      {
        headers: { token: localStorage.getItem("userToken") },
      }
    );
    setWishList(WishList.filter((item) => item.id !== product.id));
    notify(data.message);
  }
  async function getUserCart() {
    let { data } = await axios.get(
      `${BaseUrl}/api/v1/cart`,

      {
        headers: { token: localStorage.getItem("userToken") },
      }
    );
    setCart(data.data.products);
    setCartDetails(data);
  }
  async function addProductToCart(product) {
    let { data } = await axios.post(
      `${BaseUrl}/api/v1/cart`,
      { productId: product.id },

      {
        headers: { token: localStorage.getItem("userToken") },
      }
    );
    if (data.status === "success") {
      notify(data.message);
      getUserCart();
    }
  }
  async function updateCartProductQuantity(product, updateMethod) {
    await axios.put(
      `${BaseUrl}/api/v1/cart/${product.product._id}`,
      { count: `${product.count + (updateMethod === "increament" ? 1 : -1)}` },
      {
        headers: { token: localStorage.getItem("userToken") },
      }
    );

    getUserCart();

    if (product.count < 1) {
      deleteSpesificProductFromCart(product);
    }
  }
  async function deleteSpesificProductFromCart(product) {
    await axios.delete(`${BaseUrl}/api/V1/cart/${product.product._id}`, {
      headers: { token: localStorage.getItem("userToken") },
    });
    setCart(Cart.filter((item) => item.id !== product.product._id));
  }
  async function clearUserCart() {
    setCart([]);

    let { data } = await axios.delete(`${BaseUrl}/api/V1/cart`, {
      headers: { token: localStorage.getItem("userToken") },
    });
    notify(data.message);
  }

  async function getProductDetails(product) {
    
    let { data } = await axios.get(`${BaseUrl}/api/v1/products/${product._id}`);
    console.log(data.data);
    setProductDetails(data.data);
  }

  useEffect(() => {
    getBrands();
    getProducts();
    getWishList();
    getUserCart();
    getcategories();
  }, []);
  useEffect(() => {
    getUserCart();
  }, [Cart]);

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
        ProductDetails
      }}
    >
      {Products === [] || categories === [] || Brands === [] ? (
        <>loading</>
      ) : (
        <div> {props.children} </div>
      )}{" "}
    </ProductContext.Provider>
  );
}
