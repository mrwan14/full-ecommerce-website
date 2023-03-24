import { createContext, useState, useEffect } from "react";
import { getData } from "../../api/index";
export let DataContext = createContext(0);

export default function DataContextProvider(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    // Immediately Invoked Function
    (async () => {
      // Get items from storage and sync with state

      // Get data from API
      setData(await getData());
    })();
  }, []);
  console.log(data);
  return (
    <DataContext.Provider value={data}>
      {data == null ? <div>Loading...</div> : props.children}
    </DataContext.Provider>
  );
}
