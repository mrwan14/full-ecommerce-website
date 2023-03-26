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
  console.log(data);
  return (
    <DataContext.Provider
      value={{ data, catogries, bestSellingData, ourProudcts }}
    >
      {data == null ||
      catogries == null ||
      bestSellingData == null ||
      ourProudcts == null ? (
        <div>Loading...</div>
      ) : (
        props.children
      )}
    </DataContext.Provider>
  );
}
