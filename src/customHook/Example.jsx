import React, { useEffect, useState } from "react";
import Final2 from "./Example2";
import usePagetitle from "./usePage";
const Final = () => {
  const [count, setCount] = useState(0);
  usePagetitle(count);
  return (
    <div>
      <h1>Custom Hook</h1>
      <button onClick={() => setCount(count + 1)}>count:{count}</button>
      <Final2 />
    </div>
  );
};
export default Final;
