import { useState, useEffect } from "react";
function useFetch(URL) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchusers = async () => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchusers(URL);
  }, []);
  return [data, loading, isError];
}
export default useFetch;
