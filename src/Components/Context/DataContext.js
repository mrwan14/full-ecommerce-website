import { createContext, useState, useEffect } from "react";
import { getData } from "../../api/index";
import { getCatogries, getBestSellingData, getOurProducts } from "../../api";
export let DataContext = createContext(0);
export default function DataContextProvider(props) {
  const [data, setData] = useState(null);
  const [catogries, setCatogries] = useState(null);
  const [bestSellingData, setBestSellingData] = useState(null);
  const [ourProudcts, setOurProudcts] = useState(null);
  useEffect(() => {
    // Immediately Invoked Functionx
    (async () => {
      // Get items from storage and sync with state
      // Get data from API
      setData(await getData());
      setCatogries(await getCatogries());
      setBestSellingData(await getBestSellingData());
      setOurProudcts(await getOurProducts());
    })();
  }, []);

  const [wishList, setWishList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const addTocartItems = (product) => {
    const existingProduct = cartItems.find((p) => p.id === product.id);
    if (existingProduct) {
      // If the product already exists, do nothing
      product.quantity += 1;
      return;
    } else {
      // If the product doesn't exist, add it to the wish list array
      setCartItems([...cartItems, product]);
    }
  };
  function removeFromCartItems(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  }
  const incrementProduct = (id) => {
    const itemInCart = cartItems.find((item) => item.id == id);

    if (!itemInCart) {
      console.log(
        "found item:",
        data.find((item) => item.id == id)
      );
      setCartItems([
        ...cartItems,
        { ...data.find((item) => item.id == id), CountOfProduct: 1 },
      ]);
    } else {
      itemInCart.Quantity += 1;

      setCartItems(
        cartItems.map((item) => {
          if (item.id == itemInCart.id) {
            return itemInCart;
          } else {
            return item;
          }
        })
      );
    }
  };
  const decrementProduct = (id) => {
    const itemInCart = cartItems.find((item) => item.id == id);

    if (itemInCart.Quantity <= 1) {
      removeFromCartItems(id);
    } else {
      itemInCart.Quantity -= 1;

      setCartItems(
        cartItems.map((item) => {
          if (item.id == itemInCart.id) {
            return itemInCart;
          } else {
            return item;
          }
        })
      );
    }
  };

                                            

  useEffect(() => {
    const storedWishList = localStorage.getItem("wishList");
    if (storedWishList) {
      setWishList(JSON.parse(storedWishList));
    }
    const storeCartItems = localStorage.getItem("cartItems");
    if (storeCartItems) {
      setCartItems(JSON.parse(storeCartItems));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToWishList = (product) => {
    const existingProduct = wishList.find((p) => p.id === product.id);
    if (existingProduct) {
      // If the product already exists, do nothing
      return;
    } else {
      // If the product doesn't exist, add it to the wish list array
      setWishList([...wishList, product]);
    }
  };
  function removeFromWishList(product) {
    // Filter the product out of the wish list array
    const newWishList = wishList.filter((p) => p.id !== product.id);

    // Update the wish list state and local storage
    setWishList(newWishList);
  }

  return (
    <DataContext.Provider
      value={{
        data,
        catogries,
        bestSellingData,
        ourProudcts,
        addToWishList,
        removeFromWishList,
        wishList,
        cartItems,
        addTocartItems,
        removeFromCartItems,
        incrementProduct,
        decrementProduct
      }}
    >
      {data == null ||
      catogries == null ||
      bestSellingData == null ||
      wishList == null ||
      ourProudcts == null ? (
        <div>Loading...</div>
      ) : (
        props.children
      )}
    </DataContext.Provider>
  );
}
