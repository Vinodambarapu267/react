import React, { useEffect, useState } from "react";
import usePagetitle from "./usePage";
const Final2 = () => {
  const [count, setCount] = useState(0);
  usePagetitle(count);
  return (
    <div>
      <h1>Custom Hook</h1>
      <button onClick={() => setCount(count + 1)}>count:{count}</button>
    </div>
  );
};
export default Final2;
