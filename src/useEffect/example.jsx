import React, { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const Index = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchusersdata = async (apiURL) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      setUsersData(data);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (response.status === 404) {
        throw new Error("data not found");
      }
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        msg: error.msg || "something is went wrong, pls try again..",
      });
    }
  };

  useEffect(() => {
    fetchusersdata(URL);
  }, []);
  if (loading) {
    return <h3>loading...</h3>;
  }
  if (isError?.status) {
    return (
      <div>
        <h3 style={{ color: "red" }}>{isError?.msg}</h3>
      </div>
    );
  }
  return (
    <div>
      <h1>data</h1>
      <ul>
        {usersData.map((eachObj) => {
          const { name, email, id } = eachObj;
          return (
            <li key={id}>
              <div>{name}</div>
              <div>{email}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
