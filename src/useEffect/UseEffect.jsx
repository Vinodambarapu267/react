import React, { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [pagewidth, setPagewidth] = useState(window.innerWidth);

  useEffect(() => {
    const Event = () => {
      setPagewidth(window.innerWidth);
    };
    window.addEventListener("resize", Event);
    console.log("hello my name is vinod");
    return () => {
      console.log("i am remo");
      window.removeEventListener("resize", Event);
    };
  });

  return (
    <center>
      <div>
        <h1 onClick={() => setToggle(!toggle)}>{toggle ? "open" : "close"}</h1>
        <h1>{pagewidth}</h1>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          decrease
        </button>
        <span> </span>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increase
        </button>
      </div>
    </center>
  );
}

export default Effect;
