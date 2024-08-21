import React, { useState } from "react";
const State = () => {
  const [count, setcount] = useState(0);
  const [data, setdata] = useState({
    firstname: "vinod",
    lastname: "ambarapu",
  });
  const Changemyname = () => {
    setdata({
      firstname: "rmaa",
    });
  };
  const incrementt = () => {
    // setcount((prev)=>{
    //     return prev+1;
    // })
    setcount((prev) => prev + 1);
    setcount((prev) => {
      return prev + 1;
    });
  };
  const decrement = () => {
    setcount(count - 1);
  };
  return (
    <center>
      <h1>Use States</h1>
      <button onClick={decrement}>-</button>
      <span>you touched me {count}</span>
      <button onClick={incrementt}>+</button>
      <h1>my name is {data.firstname}</h1>
      <button onClick={Changemyname}>change</button>
    </center>
  );
};
export default State;
