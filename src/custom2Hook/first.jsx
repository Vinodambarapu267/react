import React, { useState } from "react";
import useCounter from "./main";
const Index = () => {
  const [increment, decrement, reset, count] = useCounter(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
};
export default Index;
