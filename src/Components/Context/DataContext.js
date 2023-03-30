import { createContext, useState, useEffect } from "react";
import { getData } from "../../api/index";
import { getCatogries, getBestSellingData, getOurProducts } from "../../api";
export let DataContext = createContext(0);
export default function DataContextProvider(props) {
  const [data, setData] = useState(null);
  const [catogries, setCatogries] = useState(null);
  const [bestSellingData, setBestSellingData] = useState(null);
  const [ourProudcts, setOurProudcts] = useState(null);
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const storedWishList = localStorage.getItem("wishList");
    if (storedWishList) {
      setWishList(JSON.parse(storedWishList));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

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
    const newWishList = wishList.filter(p => p.id !== product.id);
  
    // Update the wish list state and local storage
    setWishList(newWishList);
  }

  useEffect(() => {
    // Immediately Invoked Function
    (async () => {
      // Get items from storage and sync with state
      // Get data from API
      setData(await getData());
      setCatogries(await getCatogries());
      setBestSellingData(await getBestSellingData());
      setOurProudcts(await getOurProducts());
    })();
  }, []);

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
