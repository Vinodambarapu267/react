import React, { useEffect, useState } from "react";
const URL = "https://jsonplaceholder.typicode.com/comments";
const Album = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchComm = async (apiURL) => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchComm(URL);
  }, []);
  if (loading) {
    return <h2>loading...</h2>;
  }
  if (isError) {
    return <h3>something...</h3>;
  }

  return (
    <div>
      <h1>ALBUMS</h1>
      {data.map((eachObj) => {
        const { id, name, email } = eachObj;
        return (
          <li key={id}>
            <h1>{name}</h1>
            <h4>{email}</h4>
          </li>
        );
      })}
    </div>
  );
};

export default Album;
