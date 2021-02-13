import { useState, useEffect } from "react";

const useFetch = (domain) => {
  const [datas, setDatas] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = async (controller) => {
    try {
      setError(null);
      setIsPending(true);
      const data = await fetch(`https://jsonplaceholder.typicode.com/${domain}`, {
        signal: controller.signal,
      });
      if (!data.ok) {
        setIsPending(false);
        setError("Could not fetch the data!");
      } else {
        const items = await data.json();
        setDatas(items);
        setIsPending(false);
      }
    } catch (error) {
      setIsPending(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    let controller = new AbortController();
    fetchItems(controller);

    return () => {
      controller.abort();
    };
  }, []);

  return { datas, isPending, error };
};

export default useFetch;
