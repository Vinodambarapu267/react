import React, { useEffect, useState } from "react";
import useFetch from "./usefetch";
const URL = "https://jsonplaceholder.typicode.com/posts";
const Posts = () => {
  const [postsData, loading, isError] = useFetch(URL);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (isError) {
    return <h2>something...</h2>;
  }
  return (
    <div>
      <h1>posts</h1>
      <ul>
        {postsData.map((eachuser) => {
          return <li key={eachuser.id}>{eachuser.title}</li>;
        })}
      </ul>
    </div>
  );
};
export default Posts;
