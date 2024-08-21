import React, { useState } from "react";
import useCounter from "./main";
const Index2 = () => {
  const [increment, decrement, reset, count] = useCounter(10);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
};
export default Index2;
