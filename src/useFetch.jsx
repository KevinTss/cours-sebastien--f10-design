import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [datas, setDatas] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const data = await fetch(url);
      if (!data.ok) {
        throw Error("Could not fetch the data!");
      }
      const items = await data.json();
      setDatas(items);
      setIsPending(false);
      setError(null);
    } catch (error) {
      setIsPending(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return { datas, isPending, error };
};

export default useFetch;
