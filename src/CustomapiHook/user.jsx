import React, { useEffect, useState } from "react";
import useFetch from "./usefetch";
const URL = "https://jsonplaceholder.typicode.com/users";
const User = () => {
  const [userData, loading, isError] = useFetch(URL);
  if (loading) {
    return <h1>loading...</h1>;
  }
  if (isError) {
    return <h2>something...</h2>;
  }
  return (
    <div>
      <h1>users</h1>
      <ul>
        {userData.map((eachuser) => {
          return <li key={eachuser.id}>{eachuser.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default User;
